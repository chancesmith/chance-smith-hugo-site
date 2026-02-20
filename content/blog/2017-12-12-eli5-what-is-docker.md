---
title: ELI5 - What is Docker?
date: "2017-12-12T22Z"
tags:
  - web-development
---

## Wait, what is Docker?

Let's talk about the problem first.

There have been many inconsistencies with development projects when sharing with team members and even going into production. The project might work for a developer, but then it doesn't work for a System Admin. Marketers and team leads might see nothing at all.

## Virtual Machines might work

A Virtual Machine (VM) enters the scene...an application that runs another Operating System (OS) in a window on your current OS. The process is like booting up your Mac (jsut as normal) and then opening a VM software app (ex: VirtualBox) that then gives you the option to select to boot a VM OS of your choice Linux or Windows. Now you can have two operating systems at once.

## Eh, Virtual Machines helped some

Virtual Machines helped to keep things consistent but was a heavy lift for the computer it ran on. The VM would need a Linux OS, for example, to then run the project.

## Vagrant was one step closer

With the help of Vagrant you could (ideally) setup your project in a VM in just a few steps. It did make this process simple instead of having to share a whole VM iso image with your team. Yet, this was still a resource hog solution compared to Docker.

You know what is next... :)

## Docker is the current winner

Docker is a lighter solution because it puts the Linux OS outside of the project, and just contains the project and it's dependencies. This is why they call it a container. You can now have multiple projects/containers running at once. This would have been hard, if not impossible on some PCs, to do with multiple VMs running at once.

## Give Docker a shot (tutorial)

Dip your toes into the watcher next to the Docker barge.
https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b

If you liked this explanation or want to chat, [get in touch with me](https://twitter.com/Chance_Smith).
