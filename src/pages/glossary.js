import React from "react";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import GlossaryTerm from "../components/GlossaryTerm";

class GlossaryPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"Glossary | Chance Smith"}>
        <SEO
          title="Glossary | Chance Smith"
          keywords={[`glossary chance`, "glossary chance smith"]}
        />
        <div>
          <div>
            <h1>Glossary</h1>

            <GlossaryTerm
              term="3Ws"
              definition="Prevent your customers from worrying, waiting, wondering. Credt: *Burn Your Portfolio* by Michael Janda."
            />

            <GlossaryTerm
              term="5on2"
              definition="Talk for 5 minutes about any work you have today that will take 2 hours or more. This helps prevent roadblocks and wasted time doing the wrong work."
            />

            <GlossaryTerm
              term="Activity Stacking"
              definition="Pairing activities together to have a win-win-win, a triple benefit, like HSAs 😄. For example, spending time with kids playing a game that teaches money. (kids, fun, fiscal education)"
            />

            <GlossaryTerm
              term="Bus Co-efficiency"
              abv="busco"
              definition="The number of people on your team that could get hit by a bus and the project (or company) would survive. Disseminating knowledge across your team will increase your bus co-efficiency."
            />

            <GlossaryTerm
              term="Clarity Check"
              definition="A continuous planning practice of revisiting what's blurry, to help set expectations. We ask: What can we plan next, at any level of granularity? It's permission to move forward with what we know and be honest about what we don't. Keeps planning ongoing so teams are ready when big planning moments arrive. See also: 3Ws, Horizon"
            />

            <GlossaryTerm
              term="Essential Releases"
              definition="Releasing early with simply-enough so you can get feedback sooner. See also: Feature-Boxing"
            />

            <GlossaryTerm
              term="Feature-Boxing"
              definition="Reduce down to the requirements, only spending a portion of your budget (50% for must-haves) to ensure there are leftover resources for the corrections and nice-to-have features."
            />

            <GlossaryTerm
              term="Fishbowl Experience"
              definition="No work or workflow is hidden. Make it so anyone can see what you're doing, to course correct and learn from. See also: Work Out Loud"
            />

            <GlossaryTerm
              term="Flipped Learning"
              definition="Turning traditional passive learning into a flipped approach. Introducing core concepts (micro videos, text reading assignment) before class so that the class time is transformed into an active place of learning: simulations, discussions, practice. A place where the teacher doesn’t talk at you, but works with you. Credit: Jon Bergmann"
            />

            <GlossaryTerm
              term="Foggy-Brain Tax"
              definition="The cost of forgetting why you did something or how it works. Either write down the essential details or incentivize dealing with it now. Writing details down can help you remember them, and others can learn from them."
            />

            <GlossaryTerm
              term="Hack-In"
              definition="An in-person or remote hackathon for a single project with a small team of 3-5. The biggest benefits are reducing the feedback loop and real-time collaboration."
            />

            <GlossaryTerm
              term="Horizon"
              definition="How far ahead the team can see. Current work is clear, but everything approaching the horizon gets blurrier, and goals beyond it aren't visible yet. The team sees feature work ahead but can't yet see the launch date beyond the horizon. See also: Clarity Check, 3Ws"
            />

            <GlossaryTerm
              term="Invariant"
              definition="Something that doesn't change and isn't documented in your process or software. See also: Invariant Map"
            />

            <GlossaryTerm
              term="Invariant Map"
              definition={`The professional's undocumented mental landscape of the known business truths, universal truths, and the watch-your-step assumptions that may affect other areas. TigerBeetle calls invariants the negative space. (Solutions: assertions, automated tests, documentation) See also: Invariant`}
            />

            <GlossaryTerm
              term="Low Fidelity Work"
              abv="lofiwork"
              definition="Any non-high-fidelity work, such as a sketch, wireframe, prototype, or pixel-free, database-less experience. This is a healthy constraint on the kind of feedback and amount of work required. Do this to quickly get feedback and iterate. See also: Thin Slices"
            />

            <GlossaryTerm
              term="Reps"
              definition="Like reps in your exercises, the more you do something, the more comfortable you'll be. You're Grandfather's drill press or Grandmother's blender is overwhelming at first but less overwhelming after you've used one a hundred times. Feel uncomfortable? Most likely, you haven't been here or done this thing before. Go get some reps in."
            />

            <GlossaryTerm
              term="Sandbox"
              definition="Take your current problem and put it in a sandbox (whiteboard, spreadsheet, [codesandbox.io](https://codesandbox.io/), [codepen](https://codepen.io/pen), etc). This is a safe place to play and experiment. You can try new things in isolation and not worry about breaking anything."
            />

            <GlossaryTerm
              term="Surface Over Mass"
              definition="Prioritizing what impacts the customer and high-level metrics. Peter Drucker said to run lean. Organizations often focus on internal complexities over external impact. Think about a biological organism. The inner mass grows faster than the outer surface which will divert energy to manage the internal mass."
            />

            <GlossaryTerm
              term="Thin Slices"
              definition="Quick release. Working on and sharing the smallest possible piece of work that can be done. This helps prevent roadblocks and wasted time doing the wrong work. See also: 5on2"
            />

            <GlossaryTerm
              term="Work About Work"
              definition="The work that isn't the work. The planning to plan, the meeting to meet, the task to create a task. This is the work that doesn't move the project forward."
            />

            <GlossaryTerm
              term="Work Out Loud"
              definition="Sharing your work often for accountability and feedback. Don't work on an island. Disseminate knowledge. Give a pulse of what you are doing and what is going on. The goal is to prevent clients and the team from the 3Ws. See also: 3Ws"
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default GlossaryPage;
