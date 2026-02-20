---
title: CITQ - Prune Old Non-Renamed S3 Bucket Files
date: "2019-03-20T10Z"
tags: CITQ, S3, AWS
---

CITQ = Challenge in the Queue

status: `testing`

At [Sodium Halogen](https://sodiumhalogen.com?ref=csio), we put a lot of screenshots and quick uploads into an S3 bucket with a tool called Dropzone. It's a fast way for us to share files with eachother and our customers. We used to use FileShuttle to FTP files up to a server, until it stopped working for us mid 2018.

This Challenge in the Queue is to delete old files from the S3 bucket that we don't rename from it's default name. Like the Mac's screenshot files: `Screenshot 2019-03-19 14.31.55.png`. The rule should be, if we don't rename the screenshot then ditch it.

I've asked the internet to help with this one:
https://stackoverflow.com/questions/55262365/how-can-i-delete-old-files-by-name-in-s3-bucket

I'm currently testing how prefixes work in the S3-Bucket/Management/Lifecycles. I have two tests:

- prefix `cs/non-keep/` to delete all in this folder
- prefix `cs/screenshots/Screenshot` to delete all old `Screenshot 2019-03-19 14.31.55.png` files

I'll keep looking at Stackoverflow and peek into the S3 buckets to see how the lifecycles are doing.

## Updated 3/26/19

Currently, I've found the `Screenshot` and `non-keep` prefixes worked great. I'm going to stick with this until we need to do a more refined pruning of files.
