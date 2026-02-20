import React from "react";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";

class LevelUpPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Level-Up Mastermind 💪">
        <SEO
          title="Level-Up Mastermind"
          keywords={[`Level-Up Mastermind`, "chance smith membership"]}
        />

        <div>
          <p>
            Are you a innovator, entrepreneur or founder seeking community on a
            deeper level with others like you committed to excellence?
          </p>
          <h2>Are there limited spots?</h2>
          <p>
            Yes, To keep the group small and calls personal to each person's
            needs, there are limited spots.
          </p>
          <p>
            <em>4 spots left</em>
          </p>
          <h2>How do I join?</h2>
          <p>
            We're just getting started, so let's keep it simple. Just message me
            on <a href="https://www.linkedin.com/in/chancesmith/">LinkedIn</a>{" "}
            or <a href="https://twitter.com/Chance_Smith">Twitter</a> and then
            send me:
          </p>
          <blockquote>
            <q>
              Hey, I would like to apply for the Level-Up Mastermind. Let me
              know if there is room or what my next step is.
            </q>
          </blockquote>
        </div>
      </Layout>
    );
  }
}

export default LevelUpPage;
