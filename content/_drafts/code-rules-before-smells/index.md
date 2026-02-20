---
layout: post
title: "Code Rules Before Smells"
date: "2024-03-08T08Z"
tags: development, refactoring
---

Latetly, I've been doing a good bit of refactoring. I'll create a feature, but all of us on the team will see the code and think, "We know more now and this could be better."

This is a good thing. I appreciate the feedback and opportunity to look at the problem through a different lens.

After a few of these, I ran across the book Five Lines of Code by Christian Clausen. It's a simple guide to refactoring safely with a set of rules to get anyone started.

I wanted to apply the rules and thought listing them here would assist as a quick reference and reminder.

The rules help easily identify violations and map them to a smell and solution. The magic of it is, you rarely have to understand the specifics of the code and you can refactor it safely.

1. **Five lines**. A method should be no more than five lines, excluding `{` and `}`. **Smell**: Long methods are challenging for how much you have to keep in your head. **Solutions**: Use the Extract Method to break it down into smaller methods.

2. **Either call or pass**. A function should either call methods on an object or pass the object as a parameter, but not both. **Smell**: "The content of a function should be on the same level of abstraction." - Uncle Bob. It's powerful, but hard to grasp and can be trivial. **Solutions**: Use the Extract Method to break up the abstraction.

3. **If only at the start**. If there is an `if`, it should be at the start of the method. **Smell**: Helps keep the method simple and only doing one thing. A check is a responsibility and it should be handled by one function. **Solutions**: Move the condition up, or use the Extract Method to move the decision to a separate method.

4. **Never use If with Else**. Never use `if` with `else`, unless we are checking against a data type we do not control (example???). **Smell**: "Early binding prevents change by addition because we can only change the if statement by modifying it. The late-binding property allows us to use change by addition, which is desirable..." **Solutions**:

<!-- 5. **Never use If with Else**. -->
