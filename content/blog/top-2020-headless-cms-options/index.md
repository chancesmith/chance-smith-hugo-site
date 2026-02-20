---
layout: post
title: 2020 Headless CMS options
date: "2020-05-01T08Z"
tags:
  - research
---

At [Sodium Halogen](https://sodiumhalogen.com?ref=csio), we have explored Wordpress being a Headless CMS for Gatsby.

Wait...wait...

## What is a Headless CMS?

A headless CMS is an approach to reusing the same content across multiple platform.

A CMS helps users create content and publish content into HTML. A headless CMS only delivers raw data, like JSON. This raw data can now be used across many platforms: website, software, mobile apps, internal staff tools.

## What are the benefits of a Headless CMS?

From a development perspective, you are abstracting the CMS from the views. Now, your software or website isn't directly attached to the CMS you use, just as long as your data structure is the same. You can now change to any CMS you want in the future. [Uncle Bob would be proud.](https://blog.cleancoder.com/uncle-bob/2016/01/04/ALittleArchitecture.html) (Dependency Inversion Principle)

Gatsby makes that really easy.

## What is Gatsby?

Static-Site Generator. You take your data/content and have a static-site generator build all of your pages into tidy HTML files. Now you have every page of your site ready to deliver in the fastest way possible.

With Wordpress for example, every page is built by the server on each request for each user. The server keeps doing the same work with the same data every time a user visits the website and navigates to a new page. This is slower and a waste of resources. Cacheing your content/pages serverside is a great start in the right direction. Anyway...

Static-site generators build all of your pages into ready-to-serve HTML files.

ONe more not about Wordpress and going headless. Here is a way to extract your data from Wordpress for Gatsby. We've used WPGraphQL in one project for a large CMA firm. WPGraphQL was a big help.
https://www.wpgraphql.com/

## Our findings

A quick option is to use Google Sheets (spreadsheets) and Sheety (😅💩)
https://sheety.co/

Sheety won't be our goto option, so we kept digging. I hope this quick list helps you others out there.

Full CMS options:

- https://strapi.io/gatsby-cms
- https://www.sanity.io/
- https://directus.io/
- https://getcockpit.com/
- https://prismic.io/
- https://bejamas.io/blog/headless-cms/
- https://craftcms.com/
- https://kontent.ai/
- https://www.storyblok.com/

<!-- really cool https://prismic.io/progress -->

Well, that research was much easyer with this [handy tweet from Wes Bos](https://twitter.com/wesbos/status/1254772936935739393). Above is a list of options and some listed in this tweet.

## Our choice

We decided to go with Strapi.
https://strapi.io

It's flexiable enough, open source, and free.
