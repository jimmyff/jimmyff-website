+++
title= "Isometric HTML5 Game Engine"
date= 2012-05-18
draft= false
[taxonomies]
tags= ["coding", "gamedev-digital", "lang-javascript"]
+++


<script src="renderer-test.js"></script>
<div id="canvasContainer"></div>

<script>
game = new RendererTest();
</script>

I've been playing a lot of Kairosoft games recently, I'm on holiday in Cuba and their mobile games are a great way to kill time on a long journey. Kariosoft implements beautiful pixelated 2.5d graphics across the majority of their games, it's inspired me to create an Isometric game/demo/engine in HTML5:

<div id="isometricDemo"></div>

<script src="Isometric.js"></script>
<script>
test1 = new DemoPlayer(
 new RendererTest(),
 {
  id:'isometricDemo',
  width:800,
  height:350,
  title: 'Isometric Renderer',
  description: 'The current isometric renderer with culling and mouse movement.'
 });
</script>

_I'm afraid this demo is using an very early prototype of [rocketbox](/blog/rocketbox-javascript-game-toolkit) and as a result doesn't work very well (mouse movement is currently broken), I might attempt to update it in the future._

## Map culling and mouse movement

I've added map culling which will be a big optimisation when displaying large maps. I've also added keyboard drag zoom and keyboard controls to allow easier navigation.

## Future plans

Lots more to do with this, stay tuned as will add elevation slopes next!
