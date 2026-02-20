---
title: Diving Into Utility-First CSS
date: "2019-08-14T11Z"
tags: CSS, BEM, Utility-First-CSS
---

At [Sodium Halogen](https://sodiumhalogen.com?ref=csio), we've seen many projects with different types of CSS methodologies and frameworks (BEM, Bootstrap, Foundation, Bulma).

## CSS + React has been wonderful with Styled Components

For over a year we've been playing with ReactJS + Styled-Components. We've loved not having to worry about CSS naming and overwriting cascading effects. It's helped a ton.

## What about projects that need classes to style elements?

We've recently had a project that is vanilla CSS and JS. No frameworks at all! 🙀

We didn't see this coming. It's also been a bit since we have had to create/write classes. Components in React there was less context switching having all HTML, CSS, and JS all in one file. Context switching is mentally expensive and time-consuming.

## Looking at Utility-First CSS

[Dan Mal](https://danmall.me/) (genius) was the first to introduce us to utility classes. You might have seen the [spacing utility classes in Bootstrap](https://getbootstrap.com/docs/4.3/utilities/spacing/) before.

Utility classes are tiny bits of CSS, tied to a class name, that do one thing. Here are a few examples...

```css
.flex-1 {
  flex: 1;
}
.ml-5 {
  margin-left: 5px;
}
.ml-10 {
  margin-left: 10px;
}
.ml-20 {
  margin-left: 20px;
}
.pl-5 {
  padding-left: 5px;
}
.pl-10 {
  padding-left: 10px;
}
.pl-20 {
  padding-left: 20px;
}
```

## Pros for Utility-First CSS

- writing way less CSS
- more time in HTML (local space), less time in CSS files (global space)
- way less class name creation/modifying
- less BEM modifier class overhead

## Cons for Utility-First CSS

- not as easy to duplicate styles (templates/components really help with this)
- messy HTML, similar to inline-styles (we might just have to change the editor theme or look past it)
- not semantic-css names (CSS class names don't have to be semantic, but your HTML does)

## Tailwind Utility-First CSS Framework

At UndergroundJS conf in Nashville, TN, a few of us meet with another dev that introduced Tailwind.

We haven't used the Tailwind in our no-framework project, but we have been modeling our own utilities classes the same way. So far we're liking how much time we're saving on layout and spacing.

```css
/* layout */
.flex-24 {
  flex: 24 1 0%;
  margin-right: 30px;
}
.flex-7 {
  flex: 7 1 0%;
  min-width: 400;
}
.border-transparent,
.hover\:border-transparent:hover {
  border-color: transparent;
}

/* type */
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}

/* spacing */
.px-20 {
  padding-left: 20px;
  padding-right: 20px;
}
.pl-20 {
  padding-left: 20px;
}
.pl-30 {
  padding-left: 30px;
}

/* size */
.h-full {
  height: 100%;
}
.w-300 {
  width: 300px;
}
```

We're going to give it a run by adding just what we need as we go. We'll be meshing BEM and Utility-classes.
