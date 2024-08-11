+++
title = "Ai, Astrology and Clocks, oh my! // Dev Log 3"
date = 2024-08-05
draft =  false
[taxonomies]
tags = ["lang-dart", "coding", "flutter", "astrology"]
medium = []
series = []
project = ["Cosmic"]
[extra]
images= ["icon.webp"]

+++

_Woo, so here we are, Dev Log 3. I said this was going to be a big AI update and wow, I've been blown away by the results I've managed to get with [Gemini](https://ai.google.dev/)!_

{{ youtube(id="p0sxLEX6PUk ") }}

### Gemini Interpretations

Gemini an incredibly powerful LLM and simple asking it straight up for interpretations works pretty well, but If there's one thing I've learned in the last few weeks is there isn't a singe correct way to interpret something in Astrology, there are often various approaches, with different meanings and importance given depending on the astrology tradition, era etc. In order to get a consistent voice & perspective across the app I needed to provide a really thorough astrological context to Gemini. I discovered that by feeding the principles along with the meanings that my app would use, then it would give me consistently accurate and incredibly nuanced results. I've created the concept of an 'AI Astrologer' on my app, I'm currently using the Hellenistic AI Astrologer but in the future I can add a Modern Western Astrologer, a Vedic Astroloter, (BaZi, Medievil etc...) and let the user choose what interpretations and principles they desire.

I experimented with using the cost-effective Gemini Flash 1.5 model but decided that the results I was getting from Gemini Pro 1.5 were worth the additional cost. The were often slightly more creative and really remarkably nuanced. I think Astrology is a great fit for using an LLM, but I could breakdown the interpretations Gemini was providing and trace back pretty much everything to the wealth of astrological data I was feeding it. I played around with various settings but found that using a low Temperature (the balance between predictability 0.0 and creativity 2.0), I found that a value of 0.3 was perfect for my interpretations. I was providing so much context and detail and using a higher score would give Gemini a little more creativity but risked something a little less accurate.

The results have been nothing less than remarkable, I'm generating huge amount of interpretations, so many that using anything other than an LLM would not be feasible but as a result there is a staggering amount of depth to each intepretation. I can't wait until I get to the point where I am providing a bespoke interpretation for an individual. I plan to do this in phase 2 of the app and if this is an indication of the results then that is going to be wild.

---

{{ image(src="venice_photo.webp", alt="Neil and I at St Marks clock tower, Venice, 2017") }}

### A Detour for a Comsmic Clock

I know I need to start wrapping things up ...the deadline for submission to the competition is looming. But I had this idea that I really wanted to reproduce the St Marks Cosmic clock that I saw back in 2017 on holiday in Venice. I thought it would be a lovely way to greet the user each time they open the app. I had all the components to do it so I decided I'd allow myself a little detour to get it made. I soon realised that with this being a digial cosmmic clock, I could go above and beyond what the original clock offered. Like the original I added roman numerals around the edge of the clock that show the time, I would tell the time with the same sun hand, but my sun hand would be based on the sun's position on the eclipitc. I added another hand for the moon, again showing it's position on the ecliptic but instead of pointing to a roman numeral that pointed to the current moon phase. Both of these hands would also pass through a zodiac ring, showins which sign they were in. I added the AC, MC, DC & IC to show the key points and signs that they're in. I created some custom icons for the clock and I think it came out beautifully. I added the same gestural navigation as the astrology charts and it feels really satisfying playing around with it.
Although the clock looked good, it's only when I super-charged it with Gemini AI that it transformed in to something really special. My idea was that the confirutation of all this information and then multiplied by the astrological perspective, context and principles as used for the interpretations could then be fed to Gemini to create something based on the precise moment. I call these cosmic moments, and for every cosmic moment Gemini creates a Haiku poem, a thoughful koan-like expression and 3 affirmations. As the moon takes around 27 days to orbit the Earth, it would be in the same phase for up to a few days at time, so I came up with the idea of using the day of the week too. the 7 day week has lots of astrological significance and each day is said to have it's own ruler. With Hellenistic Astrology each planet has it's themes and also it's sect. Adding this as an additional layer means that even while the moonphase gradually shifts, each of the possibly 4 days would have its own unique take on the moments. (Besides, the sun ascendant, sign positions would almost certainly be different too!). The creativity of Gemini has made this my favorite feature of the whole app. I'm very glag I allowed myself to go on the cosmic clock detour!

Here is an example of Gemini's creative and poetic side, these were generated with the context that it's 4am, the ascendant and the rising sun are both in Cancer. The moon (first quarter phase) is subterranean and it's a Tuesday which is ruled by Mars

---

## Scarlet Tides

### Haiku of the moment

```
Crimson dawn breaks free,
Crab's shell shimmers, wet with dew,
a new day beings.
```

### Thought of the moment

> Without the Moon's reflection, how can we truly know the Sun's fire?

### Affirmations of the moment

- I embrace the depths of my emotions.
- I trust the journey unfolding before me.
- I am safe to express my authentic self.

---

I'll end that with those lovely inspiring messages, until next time - keeping look up! ✨
