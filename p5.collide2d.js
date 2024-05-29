/*
Repo: https://github.com/bmoren/p5.collide2D/
Created by http://benmoren.com
Some functions and code modified version from http://www.jeffreythompson.org/collision-detection
Version v0.7.3 | June 22, 2020
CC BY-NC-SA 4.0
*/


console.log("### p5.collide v0.7.3 ###")

p5.prototype._collideDebug = false;

p5.prototype.collideDebug = function(debugMode){
    _collideDebug = debugMode;
}

/*~++~+~+~++~+~++~++~+~+~ 2D ~+~+~++~+~++~+~+~+~+~+~+~+~+~+~+*/

p5.prototype.collideRectRect = function (x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
};

// p5.vector version of collideRectRect
p5.prototype.collideRectRectVector = f
