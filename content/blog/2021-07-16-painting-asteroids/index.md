+++
title= "Painting asteroids"
date= 2021-07-16
draft= false
[taxonomies]
tags= ["coding", "gamedev-digital", "lang-lua"]
+++

I've been stewing on how I could fill the asteroids to make my [space game](/tags/space_game/) look better. It's a tricky problem as I only know terrain lines and nothing else (so I don't know which side is supposed to be solid and which is supposed to be the empty void of space). This shows what I have and what I want to achieve:

{{ image(src="problem.webp", alt="The problem") }}

I can trust that the space ship will always be in space (even if it's hit an asteroid, it should never actually be in the asteroid!). Using that piece of truth I've came up with an idea, if I projected from the ship to the corners and count the terrain line intersections I should be able to figure out what's solid. If the number of intersections is even, I know the corner should be in also in space, if the intersection count was odd, then the corner is in an asteroid.

{{ image(src="possible_solution.webp", alt="Possible solution") }}

Once I knew if the corners were in an asteroid or not, I should then be able to move along each edge and join up the lines.

## Implementation

{{ image_original(class="small", src="1-corners.gif", alt="Implementing the intersection counting") }}

I've implemented the intersection counting, if the line is green then there is an even number of intersections which means the corner is in space, if red then there is an odd number of intersections so this is in the asteroid.

I've cut the terrain line at the scren edge (and highlighting it with a circle), this is so I can make a nice clean edge on each polygon.

(Oh you might also notice I've implemented asteroid rotation too!)

{{ image_original(class="small", src="2-triangulate.gif", alt="Triangulation!") }}

Here I have implemented the algorithm that combines all the edges in to polygons. At the top there is text that says something like 'P: 2', this means 2 polygons found.

At first I was getting a weird graphical glitch when filling my polygons which I realised was due to the fact my polygons are concave. Filling concave polygons turns out is a technically tricky as the polygon needed triangulating (chopping in to simple triangles). Luckily Love2d has a triangulate feature that I could use. I coloured the triangles random colours to highlight the triangulation process.

{{ image_original(class="small", src="3-done.gif", alt="It worked!") }}

...ta-dah! Here is the finished product. I'm super happy (& surprised) that my crazy idea worked!

I now need to reimplement the ship, but I'm a little hesitant to continue with Lua due to it being so difficult to debug (and I'm really missing static-typing!). I'm thinking about switching to C or possibly Rust to continue my playdate journey.

I apologise for the noisy strangely coloured gif's -I really need to level up by gif skills!
