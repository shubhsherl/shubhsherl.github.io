---
layout: post
title: (TIL) Before upgrading your Arch
description: 
date: 2020-07-11 00:06:45 -0700
excerpt: 
image: /assets/img/byte.jpg
style: |
  p img { box-shadow: 0 8px 50px -6px black!important; }
---

Upgrading Arch is a pretty straight forward, just a single command `pacman -Syu` with root previlage. But sometime, it can lead to key-ring, file-conflict errors.

You should follow some steps before running the upgrade command to avoid using google everytime you want to upgrade your OS.

Users are expected to visit the Arch Linux home page to check the latest news, or alternatively subscribe to the RSS feed or the arch-announce mailing list. When updates require out-of-the-ordinary user intervention (more than what can be handled simply by following the instructions given by pacman), an appropriate news post will be made.

Before upgrading fundamental software (such as the kernel, xorg, systemd, or glibc) to a new version, look over the appropriate forum to see if there have been any reported problems.

Users must equally be aware that upgrading packages can raise unexpected problems that could need immediate intervention; therefore, it is discouraged to upgrade a stable system shortly before it is required for carrying out an important task. It is wise to wait instead to have enough time in order to be able to deal with possible post-upgrade issues.

Tip: You could use a pacman hook like [informant](https://aur.archlinux.org/packages/informant/) which prevents you from updating if there is fresh Arch News that you have not read since the last update ran.

Often the reason is that you may have done the previous update a while ago. In the meantime some keys by Arch developers may have changed, and some new updates are signed with the new (PGP) keys. Run `pacman -Sy archlinux-keyring` to update keyrings.

#### In a Nutshell

\* Install `informant` if you haven't  
\* Read the latest arch news from informant  
\* Follow the instruction for package if there is any 'update requires manual intervention'  
\* `pacman -Sy archlinux-keyring`  
\* `pacman -Syu`

Source: [StackExchange](https://unix.stackexchange.com/questions/574493/sudo-pacman-syu-fails-with-error-failed-to-commit-transaction-invalid-or-cor), [Arch wiki](https://wiki.archlinux.org/index.php/System_maintenance#Read_before_upgrading_the_system)