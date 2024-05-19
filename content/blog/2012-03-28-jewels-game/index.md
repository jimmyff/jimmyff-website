+++
title= "HTML5 Jewels Switching Game"
date= 2012-03-28
draft= false
[taxonomies]
tags= ["coding", "gamedev-digital", "lang-javascript"]
+++

<script src="../../shared_assets/rocketbox/rocketbox_1_0.js"></script>
<script src="CanvasJewels2.js"></script>

I'd bet that everyones been hooked on Bewjewled, ZooKeeper or another tile switching game at some point or another. Me and my partner whilst travelleing went through a phase trying to beat each others scores on the mobile variety of this genre which is what led me to the fun challenge of recreating this type of game in JavaScript.

## Developing the game

The project came together pretty quickly (a couple of sofa coding sessions), I was surpised at how tricky it was finding a decent way to store the grid and transision between which row the blocks are on. I tried a few different methods before finalising on a block array, a block object map and a grid object which stored a block reference for each of its coordinates.

There was a niggling issue I had with the frst version - not all the blocks were totally syncronised. The initial version was mostly callback driven, so if the user switched some blocks it would trigger the callbacks regadless of a where the game was in it's main loop. This resulted in blocks being slightly out of sync, maybe by only a millisecond or two but I wanted everything to fall perfectly in sync! After a bit of hacking I sorted this issue and it now keeps everything in sync by queuing jobs up and executing them syncronously at the correct time in the game loop.

<div id="canvasJewels2_1"></div>

## Layout & Rendering

I took a slightly different approach to layout this time and I really like it. I consider the variable width & height to be 100 - as in 100%. As I know how many columns & rows I want I can calculate what position they're at, for example a block that is stationary in row 5, column 7, would

In the version below I've temporarily "borrowed" the ZooKeeper sprites to test using bitmap graphics. When I get round to finishing this I'll have original graphics!

<div id="canvasJewels2_2"></div>

## Finding possible switches

When the current game runs out of possible switches it needs to know so it can act on it (usually the board resets if no more moves). In order to find the possible switches I broke down game logic in to 3 patterns which cover all possible switches. Every time the grid changes I recalculate the switches by testing every block against these 3 patterns horozontally & vertically.

### Switch Pattern 1

```
 *  *  *  *       *  *  *  *
 A  B  _C   +   A_  B  C
 *  *  *  *       *  *  *  *

```

### Switch Pattern 2

```
* _C1_       _B1 C1_
 A  B  **+   A**  *  
* _C2_       _B2 C2_  

```

### Switch Pattern 3

```
* B1 **
 A  _C_
* B2 **
```

The demo below highlights the possible switches by rendering a line connecting the blocks. It will randomly switch blocks, to stop it from running out of switches I'm also randomly removing blocks & rows. (If you notice that sometimes the switches fail it's because it's not considering if the blocks haven't finished falling in to position, if they are this will result in a switch fail!).

<div id="canvasJewels2_3"></div>

## The jewels game to-do list

The game mechanics are all mostly there now. The next things I'll add to this will be:

- [ ] Scores & Combos
- [ ] Level based difficulty system. Each level score target & time to reach that score
- [ ] Original graphics! (any designers out there?!)
- [ ] Leaderboards
- [ ] Fun stuff! I'm sure I'll come up with some fun new features I can add that will make my jewel switching game a little different!

Stay tuned for a future updates!

<script>
var canvasJewels2_1 = new RocketBox(
 new CanvasJewels({
  renderer:'simple',
  imagePath:'./'
 }),
 {
  id:'canvasJewels2_1',
  width:500,
  height:500,
  title: 'Jewels Game : Simple Renderer',
  description: 'Click on a block and drag to an adjacent block to switch them. Get 3 in a row to make them disappear!',
  canvasResize: true
 });

var canvasJewels2_2 = new RocketBox(
 new CanvasJewels({
  renderer:'production',
  imagePath:'./'
 }),
 {
  id:'canvasJewels2_2',
  width:500,
  height:500,
  title: 'Jewels Game : Graphical Renderer',
  description: "I've ahem, temporarily borrowed the ZooKeeper sprites to test rendering bitmap graphics instead of geometric shapes.",
  canvasResize: true
 });

var canvasJewels2_3 = new RocketBox(
 new CanvasJewels({
  renderer:'simple',
  imagePath:'./',
  autoSwitch:true,
  destoryRows:true,
  destoryBlocks:true,
  showSwitches:true
 }),
 {
  id:'canvasJewels2_3',
  width:500,
  height:500,
  title: 'AI Playing the Jewels Game',
  description: 'Sit back and watch the AI play the game, you can join in too if you like!',
  canvasResize: true
 });
</script>
