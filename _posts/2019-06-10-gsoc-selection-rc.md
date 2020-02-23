---
layout: post
title: My GSoC Project
description: 
date: 2019-06-10 00:06:45 -0700
excerpt: 
image: /assets/img/xcode-swift-catsyears.jpg
style: |
  p img { box-shadow: 0 8px 50px -6px black!important; }
---


07/05/2019 at 02:44 AM, A mail droped at my gmail inbox:  

```
Hi Shubham Singh,

Your proposal Rocket.chat Articles has been accepted!

Welcome to GSoC 2019!
```
This is not a success story. It is a story where I learnt from my mistakes and kept trying to achieve one of my college goals. 
https://summerofcode.withgoogle.com/projects/#5479664997367808

#### Backstory
I came to know about GSoC in my first year, when I was doing a workshop, by [@yashsriv](https://yashsriv.org/about). He was one of the _backchod_(a lingo for an extraordinary person) programmer in our college. He guided us on how to approach the Open Source Organisations. He told us to go through the org list and mail the org that you are interested in contributing their org...so guide me.
And, next day we sent mail to every org we can find (><). But what he forgot to tell is there exist a Contribution guide in orgs for begginers and you should take a look at it first. So next day we got few responses saying `google how to :P`.
But I didn't apply for GSoC in my first year, because of several reasons: 

\* I didn't know much about Open Source, and how it works(#).  
\* I was a little afraid of applying and not getting selected(#).  
\* I started using Arch Linux(before that I used to have Windows 10), and was getting familiar with its working(#).  
\* I ~~was~~ am a prcrstntr.  

(#) These are the reasons which I consider stupid now, and you should not stop yourself because of those reasons. I am still struggling with the last one (><).

I made my first [PR](https://github.com/RocketChat/Rocket.Chat.Android/pull/1437)(merged) in Rocket.Chat Android project, which was a `good-first-issue`. One should start with this kind of issues and then climb to big ones. And then I started contributing and interacting with the Org members. It really help me during my GSoC application period. But this doesn't mean that you cannot be selected if you have not contributed in the org before. There were many students selected in our org, who just came two days before the application period ends.

#### The Project 

For every deployment of Rocket.chat, there is a team or community that generates a lot of content. Rocket.chat itself is the repository for much of that content but the rest typically resides in other applications such as github or jira or google docs, many of which are third party services and so the content is not owned by the community that hosts the Rocket.chat server. In one particular scenario, a user may want to write an article and “publish” it to groups or contacts within Rocket.chat. Today that would have to be done typically using a third party service. What if instead article creation, searching, and storage were integrated with Rocket.chat such that each user could maintain his or her own library of articles and contacts of that user could subscribe to see new articles posted by that user and to discuss those articles using something like Rocket.chat Threads.

#### My Proposal and Changes
My Proposal and implementation was completely different. I proposed to use a CMS called [Strapi](https://strapi.io/). But at that time Strapi was quite immature for production use and we ended up with two CMS to choose between, Ghost and NetlifyCMS. Ghost, is a publishing site, with almost every feature implemented for a Blog Site. NetlifyCMS on the other hand is a great CMS, which can be integrated with any static site generator. Netlify is git based, but two of our mentors who works at Credit Suisse has this CMS backed with mongoDB.

We ended up using Ghost for the project. Final submission can be found [here](https://gist.github.com/shubhsherl/21e32429bbdec6d62392df90f5ccde96).


#### Acknowledgements

I am thankful to my mentors Peter, Karan for their guidance throughout the project. The interactions with them and working on this project was a great learning experience and I gained a lot of insight into development part of the computer world. Special thanks to Ramkumar and Hou Jian who took out some of their time and helped me out.

Also, thanks to Aditya, Amish, and Kailash for helping out whenever I was stuck or had a doubt. It was great working experience with you guys.

Peace Out!