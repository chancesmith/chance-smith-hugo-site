---
layout: post
title: "Project Management: two weeks to launch sprint"
date: "2022-11-20T08Z"
tags: project management, development, sodium halogen, agile
---

Imagine you only have two weeks to launch. What will do and what will you cut from your release?

This is the mindset of a two week sprint.

> "We will release our app in two weeks. We may not be done, but the features we can complete will be ready to release." - Agile Team

Let's think about the next two weeks and what can be released. Remember, just becuase you release doesn't mean you can't make changes later. Just get something out there and get some feedback.

Here are some tips I can give...

1. First, **list tiny-tiny steps** that your team can achieve (20-50 tasks)

2. Prioritize the tasks from most-to-least important. ([feature-boxing](/feature-boxing/))

3. Only assign one task per person at a time

4. Create a branch per task with your initials and a task related name

👎 Bad Example: `add-news` or `fix-menu`

👍 Good Example: `cs-add-news-button-on-homepage` or `cs-fix-menu-missing-directions`

Now you know who's branch is who's and each task has a tiny deadline.

5. Create a pull-request with each branch for someone else to review
   - once the pull-request is reviewed, the code owner/creator is the one to merge into `main`

🎗If you're team is new to making branches, to start, it might be good to only branch off of `main`.

So, keep the branches/tasks small (really small) and moving quickly into `main`. Average a pull-request a day. This will help reduce merge errors. You'll have far less merge errors if you keep tasks small and merged into `main` often.

6. Keep an eye on the two week dealine and prioritize the tasks and bugs as needed.
   You can't do everything. So, you have to decide what is NOW or LATER and accept the trade offs.

7. After two weeks, launch. 🙌

There are some other git workflow post to read too:

- [A Simple Git Workflow](/2019-06-26-simple-git-workflow/)
- [A Simple Git Team Workflow](/2020-02-03-simple-git-team-workflow/)

Obviously, the more you use the tools the more you get more comfortable. Keep going!

Your innovation advocate, Chance 👋
