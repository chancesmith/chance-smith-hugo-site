import React from "react";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import GlossaryTerm from "../components/GlossaryTerm";

class UsesPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"Chance uses"}>
        <SEO title="Chance uses" keywords={[`Chance uses`]} />
        <div>
          <div>
            <h1>Uses</h1>

            <h2>Ethos / Mantras</h2>
            <p>Phrases you'll hear me say often.</p>
            <ul>
              <li>
                Listen to the whispers before you have endure more screams.
              </li>
              <li>
                Make it easy to do the right thing and hard to do the wrong
                thing.
              </li>
              <li>
                Would you rather clean a room with 100 items or zero? Get closer
                to zero.
              </li>
              <li>Your ability to duplicate yourself is a vital skill.</li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default UsesPage;
