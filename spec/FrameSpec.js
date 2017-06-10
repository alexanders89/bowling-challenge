describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('can score a single roll', function() {
    frame.roll(3,0)
    expect(frame.getScore()).toEqual(3);
  });
});
