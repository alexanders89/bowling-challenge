describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('can score one roll', function() {
    frame.roll(4);
    expect(frame.getScore()).toEqual(4);
  });

  it('can score two rolls', function() {
    frame.roll(4);
    frame.roll(4);
  expect(frame.getScore()).toEqual(8);
  });

  it('can only roll twice per frame', function() {
    frame.roll(4);
    frame.roll(4);
    expect( function(){frame.roll(4)}).toThrow(new Error("Only two rolls allowed per frame"))
  });

  it('will not allow a second roll if the first is a strike', function() {
    frame.roll(10);
  expect( function(){frame.roll(4)}).toThrow(new Error("No more pins"))
  });

  it('resets the score once pushed to the game score', function() {
    game = new Game();
    frame.roll(2);
    frame.roll(2);
    frame.updateGameScore();
  expect(frame.getScore()).toEqual(0);
  });

  it('will not allow more than 10 points per frame', function() {
    frame.roll(6);
    expect( function(){frame.roll(5)}).toThrow(new Error("10 points max!"))
  });



});
