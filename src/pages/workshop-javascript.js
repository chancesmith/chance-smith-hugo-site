import React from "react";

// components
import Layout from "../components/layout";
import Seo from "../components/seo";

// images
import workshopHeader from "../../static/Javascript-Workshop-Wide.png";

const EnrollNowLink = () => (
  <a href="https://lu.ma/chancesmith">Enroll Now &gt;&gt;</a>
);

const WorkshopsPage = (props) => {
  return (
    <Layout location={props.location}>
      <Seo
        title="Javascript Fundamentals Workshop"
        description="Introduce basic programming concepts—no prior experience is needed."
        keywords={[`javascript fundamentals workshop`]}
      />
      <section>
        <h1>Javascript Fundamentals Workshop</h1>

        <img
          src={workshopHeader}
          alt="Javascript Fundamentals Workshop with Chance"
        />

        <p>
          <strong>$150 – 3 hour workshop</strong>
          <br />
          <EnrollNowLink />
        </p>

        <p>
          Take someone with no knowledge of computer programming and get them
          started with JavaScript
        </p>

        <p>
          Geared for 12-17 and 18+ year olds that have great imaginations, like
          figuring out how things work, or just love technology. This workshop
          will introduce them to basic programming concepts—no prior experience
          is needed.
        </p>

        <p>Interested in learning to program?</p>

        <p>Do you want to build apps or solve problems using technology?</p>

        <h2>JavaScript can get you there. It’s:</h2>
        <ul>
          <li>the most ubiquitous programming language around</li>
          <li>the foundation of popular frameworks like React and Angular</li>
          <li>what gives the ability for web pages to interact</li>
        </ul>

        <h2>The Workshop</h2>
        <p>
          Hi, I’m Chance Smith! In this workshop, I’ll help you build a
          foundation in JavaScript. We will start out with common parts in
          JavaScript, build up to variables and functions, and finally use
          GitHub Pages to put your code on the web. Please email me at{" "}
          <a href="mailto:chance@sodiumhalogen.com">chance@sodiumhalogen.com</a>{" "}
          if you have questions at all.
        </p>

        <strong>By the end of the workshop, you will:</strong>
        <ul>
          <li>be able to write common statements and expressions</li>
          <li>
            use variables, conditionals, loops, and functions to execute
            operations
          </li>
          <li>have something running on the world wide web</li>
          <li>
            be equipped with the tools you need to keep learning and building
            JavaScript applications
          </li>
        </ul>

        <h2>Topics</h2>
        <ul>
          <li>JavaScript statements and expressions</li>
          <li>Code comments</li>
          <li>
            JavaScript’s common types: string, boolean, number, undefined, and
            null
          </li>
          <li>Operators, Conditionals, and Variables</li>
          <li>Loops and Functions</li>
          <li>Functions</li>
          <li>JavaScript’s main data structures: objects and arrays</li>
          <li>Using Netlify to put your code on the web</li>
        </ul>

        <h2>Pre-requisites</h2>
        <ul>
          <li>
            A computer with an internet connection and Google Chrome installed
          </li>
        </ul>

        {/* <h2>Upcoming workshops</h2>
        <p>⚠️ Max 5 seats per workshop.</p>
        <ul>
          
          <li>
            March 12th, 2022 8-11am Ages 12-17{" "}
            <a href="https://attheco.com">@theCO</a>
          </li>
          <li>
            March 19th, 2022 8-11am Ages 18+{" "}
            <a href="https://attheco.com">@theCO</a>
          </li>
        </ul> */}

        <EnrollNowLink />
      </section>
    </Layout>
  );
};

export default WorkshopsPage;
