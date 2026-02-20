import React from "react";

// components
import Layout from "../components/layout";
import Seo from "../components/seo";

const WorkshopsPage = (props) => {
  return (
    <Layout location={props.location}>
      <Seo
        title="Coaching"
        description="On-site or remote, these One-on-One sessions and workshops for improving your skills as a developer"
        keywords={[
          `one on one coaching`,
          `development coaching`,
          `development workshops`,
        ]}
      />
      <section>
        <h1>Coaching &amp; Workshops</h1>
        <p>
          On-site or remote, these One-on-One sessions and workshops with Chance
          are a valuable and effective way to improve your skills as a business
          owner, software developer, and project manager. Please email me at{" "}
          <a href="mailto:chance@sodiumhalogen.com">chance@sodiumhalogen.com</a>{" "}
          if you have questions at all.
        </p>

        <h2>Strategy Consult (45 mins) - $350</h2>
        <p>
          We can discuss actionable plans for your upcoming or ongoing project.
          This is a One-on-One video chat over Google Meet and you can ask me
          anything about whatever challenges you're facing. I’ll give you
          no-nonsense advice that you can put into action immediately,
          guaranteed.
        </p>
        <p>
          <a href="https://zcal.co/i/BZKlCtKu">Book Now</a>
        </p>

        {/* <h2>Pair-Coding Day (6+ hours) - $350</h2>
        <p>
          A full day of pairing on real projects. You get to see real
          development processes on large projects.
        </p> */}
        {/* <span style={{ backgroundColor: "yellow" }}>
            NOTE: Pair-Coding is SOLD OUT through the end of September. Please
            check back in October 2021.
          </span> */}

        {/* <p>
          <a href="https://zcal.co/i/WSv5j6E8">Reserve your spot</a> (limited
          spots)
        </p> */}

        {/* <h2>Workshops</h2> */}
        {/* <p>Reserve your spot for upcoming workshop.</p> */}

        <div className="workshop">
          <h2>Javascript Fundamentals Workshop - $150</h2>
          <p className="workshop__description">
            Geared for 12-17 and 18+ year olds that have great imaginations,
            like figuring out how things work, or just love technology. This
            workshop will introduce them to basic programming concepts—no prior
            experience is needed. 3 hours on a Saturday.
          </p>
          <a href="/workshop-javascript" className="worksop__link">
            Enroll Now &gt;&gt;
          </a>
        </div>

        {/* <div className="workshop">
            <h3 className="workshop__title">React Workshop - $150</h3>
            <p className="workshop__description">
              Geared for any age that has experience with JavaScript and is
              ready to build modern web apps or mobile apps.
            </p>
            <a href="/workshop-react" className="worksop__link">
              Enroll Now &gt;&gt;
            </a>
          </div> */}
      </section>

      {/* <h2>Upcoming Workshops 📆</h2>
      <iframe
        src="https://lu.ma/embed-events/usr-QEBWfr20iBvqt4h"
        width="100%"
        height="350"
        frameBorder="0"
        style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe> */}
    </Layout>
  );
};

export default WorkshopsPage;
