import React from "react";

// components
import Layout from "../components/layout";
import Seo from "../components/seo";

const PairCodingPage = (props) => {
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
        <p>
          <span style={{ backgroundColor: "yellow" }}>
            NOTE: Pair-Coding is SOLD OUT through the end of September. Please
            check back in October 2021.
          </span>
        </p>
        <h1>Pair-Coding Day</h1>
        <p>
          <strong>
            A full day getting real development experience, with a senior
            developer, on real projects.
          </strong>
        </p>

        <p>
          <em>Learn New Tools</em> • <em>Learn Best Practices</em> •{" "}
          <em>Gain Experience</em>
        </p>

        <p className="u-text-center">
          <a href="https://calendly.com/chance/pair-coding-day" className="btn">
            Reserve your spot
          </a>
        </p>

        <figure>
          <blockquote>
            "I learned more in 15 minutes than a whole month on my own. This was
            the best technical pairing I've ever had. I learned so much! :D"
            <br />–{" "}
            <a href="https://www.linkedin.com/in/gwynnemeeks/">Gwynne</a>
          </blockquote>
        </figure>

        <p>
          On-site or remote pair-coding with Chance are a valuable and effective
          way to improve your skills as a software developer and break into
          tech. Email{" "}
          <a href="mailto:chance@sodiumhalogen.com">chance@sodiumhalogen.com</a>{" "}
          if you have questions at all.
        </p>

        <h2>Do you need experience or leveling up?</h2>
        <p>
          A full day of pairing on real projects. You get to see real
          development processes on large projects.
        </p>

        <h2>Imagine getting to the next level...</h2>
        <ul>
          <li>Spend less time learning the wrong things.</li>
          <li>Getting questions answered about what is important.</li>
        </ul>

        <h2>Pricing</h2>
        <p>$350 for 6+ hours</p>

        <p className="u-text-center">
          <a href="https://calendly.com/chance/pair-coding-day" className="btn">
            Reserve your spot
          </a>
        </p>

        <figure>
          <blockquote>
            "I've spent $1,000+ on self-pased courses. Pairing for a day on real
            projects is way more valuble to quickly gain experience."
            <br />–{" "}
            <a href="https://www.linkedin.com/in/matthewggonzales/">Matthew</a>
          </blockquote>
        </figure>

        <figure>
          <blockquote>
            "It was great getting a little more understanding and seeing new
            tools to use and learn. I wrote down so much. It was a great day
            getting the experience. It’s sometimes hard to imagine a day in the
            life Thank you again for making it a fun and easy going experience."
            <br />–{" "}
            <a href="https://www.linkedin.com/in/sidney-crandall/">Sidney</a>
          </blockquote>
        </figure>

        <figure>
          <blockquote>
            "It was really great to work together and see some new things. I had
            a lot of fun." –{" "}
            <a href="https://www.linkedin.com/in/sara-schoonover-a14745205/">
              Sara
            </a>
          </blockquote>
        </figure>

        <figure>
          <blockquote>
            "I had fun pairing. It was helpful getting to see how testing is
            done."
            <br />– <a href="https://www.linkedin.com/in/bhexsel/">Brandon</a>
          </blockquote>
        </figure>

        {/* <figure>
          <blockquote>
            ""
            <br />– <a href="">Steven</a>
          </blockquote>
        </figure> */}

        {/* <figure>
          <blockquote>
            ""
            <br />– <a href="">Semal</a>
          </blockquote>
        </figure> */}

        {/* <figure>
          <blockquote>
            ""
            <br />– <a href="">Autumn</a>
          </blockquote>
        </figure> */}

        {/* <figure>
          <blockquote>
            ""
            <br />– <a href="">Amanda McNeil</a>
          </blockquote>
        </figure> */}

        {/* <figure>
          <blockquote>"Coming Soon" – Meg</blockquote>
        </figure> */}

        <h2>Take Action</h2>
        <p>
          It was Thomas Jefferson who said, “If you want something you’ve never
          had, you must be willing to do something you’ve never done.”
        </p>
        <p>Don’t waste another year moving one inch in every direction.</p>

        <p className="u-text-center">
          <a href="https://calendly.com/chance/pair-coding-day" className="btn">
            Reserve your spot
          </a>
        </p>
      </section>
    </Layout>
  );
};

export default PairCodingPage;
