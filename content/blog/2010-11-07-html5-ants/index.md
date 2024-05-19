+++
title= "HTML5 Ants!"
date= 2010-11-07
draft= false
[taxonomies]
tags= ["coding", "gamedev-digital", "lang-javascript"]
+++

I'm sat in a bar on the edge of the Mekong in Luang Prabang, Laos. There are tiny ants running backward and forward along the bar's balcony and I've decidedo it would be fun to try a little AI coding and create a virtual ant colony! Have a play below.

<script src="../../shared_assets/rocketbox/rocketbox_1_0.js"></script>
<script src="AntDemos1.js"></script>
<div id="antDemo1"></div>

## The simulation thus far

At the moment my ants aren't very intelligent, they wonder around in a clockwise direction (currently can only turn right... lol) oblivious to the piles of food I've dotted around If you click on an ant you will focus on it, revealing it's name and smell radius, although the ants can't smell yet. Clicking on the floor will tell all the ants to charge to that position, when it gets within their smell radius they'll loose interest.

## "He's a nice ant"

I like the idea that all the ants were different, that's why I gave them names. Also each ant is built a little different from the last, some are bigger but slower, others have longer feelers and a greater smell range. I quite like the idea of introducing different species of ants (red, green & black maybe?), each could be a little different. Maybe in the next version I'll introduce roles or classes, certain ants could be soliders/gathers etc, I guess I'm moving away from a simulator but that wouldn't bother me, it's just a bit of fun anyway!

## Ant animation

The ants are visually simple made up of geometric shapes & lines. The body is made up of 3 filled circles & the legs are simply bezier curved lines. To animate the legs I use the sine of distance travelled to generate the leg position difference from where it is when stationary.

<div id="antDemo2"></div>

## Ant food & a sense of purpose

In the first demo I dotted piles of food around, the ants are currently oblivious to this. In the next version I will give them the gift of smell, if they get within a certain distance of food they will move to it whilst emitting instructions for ants behind them. This should create a highway to the food piles. The scents (instructions) the ants emmit would also need to slowly decay. Maybe then I'd need to introduce a concept of 'home' or a base for where they could deposit their swag.. Ohhh I could get quite carried away with this! :)

<div id="antDemo3"></div>

Stay tuned for future updates to the cyber ant colony! :-)

<script>

var demo1 = new RocketBox(
 new AntDemos1 ('food'),
 {
  id:'antDemo1',
  width:800,
  height:400,
  fps:30,
  autoPlay: false,
  title: 'Cyber Ant Colony Simulation',
  description: "This is the ant simulator version 1. The cyber ants aren't very intelligent at the moment, they move around in a clockwise direction paying no attention to the random food piles. Focus on an ant by clicking it or order all ants to a location by clicking the floor! Please don't tap on the glass! ;)"
 });

var demo2 = new RocketBox(
 new AntDemos1('ant'),
 {
  id:'antDemo2',
  width:800,
  height:400,
  fps:30,
  autoPlay: false,
  title: 'Ant Animation',
  description: 'Test to see the animation on the ants, the legs & feelers all animated using sine waves.'
 });

var demo3 = new RocketBox(
 new AntDemos1('lotsOfAnts'),
 {
  id:'antDemo3',
  width:800,
  height:400,
  fps:30,
  autoPlay: false,
  title: 'Ant invasion!',
  description: "Demo showing x100 ants, really need optimising further down the line. For every ant and every cycle I'm reculcating the bezier curve to animate each of their legs. I'm sure I could cache this, or even the whole ant's animation which would be a huge speed increase. This demo also demonstrates that the ants get stuck a lot!"
 });

</script>
