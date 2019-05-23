# Pokémon: Gotta guess them all!

## What is this game about?
It's just a simple game on which you can choose an amount of Pokémon you
think you can guess. Within the game you get X seconds per question where a
random Pokémon flies through your screen in multiple forms. It's up to you to
type the name as fast as possible and once correct you get points added to
your score.

## Why did I start this?
This game is once again meant to learn Typescript even more. Trying out new
code principles and getting feedback from my colleagues to improve the code
is what makes it fun. Choosing Pokémon was easy as it's always fun and one
of the most easy open API's to use.

## Live demo
Thanks to the wonderful feature *'Github live pages'* you can check the live
demo here: [Check it out!](https://gotta-guess-them-all.antwan.eu)

## How to get it running?
1. Make sure latest versions of node (8.11.2) and npm (6.9.0) are installed
2. Install typescript with `npm install -g typescript`
3  Git clone this project
3. Run `npm install` in the root folder for the right tools
4. Run `npm run watch` in the root folder while developing
5. Have a web server running with the `/docs` folder as root folder
6. Add the `dev/config.json` file as it isn't part of the git code. Contents
should look like the following code.
```
{
  "game": {
    "activePokemon": 386,
    "scorePerQuestion": 3,
    "secondsPerQuestion": 8
  }
}
```

## Road map
* ~~Setup a first working version.~~
* Refactor code based on feedback of peers
* Make selection of gens to choose from
* Make a pre-download option of all assets needed. Right now the more
Pokémon you select, the heavier the script
