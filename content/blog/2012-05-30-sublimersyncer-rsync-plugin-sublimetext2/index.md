+++
title= "SublimeRsyncer - Rsync Plugin for SublimeText 2"
date= 2012-05-30
draft= false
[taxonomies]
tags= ["coding", "lang-python"]
+++



Discovering SublimeText 2 was love at first sight. It's the fastest & most extensible IDE I've come across. Most of my projects reside on local virtual machines, I do this for development & production environment consistency, development machine portability and I don't want to clutter up OSX, my desktop OS. This setup always results in an IDE headache: how to develop on OSX and automagically sync my changes to my various Linux VMs. When using Eclipse (my previous IDE of choice), I'd use the RSE plugin, which would allow me to have remote projects via SSH. SublimeText2 doesn't offer many features out of the box and it's left to you to choose how to setup your IDE by adding plugins. The plugin API is pretty simple, all python based so I decided to create a simple tool which would rsync my projects to my Linux VMs.

View/Download Project: [SublimeRsyncer on GitHub](https://github.com/jimmyff/SublimeRsyncer)

I've not too much experience with Python so if this is your area you'll probably cringe at my sloppy syntax and dodgy use of threading so not to block the UI. If you do make changes please hit me up with a pull request so I can incorporate your updates! :-)
