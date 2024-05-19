+++
title= "Letter Bubbles: HTML5 typing game"
date= 2011-11-01
draft= false
[taxonomies]
tags= ["coding", "gamedev-digital","lang-javascript"]
projects= ["letter-bubbles"]
+++

Back in 1999 I wrote a frantic arcade style touch typing game in Visual Basic (ew!). Someone reminded me of the game and I decided to recreate the game using modern web technologies such as HTML5 Canvas & Audio elements. I stayed as true to the original as I could and pleased that I managed to port the game almost identically. Check the youtube vid below to see the game being played on insane difficulty.

{{ youtube(id="4heO3UiiRMo") }}

Here is a video giving an overview of some of the features:

{{ youtube(id="fEx3HI6ODQQ") }}

Give the game a go over at ~~letterbubbles.com~~ <sup>(No longer online)</sup>

## Technical Details

Below's a few technical details regarding the development of the game.

### Closure library and why

I wanted a JavaScript library or framework that would allow me to develop using a classical object orientated style and didn't restrict me in terms of application structure. I ended up choosing Closure Library for these reasons as well as that it's compatible with the Closure Compiler. By compiling my game (using the advanced optimisation flag) allowed me to somewhat obfuscate the source code which would make cheating somewhat tricker.

### Graphics via canvas

The graphics are all done via drawing directly to the canvas (there are zero sprites/bitmaps in the game). The game runs at a steady 30 frames per second and profiling reveals that the vast majority of the render time drawing the circles/bubbles/htmls5 arcs. Maybe if I ever get around to writting a sequel I'll create a WebGL renderer!

### Multi-channel audio

The HTML5 audio element isn't great, I ended up creating a class which created multiple audio elements (programatically and never assigned to the DOM) which allowed my various sound effects to be played over multiple channels simultaneously. I'll try to go in to this with code examples later.

### Leaderboards & security

Back in 1999 I didn't finished implementing the global leaderboards so this was something I really wanted to make sure I had in this time around. The big challenge was how to implement the feature securely to avoid people cheating. I didn't find a solution to this problem and truth be told I don't think there really is a way you can avoid people cheating in a javascript based game.

One of the measures I implemented is a security token to verify the game submission, this is made up of a combination of all the game statistics including the games ID, this is the reverified on the server before the result is accepted to avoid the easy hacker packet sniffing and altering the JSON score submission. Of course this only protects against this single type of attack but it's by adding little deterrents like this that I believe make the hack more effort than it's worth which is why I've had so few people actaully hacking the game and submitted bogus scores.

As I mentioned earlier by compiling the game source using Closure Compiler also helps deter people as the code isn't instantly in a easily readable format. I've had a few ideas for ways I could create a much more secure game scoring system for a client-side javascript game, maybe one day I'll implement them in to a new game or at least write a blog post about them!

Anyway, why'd you bother reading all this boring small print?! ~~Get playing now: letterbubbles.com!~~ <sup>(No longer online)</sup>
