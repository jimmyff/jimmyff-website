+++
title= "Deckorator : A package for creating analogue games"
date= 2019-09-04
draft= false
[taxonomies]
tags= ["coding", "gamedev-analogue"]
+++

_Update: To view a couple of the games I've made with this package see: [Yoga card game](/blog/yoga-game/) & [Eurovision card game](/blog/eurovision-game-2-the-card-game)_

Decorator is a collection of tools for creating card games & board games, intended to be used by a developer. You can check it out over [on Github](https://github.com/jimmyff/deckorator).

I made this package to give me a way of prototyping my game ideas. I wanted a way to create throw together print and plays.

This project originated about a year back when I created a game framework called "Tinman" (the idea behind the name being that it provides everything but the heart - you supply that which is the game). The idea for Tinman was to quickly create digital versions of analogue games which could then be played digitally, tested, possibly even add online play. I created some deck management tools for that which provided the inspiration for deckorator.

## Spreadsheet powered

As I tend to turn to spreadsheets when fleshout out game ideas this was the natural location to be my source of truth when generating game components. Decorator provides tools to read google docs spreadsheets and make it easy to convert those rows to game components such as tokens or cards.  
