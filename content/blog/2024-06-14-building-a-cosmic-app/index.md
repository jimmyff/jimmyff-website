+++
title = "Decoding the Stars with AI // Dev Log 1"
date = 2024-06-14
draft =  false
[taxonomies]
tags = ["lang-dart", "coding", "flutter", "astrology", "ai"]
medium = []
series = []
project = ["Cosmic"]
[extra]
images= ["cosmic.webp"]
+++

Ever since I heard about the Gemini [AI competition](https://ai.google.dev/competition) my brain has been whirring. I knew I wanted to build something for it, and I have _lots_ ideas so the problem has been which idea to choose. Earlier this week I finally landed on my idea and I'm feeling super fired up about it. A couple of months back I bought a lovely little Astrology book (as content and inspiration for [a game I'm working on](/projects/quest/)), astrology is totally new to me but I quite liked the idea of exploring birth chart astrology further. I think a great way to explore a subject is to build an app about it (I did this with [my Eurovision app](/projects/eurovision-app/) back in 2018). I also think it's a great fit for the Gemini competition, not only is the clue is in the name but after running a few tests I've found Gemini to provide some really interesting observations on birth chart data. I think I can offer people a much more personal interpretation of their birth chart using the power of generative AI.

{{ youtube(id="cXfPvt9oHpg", class="portrait") }}

## The cosmic <del>black</del> rabbit hole

I've been down a bit of a rabbit hole for the last couple of days, learning all about space. From transforming geocentric positions (planetary positions as observed from the centre of earth) to topocentric positions (as observed from a point on earth's surface), dealing with parallax correction and atmospheric bending of observed positions! It's been a lot, but lots of fun.

## The Astrology rabbit hole

I've digested a huge amount of Astrology information over the last few days learning everything from the significance of planets, zodiac signs, houses, house systems, zodiac systems, transits, house rulers, placement conditions and we're only touching the surface! Throwing myself in to coding an astrology app means no stone can be left unturned! One of the areas that has really caught my interest is that being born in February I've always been told I was an Aquarius, so I assumed I the sun was in the Aquarius sign at the time of my birth, whilst exploring Sidereal Astrology (which is based on the exact placement of stars) I realised the sun was in fact in the Capricorn sign! I've used astrology software to rewind and confirm that this is true! To my current understanding (disclaimer: I'm now expert -in fact I was a total Astrology novice 3 days ago!) is that Ancient Astrology was based on the stars, a system first created by Babylonian Astrologers. Later Greek Astrologers decided to change the system to ensure that the Sun was at the top of the chart at the Spring Equinox not realising that due to the Earth's "wobble", every 71.6 years the degree the sun appears shifts by 1 degree. Western Astrology is based on that system (now known as Tropical Astrology) and over the last 2000 years that 1 degree every 70 odd years has added up to around 27 degrees! A 360 degree chart is broken in to 12 segments for each of the Zodiac signs ([Ignoring the 13th zodiac sign](https://en.wikipedia.org/wiki/Ophiuchus_(astrology)) 😅) so each segment is 30 degrees - the Western system is now almost an entire constellation out of sync with the actual stars! Anyway, I could rabbit on about this and numerous other interesting things I've discovered but I'll save that waffle for pub chat.

{{ image(src="cosmic.webp", alt="Cosmic map - showing the planets at my birth time and location", class="small") }}

## Gemini: My AI coworker

The huge surprise for me is the role that AI has played in this project before I';'ve even started implementing it in to the app. Gemini has been my astronomy & astrology mentor. I've fed it 200+ page documentation PDFs and had it expertly clearing any roadblocks I've come up against. I've been using Gen AI more and more, but never to this extent, I feel like Popeye and Gemini is my Spinach! I can't wait actually start implementing the chart interpretation stuff next. Feels like I've made a heap of progress in super short time -I can't wait see where this goes!
