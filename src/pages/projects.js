import React from "react";
import styled from "styled-components";

// components
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectStyle = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  .content {
    padding-right: 1rem;
  }
`;

const ProjectType = {
  WEBSITE: "website",
  WEB_APP: "web-app",
  MOBILE_APP: "mobile-app",
};

const projects = [
  {
    title: "Envie | TeamWALT, a Southern Bank Initiative",
    description:
      "Building a mobile app to encourage creating a habit of savings by playing the envelope game everyday.",
    link: "http://savewithenvie.com",
    role: "consultant",
    date: "2020",
    type: ProjectType.MOBILE_APP,
    outcome: "",
    image: "envie.png",
  },
  {
    title: "Sevco",
    description:
      "Building a JavaScript web app for visualizing device inventory on a network.",
    demoLink: "https://www.youtube.com/watch?v=7H6zxWnzwcQ",
    link: "https://sevcosecurity.com/",
    role: "consultant",
    date: "2020",
    type: ProjectType.WEB_APP,
    outcome: "",
    image: "sevco.png",
  },
  {
    title: "FunFact",
    description:
      "Building an iOS game as an ice breaker for small groups to get to know each other.",
    demoLink: "https://youtu.be/Gd9OkNIbeP8?t=330",
    link: "https://youtu.be/-KbIMCVYA9U",
    role: "developer",
    date: "2019",
    type: ProjectType.MOBILE_APP,
    outcome: "🏆 App of the Day in 2022",
    image: "funfact-game.webp",
  },
  {
    title: "Synapase | The Vertex Project",
    description:
      "Building a complex JavaScript web app for data analysts to visualize data they query from a forcegraph into maps, tables, and nodes.",
    demoLink: "https://youtu.be/Gd9OkNIbeP8?t=330",
    link: "https://vertex.link/",
    role: "developer",
    date: "2019",
    type: ProjectType.WEB_APP,
    outcome: "",
    image: "vtx-zoom.png",
  },
  {
    title: "Kontakt Mission USA",
    description:
      "A Wordpress theme from scratch + customizations for an non-profit organization to help Germany.",
    link: "https://www.gokmusa.org/",
    role: "developer",
    date: "2016",
    type: ProjectType.WEBSITE,
    outcome: "",
  },
];

const ProjectsPage = (props) => {
  return (
    <Layout location={props.location}>
      <Seo
        title="Projects"
        description="Record of projects I've worked on"
        keywords={[]}
      />
      <section>
        <h1>Past Work</h1>
        <p>
          On-site or remote, these are projects and the role I played. Please
          email me at{" "}
          <a href="mailto:chance@sodiumhalogen.com">chance@sodiumhalogen.com</a>{" "}
          for us to collaborate on your project.
        </p>
        {projects.map((project) => (
          <ProjectStyle key={project.title}>
            <div className="content">
              {project.link ? (
                <a href={project.link}>
                  <h3 style={{ margin: 0 }}>{project.title}</h3>
                </a>
              ) : (
                <h3 style={{ margin: 0 }}>{project.title}</h3>
              )}
              <p style={{ margin: 0, color: "#878787" }}>
                {project.date} | {project.type} | {project.role}
              </p>
              {project.description ? (
                <p>
                  {project.description}
                  {project.demoLink ? (
                    <>
                      {" "}
                      <a href={project.demoLink}>Watch the app demo.</a>
                    </>
                  ) : null}
                </p>
              ) : null}
              {project.outcome ? (
                <p>Business Outcome: {project.outcome}</p>
              ) : null}
            </div>
            {project.image ? (
              <div>
                <img
                  src={project.image}
                  alt={project.title + " example screenshot"}
                  style={{
                    maxWidth: "330px",
                    maxHeight: "400px",
                    height: "max-content",
                  }}
                  // height={200}
                />
              </div>
            ) : null}
          </ProjectStyle>
        ))}
      </section>
    </Layout>
  );
};

export default ProjectsPage;
