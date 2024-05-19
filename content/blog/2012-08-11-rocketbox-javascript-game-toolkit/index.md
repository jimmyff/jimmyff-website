+++
title= "RocketBox - HTML5 Toolkit"
date= 2012-08-11
draft= false
[taxonomies]
tags= ["coding", "gamedev-digital", "lang-javascript"]
+++

I've create numerous HTML5 apps recently and each time I start a new one, I go through the same process getting all the core components in place. This takes an hour or so and once complete I can finally start working on the actual app. It's for this reason that I decided to create [RocketBox](https://github.com/jimmyff/RocketBox) - a html5 game/demo/app toolkit. It's essentially a blackbox that abstracts away a lot of the headaches and boring stuff that developers face when they start a new project.

### Features

* Front-end player & UI for canvas based applications
* Scaling handling
* Fullscreen support
* Events system
* Render loop timer
* Debug & logging system
* Supports multiple apps per page

There are other benefits to this project too: future features can be added which an app will benefit from without having to touch it's code base (ie: fullscreen feature will implement the fullscreen API further down the line), the app's won't need updating, it just works. It also means that all your games/demos follow a uniform structure, making it nice and easy to implement in a blog etc (plus RocketBox also supports multiple instances per page).

View/Download: [RocketBox Github Project](https://github.com/jimmyff/RocketBox) (as always, I welcome pull requests! :)

<div id="rbExample"></div>

<script src="../../shared_assets/rocketbox/rocketbox_1_0.js"></script>
<script>
var BouncingBall = function () {

 this.canvasContext  = undefined;
 this.events   = undefined;
 this.width    = 640;
 this.height   = 360;
 this.ballPosition  = {x:0, y: 0};
 this.ballDirection  = {x:1, y:1};
 this.ballRadius  = 30;

};

BouncingBall.prototype = {

 initalise: function (setup) {
  this.canvasContext = setup.canvasContext;
  this.width = setup.width;
  this.height = setup.height;
  this.ballPosition = {
   x:Math.round(this.width/2),
   y: Math.round(this.height/2)
  };
  this.events = setup.events;
  this.events.listen('APP:TICK', this.appLoop, this);

  this.events.listen('APP:RESIZE', this.resize, this);

  this.canvasContext.fillStyle = "rgb(245,245,245)";
  this.canvasContext.fillRect(0, 0, this.width, this.height);
 },

 resize: function (eventData) {

  this.width   = eventData.width;
  this.height  = eventData.height;

 },

 appLoop: function (cycle) {

  this.clearCanvas(cycle);
  this.move(cycle);
  this.render(cycle);
 },

 clearCanvas: function (cycle) {

  // 0.2 opacity to give trail effect
  this.canvasContext.fillStyle = "rgba(245,245,245,0.2)";
  this.canvasContext.fillRect(0, 0, this.width, this.height);

 },

 move: function (cycle) {

  this.ballPosition.x += ((cycle.dt/5) *this.ballDirection.x);
this.ballPosition.y += ((cycle.dt/5)* this.ballDirection.y);

  if (this.ballPosition.x - this.ballRadius < 0) this.ballDirection.x = 1;
  if (this.ballPosition.x + this.ballRadius > this.width) this.ballDirection.x = -1;
  if (this.ballPosition.y - this.ballRadius < 0) this.ballDirection.y = 1;
  if (this.ballPosition.y + this.ballRadius > this.height) this.ballDirection.y = -1;
  
 },

 render: function (cycle) {

  this.canvasContext.fillStyle = "rgb(40,40,40)";
  this.canvasContext.beginPath();
  this.canvasContext.arc(this.ballPosition.x, this.ballPosition.y, this.ballRadius, 0, Math.PI*2, true);
  this.canvasContext.closePath();
  this.canvasContext.fill();
 }

};

test1 = new RocketBox(
 new BouncingBall(),
 {
  id:'rbExample',
  width:870,
  height:350,
  title: 'Example RocketBox Application',
  description: 'Very simple application demonstrates RocketBox integration, see below for source code.'
 });
</script>

The demo above demonstrates a basic app integrating with RocketBox, below you can see/download the code. All of the demos on this blog use RocketBox (even the older posts!), blogging was one of the main motives for creating the project!

```javascript

var BouncingBall = function () {

 this.canvasContext  = undefined;
 this.events   = undefined;
 this.width    = 640;
 this.height   = 360;
 this.ballPosition  = {x:0, y: 0};
 this.ballDirection  = {x:1, y:1};
 this.ballRadius  = 30;

};

BouncingBall.prototype = {
 
 /* RocketBox will call this with the setup object */
 initalise: function (setup) {

  this.canvasContext  = setup.canvasContext;
  this.width    = setup.width;
  this.height   = setup.height;
  this.ballPosition  = {
   x: Math.round(this.width/2), 
   y: Math.round(this.height/2)
  };

  this.events = setup.events;
  this.events.listen('APP:TICK', this.appLoop, this);
  this.events.listen('APP:RESIZE', this.resize, this);
  this.clearCanvas(1);

 },
 
 resize: function (eventData) {

  this.width   = eventData.width;
  this.height  = eventData.height;

 },

 appLoop: function (cycle) {

  this.clearCanvas(0.2);
  this.move(cycle);
  this.render(cycle);
 },

 clearCanvas: function (opacity) {

  // 0.2 opacity to give trail effect
  this.canvasContext.fillStyle = "rgba(225,225,225,"+opacity+")";
  this.canvasContext.fillRect(0, 0, this.width, this.height);

 },

 move: function (cycle) {

  this.ballPosition.x += ((cycle.dt/5) * this.ballDirection.x);
  this.ballPosition.y += ((cycle.dt/5) * this.ballDirection.y);

  if (this.ballPosition.x - this.ballRadius < 0) this.ballDirection.x = 1;
  if (this.ballPosition.x + this.ballRadius > this.width) this.ballDirection.x = -1;
  if (this.ballPosition.y - this.ballRadius < 0) this.ballDirection.y = 1;
  if (this.ballPosition.y + this.ballRadius > this.height) this.ballDirection.y = -1;
  
 },

 render: function (cycle) {

  this.canvasContext.fillStyle = "rgb(40,40,40)";
  this.canvasContext.beginPath();
  this.canvasContext.arc(this.ballPosition.x, this.ballPosition.y, this.ballRadius, 0, Math.PI*2, true); 
  this.canvasContext.closePath();
  this.canvasContext.fill();
 }

};

```
