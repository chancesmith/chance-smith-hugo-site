---
layout: post
title: A Simple Git Team Workflow
date: "2020-02-03T22Z"
tags:
  - git
---

At [Sodium Halogen](https://sodiumhalogen.com?ref=csio), there are several projects that have 2-3 team members doing development. We use Git for developers to collaborate and share code. Since we've been using Git as a team for 5+ years, I thought it would be good to share our workflow. Here is how we roll...

Since we use GitHub for our projects, you'll see that as the primary tool of choice.

## TL;DR

- rarely commit to the `master` branch (unless only one dev)
- create a branch for each new code base addition: `git checkout -b 123-feature-name` (123 = GitHub issue number)
- make commits with context
- push all changes to that new branch
- once ready for review, make a PR (Pull Request) in GitHub
- mention the issue, testing instructions, screenshots in the PR
- another team member reviews the PR and merges it in

## Give your commits context

We've adapted how we do commits over the years. We aim to give context through each commit. Let me show you.

Example: `[cart/item] add price and discounts #24`

Breakdown: `[context_here] SUBJECT: details of actions taken in present tense #ISSUE_NUM`

- `[cart/item]` mentions where in the app and possibly what component specificly was changed
- `SUBJECT:...`Being consistant with the tense gives less variety in our how the team writes the commit sbject.
- `#ISSUE_NUM` the GitHub issue where progress was made

When you metion the issue number in a commit, your commit gets associated with that issue. It's pretty cool to see the paper trail of progress on an issue.

If you're really cool you add emojis to your commits. We all use git-emoji-commit, a tool we created. Our goal was to commit often and keep our commits concise, and not just commit everything under the sun.

## Making helpful PRs

- issue numbers
- testing instructions
- screenshot/gif

Here is a full example:

```
fix #27

## how to test

- add item to cart
- see prices are correct for each item
- add discount code `20OFFNOVEMBER`
- see 20% discount applied to whole order

## screenshot

(drag and drop screenshot of expected cart results)
```

## Git workflow

- create and look at issue in GitHub
- use issue number as the prefix for each feature branch
- make sure you are branching from master: `git checkout master`
- create new feature branch with issue# prefix: `git checkout -b 27-timeline-view`
- then make changes to that branch until the feature is complete
- each commit starts with context in brackets: `[context_here] subject #ISSUE_NUM` Example: `git commit -m "[timeline] add timeline chart #27"`
- create the PR in GitHub
- mention the issues that need to be closed: `fix #72`
- mention instrcuctions on how to test the addition
- add screenshots of visual changes
- set a team member to review and link them to the PR
- team member reviews and then merges it in if all is good
