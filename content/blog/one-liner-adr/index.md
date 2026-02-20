---
layout: post
title: "One-Liner ADR"
date: 2023-08-25T22Z
tags: ["process", "leadership"]
---

This week has been a week of thinking through repeatable processes. I've been on-call and helped consult on a project. That's made me think about making things easier for the next person.

## So, what is an ADR?

ADR - Architecture Decision Record

A record of a decision made. It's a way to document a decision's context, decision, and consequences. It's a way to document the why and how of a decision.

Kent C. Dodds uses them in projects. So others can follow, and each decision gets recorded.
https://github.com/epicweb-dev/epic-stack/tree/main/docs/decisions

## Your first ADR

Don't overthink it. Just create a file in your project. Slack has a Canvas feature where you can drop notes or use a Google Doc. The point is to document the decision.

Just one file with a one-liner. That's it. You can add more later.

## The One-Liner ADR

A `one-liner ADR` could look like:

> [date] – We found out [scenario/context]. So, we've decided [decision]. We [manifesto value or rule].

Example:

> 08/25/2023 – We don't want the security risks and ownership headaches. So, we've decided to set up projects under their accounts. We don't host our clients' production servers.

## The Point Is

We all forget. ADRs is a process you and your team can follow.
