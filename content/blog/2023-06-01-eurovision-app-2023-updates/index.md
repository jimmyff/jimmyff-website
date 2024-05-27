+++
title = "Feature drop: Social Scoring, accounts and more!"
date = 2023-06-01
draft =  false
[taxonomies]
tags = ["eurovision", "project-eurovision-app", "coding"]
medium = []
series = []
project = ["Eurovision App"]
[extra]
images= []
+++

It was a big effort getting this update together in time for Eurovision 2023 but I'm so glad I did. This updates was really well received and I personally think it's a _huge_ step forward for the app! The app has received some lovely reviews over the week of Eurovision and is now 4.8⭐️/5⭐️ on both Google Play and Apple App Store!

{{ image(src="update.webp", alt="Promotion details", class="small") }}

## Social scorecards and account system

The headline feature for this year is social scorecards. I came up with this idea last year when a friend casually asked if at her Eurovision party they could all score together on my app? I told her she couldn't but that was a fabulous idea! (Thanks Ellie!) Group scoring is an addition to the scorecard system for 2 years back. It allows you to create a 'Group'. During the development of this I was chatting to another friend (Queenie this time) and they asked if the group would have a combined scorecard -another fab idea! Initially I had planned for it to just allow you to see each others scorecards and share your realtime reactions (with emoji) but this would elevate the feature so I pushed to add this and prioritised it over seeing each others scorecards.

I wanted to make this work for large groups. As a member of OGAE UK (The UK's official Eurovision fan club) which around 1k members - I wanted to make sure that if a club used it, then it would work. I decided on setting a limit of 500 members for each group and worked backwards from that. Each minute a cloud function would trigger which would look for any active group scorecards, and generate the latest scorecard for that group. I could increase this to every 30 seconds during the week of Eurovision - maybe this is something I'll do in the future. People can also add emoji reactions which are shown to the group in realtime. There is a limit on the frequency these can be posted by individuals based on the group size. I added some simple management tools to the UI so the group owner manage their group.

I really think this feature is my apps 'Killer feature', it's something that no other app does and something I don't anticipate anyone else doing. It's quite a complex thing, and with this not being a money making app it would take someone as crazy as me to invest time in to making it work!!

_(To do: Add a video of the group scorecard feature)_

---

## Everything is now free! 💸

Speaking of this app not making much money -I've decided to make everything free this year. When I first implemented scorecards I set a restriction that the current/latest year required a paid 'VIP Pass' (£2.99 one off for a year or £1.99 per/year subscription). The app has always made very little money and if I want my scorecard feature to be used by lots of people then I need to life that restriction. So this year I've kept the concept of a 'VIP Pass' but I give people the choice: Watch an advert for a temporary pass or buy a subscription (£1.99 for the year or £10.99 for life). I'm really happy with this change as now the people can download my app and use it fully without paying a penny, it also works for those that don't want to watch an advert so would rather subscribe or just buy it once and own it forever. The little bit of revenue I receive contributes towards the running costs of the app.

---

## New scorecard themes & layouts

{{ image(src="themes.webp", alt="Scorecards showcasing different themes and layouts") }}

I've added a 4 new scorecard themes and 2 scorecard layouts. I intend to add more in the future but this is a decent upgrade over the single theme and layout up to now.

---

So that wraps up my updates for 2023, if you haven't downloaded ESC Party yet then what the heck are you waiting for? -download it now, the links are available on my apps [project page](/projects/eurovision-app/)!
