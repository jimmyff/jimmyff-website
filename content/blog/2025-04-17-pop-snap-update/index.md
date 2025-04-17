+++
title = "Pop Snap Mega Update"
date = 2025-04-17
draft =  false
[taxonomies]
tags = ["lang-dart", "coding", "flutter"]
medium = []
series = []
project = ["Stickers"]
[extra]
images= ["cover.webp"]
+++

So the latest version of Pop Snap has just hit the app stores so I figured it was the perfect time to add some deets about it to my blog. This is the result of about 2 weeks work totally revamping the client app. I've rewritten the editor itself which has big optimisation benefits and loads of scope for further development. I had an idea late last year that I would use Gemini LLM to categorise stickers for me. I implemented that back in September and I detailed the process with a youtube a dev log which is included below. I've since had some help loading SVG assets (stickers) in to the system for gemini to churn through and we now have almost 20k stickers in the system! Anyway, I'll include more details below, but if you're tight for time, just go and [download the app](/apps/) and have a play!

## New App Store Screenshots

{{ image(src="screenshots-1.webp", alt="App Screenshots") }}

{{ image(src="screenshots-2.webp", alt="App Screenshots") }}

---

## Building an AI super-powered control-panel

I built a CMS which allows me to bulk upload SVG assets in to the system, sanitize them, tag the colors and then process them by generating metadata with AI. I won't go in to too much detail as I've gone through most of it in the devlog video below:

{{ youtube(id="B9rZwdGQ47E ") }}

---

## New Features

### Asset Pipeline System

One of the big optimisations of the new version is an asset pipeline system which rasterizes the SVG graphic (with the colors, styling options required) and then feeds the back to the flutter UI, it re-renders this as the user scales and manipulates the asset. It's a pretty cool system and makes the UI buttery smooth!

### New sticker manipulation toolbar

Now when you select a sticker a toolbar appears allowing you quick access to outline tool, recolor options, flip, arrange etc. It's nothing fancy but makes the editor nice and easy to use.

### Haptic Feedback

I loved the haptic feedback I added to my Kosmos app so I did something similar here, now as your manipulate the Stickers you can feel little haptic vibrations for every few degrees you rotate, or percentage you scale. It feels really good!

### Revenue Cat

I downloaded and implemented Revenue Cat a couple of days ago, I couldn't believe how simple it made subscription integration. I've always handled subscriptions and in-app purchases myself and it all works fine, but with this I could delete a whole bunch of code, one less thing for me to maintain. It's so good I'm considering shifting all my app to use it despite them taking a cut...

---

## So what's Next for Pop Snap?

Text! I had hoped to add this feature this week, but Apple policy team love to faff so i've been playing ping-pong with them all week trying to get the new version accepted. Anyway I think Text would be an awesome feature so that's high on my priority list. Also some basic settings to allow default skin colors etc, that will probably be next... I need to get back to on other app's now but I'll swing back to this in the future, and possibly try to squeeze in some more features on Friday afternoons!