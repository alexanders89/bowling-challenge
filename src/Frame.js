
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
  } else if
    (this.score[0] + roll > 10) {
    throw new Error("10 points max!");
  } else {
  this.score.push(roll)}
};

Frame.prototype.getScore = function (){
  var sum = this.score.reduce(function (a, b) {
  return a + b;
}, 0);
return sum
};

Frame.prototype.updateGameScore = function(){
  game.score.push(this.score)
  this.score = []
}
