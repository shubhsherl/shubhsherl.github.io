---
layout: post
title: Linux From the bunch of Code
description: Learning new things to set yourself apart from your competitors and reaching out new opportunities or...
date: 2018-09-26 00:06:45 -0700
excerpt: Learning new things to set yourself apart from your competitors and reaching out new opportunities or...
image: /assets/img/xcode-swift-catsyears.jpg
style: |
  p img { box-shadow: 0 8px 50px -6px black!important; }
---
Learning new things to set yourself apart from your competitors and reaching out new opportunities or freelance jobs it's the base to survive on the local and global market job.

Last month, while searching for some interesting and fancy stuffs to configure my Arch Linux, I came across a project __"Linux from Scratch"__.

Linux From Scratch (LFS) is a project that provides you with step-by-step instructions for building your own customized Linux system entirely from source. Building LFS teaches you about all that makes Linux tick, how things work together and depend on each other. And most importantly, how to customize it to your own tastes and needs.
LFS is updated twice in a year, as of now the latest release is [Version 8.3](http://www.linuxfromscratch.org/lfs/view/8.3/index.html).

This article will ~~not~~ teach you how to do LFS, the official documentation is maintained well and is beginner friendly, but to motivate you towards it and share my experience with you, and the difficulties, mistakes which I have done during my project.

### Issues and Solution

Here I'm sharing some important links and issues which I faced.

\* **Never skip** any step while doing the project, believe it is not working, even if doesn't give any error. I guess you like to stop and resolve current issue, rather then coming back form next chapter. ;)

\* Try to do the stuffs in one go, atleast till chapter 5.

\* **Never** forget chrooting in [Chapter 6.4](http://www.linuxfromscratch.org/lfs/view/8.3/chapter06/chroot.html) everytime you resume work after it.

`I f**cked up my Arch twice because of this (>_<)`

\* If you do some silly mistakes, look up [here](http://www.linuxfromscratch.org/lfs/view/stable/chapter02/stages.html).

\* Chapter 6 [Glib](http://www.linuxfromscratch.org/lfs/view/stable/chapter06/glibc.html) ERROR:  
`error   missing __attribute__ ((constructor)) support?` 
[Solution](http://lists.linuxfromscratch.org/pipermail/lfs-dev/2011-August/064955.html).

\* Chapter 6.21 [GCC](http://www.linuxfromscratch.org/lfs/view/8.3/chapter06/gcc.html) ERROR:  
`[Requesting program interpreter: /tools/lib64/ld-linux-x86-64.so.2]` 
Instead of `[Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]` 

  No need to do Chap 5 again, here is the [hack](https://stackoverflow.com/a/48289145/9050028). 

\* Chapter 6.40 [Perl](http://www.linuxfromscratch.org/lfs/view/8.3/chapter06/perl.html) compliation error: `recompile with -fPIC` 

  Try [this](https://stackoverflow.com/a/43423168/9050028) or remake [Bip2](http://www.linuxfromscratch.org/lfs/view/stable/chapter06/bzip2.html).



### What Next ?

Beyond Linux From Scratch([BLFS](http://www.linuxfromscratch.org/blfs))!!!


