const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const contentDirectory = path.join(projectRoot, "content");
const blogDirectory = path.join(contentDirectory, "blog");
const outputDirectory = path.join(projectRoot, "migration");
const inventoryPath = path.join(outputDirectory, "phase-1-route-inventory.json");
const checklistPath = path.join(outputDirectory, "phase-1-url-parity-checklist.md");

const markdownExtensions = new Set([".md", ".markdown"]);
const ignoredStaticSections = new Set(["blog", "_drafts", "_ready"]);

function walkFiles(directoryPath) {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
  const files = [];

  entries
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(entry => {
      const fullPath = path.join(directoryPath, entry.name);

      if (entry.isDirectory()) {
        files.push(...walkFiles(fullPath));
        return;
      }

      if (entry.isFile()) {
        files.push(fullPath);
      }
    });

  return files;
}

function toPosixPath(filePath) {
  return filePath.split(path.sep).join("/");
}

function normalizeRoute(route) {
  if (!route) {
    return null;
  }

  let normalized = route.trim();

  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }

  if (!normalized.endsWith("/")) {
    normalized = `${normalized}/`;
  }

  return normalized.replace(/\/{2,}/g, "/");
}

function readFrontMatterValue(absoluteFilePath, key) {
  const source = fs.readFileSync(absoluteFilePath, "utf8");
  const frontMatterMatch = source.match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/);

  if (!frontMatterMatch) {
    return null;
  }

  const keyPattern = new RegExp(`^${key}:\\s*(.+)$`, "m");
  const keyMatch = frontMatterMatch[1].match(keyPattern);

  if (!keyMatch) {
    return null;
  }

  return keyMatch[1].trim().replace(/^['"]|['"]$/g, "");
}

function toPostRoute(absoluteFilePath) {
  const relativeFilePath = toPosixPath(path.relative(blogDirectory, absoluteFilePath));
  let withoutExtension = relativeFilePath.replace(/\.(md|markdown)$/i, "");

  if (withoutExtension.endsWith("/index")) {
    withoutExtension = withoutExtension.slice(0, -"/index".length);
  }

  return normalizeRoute(withoutExtension);
}

function toStaticPageRoute(absoluteFilePath) {
  const configuredRoute = readFrontMatterValue(absoluteFilePath, "url");
  if (configuredRoute) {
    return normalizeRoute(configuredRoute);
  }

  const relativeFilePath = toPosixPath(path.relative(contentDirectory, absoluteFilePath));
  let withoutExtension = relativeFilePath.replace(/\.(md|markdown)$/i, "");

  if (withoutExtension === "_index" || withoutExtension === "index") {
    return "/";
  }

  if (withoutExtension.endsWith("/_index")) {
    withoutExtension = withoutExtension.slice(0, -"/_index".length);
  } else if (withoutExtension.endsWith("/index")) {
    withoutExtension = withoutExtension.slice(0, -"/index".length);
  }

  return normalizeRoute(withoutExtension);
}

function isStaticContentFile(absoluteFilePath) {
  const relativeFilePath = toPosixPath(path.relative(contentDirectory, absoluteFilePath));
  const topLevelSection = relativeFilePath.split("/")[0];
  return !ignoredStaticSections.has(topLevelSection);
}

function formatChecklistSection(title, routes) {
  const lines = [`## ${title} (${routes.length})`, ""];

  routes.forEach(route => {
    lines.push(`- [ ] \`${route}\``);
  });

  lines.push("");
  return lines.join("\n");
}

function getPostRoutes() {
  const allFiles = walkFiles(blogDirectory);

  return allFiles
    .filter(filePath => markdownExtensions.has(path.extname(filePath).toLowerCase()))
    .map(toPostRoute)
    .sort((a, b) => a.localeCompare(b));
}

function getStaticPageRoutes() {
  const allFiles = walkFiles(contentDirectory);
  const routes = new Set(["/"]);

  allFiles
    .filter(filePath => markdownExtensions.has(path.extname(filePath).toLowerCase()))
    .filter(isStaticContentFile)
    .map(toStaticPageRoute)
    .filter(Boolean)
    .forEach(route => routes.add(route));

  return Array.from(routes).sort((a, b) => a.localeCompare(b));
}

function writeArtifacts() {
  const staticPageRoutes = getStaticPageRoutes();
  const postRoutes = getPostRoutes();
  const allRoutes = Array.from(new Set([...staticPageRoutes, ...postRoutes])).sort((a, b) =>
    a.localeCompare(b)
  );

  const inventory = {
    generatedAt: new Date().toISOString(),
    sources: {
      contentDirectory: "content",
      blogDirectory: "content/blog",
      staticContentStrategy: "content markdown files excluding blog/_drafts/_ready",
      postExtensions: Array.from(markdownExtensions.values()),
    },
    counts: {
      staticPages: staticPageRoutes.length,
      posts: postRoutes.length,
      totalRoutes: allRoutes.length,
    },
    routes: {
      staticPages: staticPageRoutes,
      posts: postRoutes,
      all: allRoutes,
    },
  };

  const checklist = [
    "# Phase 1 URL Parity Checklist",
    "",
    "Generated from current Hugo content routes for parity verification.",
    "",
    `Generated at: ${inventory.generatedAt}`,
    "",
    "## Usage",
    "",
    "Mark routes as verified against generated Hugo output.",
    "",
    formatChecklistSection("Static pages", staticPageRoutes).trimEnd(),
    "",
    formatChecklistSection("Post routes", postRoutes).trimEnd(),
    "",
  ].join("\n");

  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(inventoryPath, `${JSON.stringify(inventory, null, 2)}\n`, "utf8");
  fs.writeFileSync(checklistPath, checklist, "utf8");

  console.log(
    `Wrote ${inventory.counts.totalRoutes} routes (${inventory.counts.staticPages} static, ${inventory.counts.posts} posts).`
  );
  console.log(`- ${path.relative(projectRoot, inventoryPath)}`);
  console.log(`- ${path.relative(projectRoot, checklistPath)}`);
}

writeArtifacts();
