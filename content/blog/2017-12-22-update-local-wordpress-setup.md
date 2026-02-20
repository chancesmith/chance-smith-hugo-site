---
title: Update - WordPress local setup
date: "2017-12-22T22Z"
tags:
  - web-development
---

Do you have customers that have WordPress sites?
Do you have a good way to test your changes before pushing them live?

Let's go through a way to setup WordPress on your computer. This way you can wring out any bugs before pushing to your production website.

This post is an update from [last year](https://blog.chancesmith.org/2016/06/13/local-wordpress-development-setup/). Our current setup is much faster for setting up new sites.

## Why WordPress?

Maybe you don't have any expreince with WordPress. It's been around awhile. For us at [Sodium Halogen](https://sodiumhalogen.com?ref=csio), WordPress is still a great solution for our customers needing an editable broucher website. Automatic, creater of WordPress, does a great job keeping updates coming to the framework. We don't have to worry about security as much, and our customer can still benefit from any new WordPress updates. It's the best setup we've found so far. We love it.

Other options we have considered are: Squarespace and Craft CMS.

## What tools to you use for local setup?

Let's run through the tools first:

- [HTML5Blank](https://github.com/html5blank/html5blank) theme starter shell
- [WP CLI](https://wp-cli.org/) for installing and setting up WordPress super fast
- Laravel's [Valet](https://laravel.com/docs/5.5/valet) (if you're on a mac, but not required)

## Could you just show us how you do it?

<iframe width="100%" height="315" src="https://www.youtube.com/embed/Es1O-3THM2E" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

## What steps do you use to setup WordPress?

We start by moving into our project directory in side our `wip/` (work in progress) folder. This WIP folder is where all our projects go.
(see WP setup trick below to combine these first few steps)

1. go into your project directory first: \$`cd wip/project_name/`
1. download WP with the WP CLI: \$`wp core download`
1. setup WordPress config: \$`wp core config --dbname=DB_NAME --dbuser=root --dbpass=`
1. create the database: \$`wp db create`
1. install WP: \$`wp core install --title=SITE_NAME --url=SITE_URL --admin_user=admin --admin_password=pass --admin_email=YOUR@EMAIL.com`
1. TIP: here's an example of the above all at once: \$`wp core download && wp core config --dbname=blog_wp --dbuser=root --dbpass= && wp db create && wp core install --title=Chance Smith Blog --url=chancesmith.test --admin_user=sh --admin_password=sh --admin_email=my@email.com`
1. for `chancesmith.test` to work we need [Valet](https://laravel.com/docs/5.5/valet#installation) to be setup. You could you use MAMP and point to your new WP directory. MAMP would give you a local url like `https://localhost:8080` or whatever setup you prefer. Valet is just a huge time saver moving from project to project on the fly.
1. pull down a copy of HTML5Blank into your `wp-content/themes/` if you are starting from scratch

Here is a snippet in [VSC](https://code.visualstudio.com/) editor you can take with you. :)
We just fire up VSC, type `wpsetup` and press TAB to then help setup the query from above to then copy and paste into our terminal.

```json
{
  "Setup Local Wordpress": {
    "prefix": "wpsetup",
    "body": [
      "wp core download && wp core config --dbname=${1:DB_NAME} --dbuser=root --dbpass= && wp db create && wp core install --title=${2:SITE_NAME} --url=${3:SITE_URL} --admin_user=admin --admin_password=pass --admin_email=${4:YOUR@EMAIL.com}"
    ],
    "description": "Install and setup WP"
  }
}
```

If you liked this or want to chat, [get in touch with me](https://twitter.com/Chance_Smith).
