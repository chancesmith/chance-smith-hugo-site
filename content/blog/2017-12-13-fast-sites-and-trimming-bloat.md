---
title: Fast sites and trimming bloat
date: "2017-12-13T22Z"
tags:
  - web-development
---

With Google ranking sites based on loading speed (user experience), I ran some tests to see how the projects I worked on compared to the best practice standards.

Before I got to chopping Javascript or image compression, I needed to know how our team could test our projects regularly. Here are the questions I had...

## How fast should the website be?

Traffic starts to leave after 2 seconds of waiting for the site to load. Your site needs to be fast, especially for mobile users.

Set a goal and compare to you and your client's competitors. Aim for the low hanging fruit.

## Where to start?

First get the baseline metrics.

Once you have your current state metrics, set a goal and improve.

## What tool would be way to do on going tests?

Us at [SH](sodiumhalogen.com) are toying with [sitespeed.io](sitespeed.io).

## What about a quick setup?

You bet!

- install [Docker](https://docs.docker.com/engine/installation/)
- run it in terminal: \$`docker run --shm-size=1g --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:4.0.0 https://www.YOURSITE.com/`

## Wait, what is Docker?

[...see this post](https://blog.chancesmith.org/2017/12/12/eli5-what-is-docker/).

## Work in progress

We tried to pull these site speed metrics into a Gulp output on save or when `gulp sitespeed`, but we ran into an error on with (gulp-sitespeedio)[https://www.npmjs.com/package/gulp-sitespeedio]. We (put in a issue)[https://github.com/dreamzmaster/gulp-sitespeedio/issues/21] in to see if we can still work with this first.

We also ran into a snag testing local with Laravel-Valet local urls with Docker setup above. We'll revisit this, but for now we'll be testing our projects in there staging/production states.

## Looking for more

I'm very interested in seeing how this is used in others workflows. If you find one or have a solution please share!

If you liked this setup or want to chat, [get in touch with me](https://twitter.com/Chance_Smith).
