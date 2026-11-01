---
layout: post
title: "Your Team Doesn't Need Values, It Needs Defaults"
date: 2026-08-05T12Z
tags: leadership
---

Every "how we work" workshop I've sat in produced the same artifact. A list of words. Respect. Ownership. Transparency. Bias for action.

Nobody argues with that list. That's the problem. A statement nobody can disagree with is a statement nobody can violate, and a statement nobody can violate does no work.

Here's the test. Next time two engineers on your team disagree about whether a change needs tests before it merges, watch whether anyone opens the values doc. They won't. Not because they're cynical, but because the doc has nothing to say. "We value quality" and "we have a bias for action" both apply, and they point opposite directions.

## Defaults are values with the ambiguity removed

A default is what the team does when nobody tells them what to do.

Not "we value fast code review." Instead: **reviews get a first response within one working day, and if you can't, you say so in the thread.**

Look at what that sentence has that the value didn't:

1. **It's specific enough to break.** I can go three days without responding and be objectively out of bounds. That's a feature.
2. **It names the exception.** Every real rule has one. If you don't write the exception, people break the rule quietly and then stop trusting the whole document.
3. **It says who decides at the edge.** Not "the team." A person or a role. "The team decides" is how nothing gets decided.

Values are aspirational. Defaults are operational. You only need the second kind written down, because the first kind you can't act on anyway.

## Why teams write values instead

Because values are cheap to agree with, and defaults require somebody to lose an argument.

If I say "we value quality," you nod. If I say "no merge without tests," half the room has an objection and one person has a story about the hotfix at 11pm that would have been blocked by that rule. That argument is uncomfortable, and it's the entire point. The friction you feel in the room is friction the team has been silently absorbing in the work for months.

Most facilitators read that discomfort as a signal to back off and find language everyone likes. That's how you end up with the word list. The discomfort is the deliverable.

## Run the exercise to find disagreement, not agreement

I changed how I facilitate this after realizing my sessions were optimizing for the wrong outcome. I was measuring success by whether we left with a doc everyone approved. Everyone approves vague docs.

Now I open with something close to this:

> "We're not writing values today. We're writing defaults, what we do when nobody tells us. Every one of these has a real cost on both sides. If we finish and everyone agreed on everything, we wasted the time and I picked bad questions."

That last sentence matters. It puts the failure on me rather than on the person about to disagree, which is what makes disagreeing feel survivable.

The mechanics:

**Ask for evidence before the session.** Everyone writes three specific moments in the last 90 days where they weren't sure what the team expected, or where two people clearly expected different things. Real moments with tickets and dates. Not categories. This is what you'll reach for when someone claims "we all already know how we do this." You'll have four written examples where they didn't.

**Collect positions privately first.** Give the team a dozen prompts framed as spectrums with a real trade on each end. "A ticket is done when the code is merged" on one side, "when a real user has used it" on the other. Everyone marks 1 to 5 and sends it to you only.

Privately, because the first person to answer publicly sets the anchor, and that person is usually the loudest or the most senior. You will learn nothing after that point.

**Then show the spread.** Anonymous dots, sorted widest spread first.

This reveal does most of the work in the session, and it does it quietly. People assume their own view is the team's view. Seeing six dots scattered across a spectrum corrects that without anyone having to be wrong out loud.

**Spend all the time on the splits.** Where the dots cluster, you've found something the team already agrees on. Write it down in ten seconds, move on, don't discuss it. You didn't need a meeting for that one. Where the dots scatter, and especially where they pile up at both ends, you've found a live disagreement the team has been paying for in friction.

Four to six real splits is a normal result. That's your agenda.

**Work the ends, not the middle.** "Someone at a 5 here, tell me what a 1 costs us." Then reverse it. If you start with the middle voices, the trade gets diluted before anyone sees its shape.

**Timebox hard, and let things stay unresolved.** If a prompt eats fifteen minutes, write down the disagreement itself, with an owner and a date, and move on. An honestly recorded open question is worth more than a compromise sentence engineered to end the conversation. The compromise sentence is how you get "we value quality" back.

## The read-back that kills bad defaults

Before you close, read every default out loud and ask one question after each:

> "Can you imagine breaking this next week?"

If the answer is no, it's not a default. It's a value wearing a default's clothes. Sharpen it or cut it.

Aim for eight to twelve. Thirty defaults means the team documented instead of deciding, and a doc nobody can recall is a doc nobody follows.

## The part everyone skips

Cite the doc in public in the first week. On purpose. Point at it in a PR comment or in standup once, even if the moment is small.

A default nobody has ever cited is already dead. The doc only becomes real the first time somebody uses it to end an argument, and if that never happens in the first week, it never happens.

Then put a 90 day revisit on the calendar before you leave the room, and when you get there ask exactly two questions. Which defaults did we break, and which did we never need.

Both answers are useful. The first tells you where the doc is wrong. The second tells you where you were solving a problem the team didn't have.
