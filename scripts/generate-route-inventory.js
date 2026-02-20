const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const blogDirectory = path.join(projectRoot, "content", "blog");
const pagesDirectory = path.join(projectRoot, "src", "pages");
const outputDirectory = path.join(projectRoot, "migration");
const inventoryPath = path.join(outputDirectory, "phase-1-route-inventory.json");
const checklistPath = path.join(outputDirectory, "phase-1-url-parity-checklist.md");

const markdownExtensions = new Set([".md", ".markdown"]);
const pageExtensions = new Set([".js", ".jsx", ".ts", ".tsx", ".md", ".mdx"]);

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

function toPostRoute(absoluteFilePath) {
  const relativeFilePath = toPosixPath(path.relative(blogDirectory, absoluteFilePath));
  let withoutExtension = relativeFilePath.replace(/\.(md|markdown)$/i, "");

  if (withoutExtension.endsWith("/index")) {
    withoutExtension = withoutExtension.slice(0, -"/index".length);
  }

  return `/${withoutExtension.replace(/^\/+/, "")}/`;
}

function toStaticPageRoute(absoluteFilePath) {
  const relativeFilePath = toPosixPath(path.relative(pagesDirectory, absoluteFilePath));
  const withoutExtension = relativeFilePath.replace(/\.[^.]+$/, "");

  if (withoutExtension === "index") {
    return "/";
  }

  return `/${withoutExtension.replace(/^\/+/, "")}/`;
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
  const allFiles = walkFiles(pagesDirectory);

  return allFiles
    .filter(filePath => pageExtensions.has(path.extname(filePath).toLowerCase()))
    .map(toStaticPageRoute)
    .sort((a, b) => a.localeCompare(b));
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
      blogDirectory: "content/blog",
      pagesDirectory: "src/pages",
      postExtensions: Array.from(markdownExtensions.values()),
      pageExtensions: Array.from(pageExtensions.values()),
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
    "Generated from current Gatsby routes for migration parity verification.",
    "",
    `Generated at: ${inventory.generatedAt}`,
    "",
    "## Usage",
    "",
    "Mark routes as verified when the Hugo build is available.",
    "",
    formatChecklistSection("Static pages", staticPageRoutes).trimEnd(),
    "",
    formatChecklistSection("Post routes", postRoutes).trimEnd(),
    "",
    "## Known pre-existing route risks",
    "",
    "- [ ] `/focus-closer-to-zero` (expected typo risk, likely `/focus-get-closer-to-zero/`)",
    "- [ ] `/work-out-load` (expected typo risk, likely `/work-out-loud/`)",
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
