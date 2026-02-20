---
layout: post
title: "Is it slow to test?"
date: "2024-03-08T08Z"
tags: development, testing, sodium halogen
---

I've heard this argument before, "It's slow to test. I can just fix and ship it."

I agree until we see clients finding bugs or our team finding regressions. This is when a test could help prevent some bugs we should have caught. Also, adding one more test to a test suite is so easy.

So, compare these two scenarios:

1. get task
2. write failing tests
3. pass failing tests...forever

...or...

1. get task
2. add the feature
3. fix a bug
4. refix something that was working...done...ship
5. customer finds bug
6. customer emails team
7. team tries to replicate the bug
8. team assigns to dev
9. dev finds bug...
10. dev fixes bug
11. bug shows up again after a bad edit or merge

I want to feel this pain if I see it creeping into my work.

I have to remind myself, too, that it's easy to test where you already have tests.

Let's say a bug appears in an area you've already tested. You add a new test to cover it. Easier to edit than create. Boom.
