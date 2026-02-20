---
title: A Simple Git Workflow
date: "2019-06-26T11Z"
tags: GIT, Workflow
---

UPDATED: 4/22/2023 - updated the intro

At [Sodium Halogen](https://sodiumhalogen.com?ref=csio), we use Git with every development project. Our primary Git hosts are Github, BitBucket, and GitLab (in that order). Here I'll share a solo workflow you can adopt. If you're working with a team, give this post a read and then jump over to [Simple Team Git Workflow](/2020-02-03-simple-git-team-workflow)

## Our common git commands

We all have a `~/wip/` work-in-progress folder where all of our development projects and repos go. In terminal, goto the root of your project's GIT repo. You can follow these steps no matter the branch you're on. Let's assume your on `main` or `master`.

So we'll do something like this...

- `cd ~/wip/PROJECT_NAME` to access project
- `git pull` - to fetch all changes from the remote repo (Github, Bitbucket, GitLab)
- make some changes to the files
- `git status` to check and see what files we have changed
- if you want commit all the changes at once, go to the next step
- `git add .` to add all files in current directory
- `git commit -m "[FILE, FILE] YOUR MESSAGE HERE"` - add a note of the files you changed and what you did. Yet, [we use emmojis in our commits](https://github.com/sodiumhalogenteam/git-emoji-commit#readme).
- `git push` - to push changes up to remote repo

At first this can feel overwhelming. If you're new to Git I'd reccomend starting a repo that you take notes in or a small project you can use to get lots of practice. Make changes and commit early and often. This will give yourself some [reps to get comfortable](/glossary#reps).

## Our workflow

This is what the workflow looks like for us, with a real example.

- `cd ~/wip/vtx` to access the Vertex project.
- `git status` to check if there is anything I need to commit before making new changes
- `git pull`
- make some changes to the files (index.html, Modal.js)
- `git add .` or `git add index.html Modal.js`
- `git commit -m "[index, Modal] add modal root, add Modal"` - except replace with [gec](https://github.com/sodiumhalogenteam/git-emoji-commit#readme).
- `git push` - all done, now move on to the next change

## Git tips

- Where ever you clone your project onto your computer, that is where you want to makes changes from going forword. This is why we put all repos in our `~/wip/` folder.
- Use Git often, even by yourself. Just keep using it. This will help when you start working with other developers. I've even used repo for class notes for extra practice.
- FOCUS - make small changes and commit after that small change is done (like above, or when fixing a single bug). You want to avoid commits that have 10 or more files changed. This is a sign that you're doing to much at once.
- Use [git-emoji-commit](https://github.com/sodiumhalogenteam/git-emoji-commit#readme) to keep yourself focused on one category of change at a time.
- After you get the Git flow 😄, create [terminal aliases](https://github.com/sodiumhalogenteam/setup-mac/blob/master/.zshrc#L118) for your git commands to speed your workflow up and save your fingers.

## TL;DR Quick Workflow Reference

- `git pull`
- `git status`
- `git add .`
- `git commit -m "[FILE, FILE] YOUR MESSAGE HERE"`
- `git push`

## Next up

[Simple Team Git Workflow](/2020-02-03-simple-git-team-workflow)

## Other Resources

- [Git - the simple guide](https://rogerdudler.github.io/git-guide/)
