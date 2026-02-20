---
title: Good Semantic Markup Examples
date: "2019-03-20T10Z"
tags: CITQ, S3, AWS
---

At [Sodium Halogen](https://sodiumhalogen.com?ref=csio), bringing in new developers and content writers can challenge how quickly we can get everyone up to speed. One topic I saw a need for was a list of good semantic markup examples.

## TL;DR

Semantic Markup is using the right HTML tags to give your content the right context. Each HTML tag has a meaning. So, use HTML tags with the right content.

## HTML Tags Key

| HTML tag                           |                         usage                          |
| ---------------------------------- | :----------------------------------------------------: |
| `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |                        headings                        |
| `p`                                |                       paragaphs                        |
| `ul` or `ol`                       |                unordered/ordered lists                 |
| `li`                               |                       list item                        |
| `strong`                           |               bold and giving importance               |
| `header`                           |              can contain h1 or naviation               |
| `nav`                              |             naviation links or pagination              |
| `main`                             | primary body of content that insludes all article tags |
| `article`                          |               blog/article post content                |
| `section`                          |                sections of article tag                 |
| `aside`                            |                sidebar of blog/article                 |
| `address`                          |                  address of location                   |
| `footer`                           |                  address of location                   |

## Example #1

This content has a title and a description.

```
Mary Poppins

A story about a magical nanny that brings music and adventure to a family of neglected children that helps bring the family together.
```

With semantic markup:

```html
<h1>Mary Poppins</h1>
<p>
  A story about a magical nanny that brings music and adventure to a family of
  neglected children that helps bring the family together.
</p>
```

## Next Step - Check out Schema

Scheme for different content types (products, movies, restaurants) is enormous for SEO and adding more details to your markup. Dig in here: https://schema.org/docs/gs.html

## footnotes

related elements: https://html.com/semantic-markup/#Related_Elements
SEO focused: https://www.inboundnow.com/html5-semantic-elements-mean-seo/
