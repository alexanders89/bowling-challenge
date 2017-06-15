function Frame () {
  STARTING_SCORE = 0
  this.score = []
}

Frame.prototype.roll = function (roll) {
  roll = roll || 0;
  if (this.score[0] === 10){
    throw new Error("No more pins");
  } else if
    (this.score.length >=2) {
    throw new Error("Only two rolls allowed per frame");
  } else {
  this.score.push(roll)}
};

Frame.prototype.getScore = function (){
  var sum = this.score.reduce(function (a, b) {
  return a + b;
}, 0);
return sum
};

// var sum = [1, 2, 3].reduce(add, 0);
//
// function add(a, b) {
//     return a + b;
// }
//
// console.log(sum); // 6



//
// var frame1 = new Frame
// var frame2 = new Frame
// var game   = new Game(frame1, frame2)
//
// frame1.roll(2, 8);
// frame2.roll(0, 0);
//
// expect(game.getScore()).toEqual(10);
