+++
title = "Announcing Kosmos! // Dev Log 2"
date = 2024-07-24
draft =  false
[taxonomies]
tags = ["lang-dart", "coding", "flutter", "astrology"]
medium = []
series = []
project = ["Cosmic"]
[extra]
images= []
+++

_Hey stargazers! 🔭 I had hoped to do regular dev logs for my Gemini AI competition entry project, but life (and building this app) has been keeping me super busy! But anyway, late is better than never right? And the good news is, the app has come on a ton and I'm really excited about how it's shaping up!_

{{ youtube(id="Pb3UwpWO0aY") }}

Check out the video above for a walkthrough/wafflethrough of the app so far. (Apologies for the rough edges with the vid– I'm determined not to do any scripting or post-editing!)

### Here's what I've been up to

- A buttery smooth interface: You can now shuttle/animate through time, location, and even settings (though I turned that off in the video because there's a little quirk I need to fix). It feels really tactile with some nice haptic feedback as your rotate the charts.
- Interpolation and custom tweens: These make everything super fast and my custom tween sequence keeps the animation calculations nice and accurate.
- Ecliptic and Equatorial positions: Exposing all the data I can such as their coordinates, their sign, house, speed, and distance.
- Aspects: The app now shows 11 different aspect types, with intensity calculated based on type, accuracy, speed, and celestial body pairings. (To be fully configurable by the user)

### Bonus stuff I didn't mention/forgot to mention in the video

- Map Projections: After initially using GeoJSON maps I've switched to D3's TopoJSON maps and plan to do some really cool stuff with these in the future.
- Astrology accuracy tests: I'm making sure all the data that the app is generating is accurate by benchmarking it against external services. I also have an interpolation accuracy test which allows me to understand how far I can interpolate astrological data whilst animating before the accuracy drops below acceptable tolerance levels
- Custom font: I've drawn a set of astrological symbols (on my tablet) which really help give the app a distinctive look. I plan to write a blog post in the future detailing process and tools used (as a reminder for my future self!)

{{ image(path="@", src="/gallery/2024-06-15-cosmic-vibes/cosmic-vibes.webp", alt="Cosmic Symbols") }}

### App Availability

I'll be uploading a web version soon and submitting to the app stores by the end of the week (hopefully). So next time you hear from me, you'll be able to play with it yourself!

I'm also considering doing a bit more of a technical deep-dive, let me know if you'd like to see some of the code behind the scenes. I'm happy to share a closer look at the Kosmos!

Until then, keep looking up! ✨✌️
