describe('getChange', function() {

  it('should be defined', function() {
    expect(getChange).toBeDefined();
  });

  it('should return an empty array when passed nothing', function() {
    expect(getChange()).toEqual([]);
  });

  it('should return an empty array when no change is due', function() {
    expect(getChange(1,1)).toEqual([]);
  });

  it('should return [1] when 1 pence is owed', function() {
    expect(getChange(1,2)).toEqual([1]);
  });

  it('should return [2] when cost is 1p and given 3p', function() {
    expect(getChange(1,3)).toEqual([2]);
  });

  it('should return 2 coins when 7p is due, ordered by value - [5,2]', function() {
    expect(getChange(3, 10)).toEqual([5, 2]);
  })

  it('should return the correct change even if it has to repeat the same denomination twice', function() {
    // totalPayable = 486           // £4.86
    // cashPaid     = 600           // £6.00
    // dfference    = 114           // £1.14
    // change       = [100,10,2,2]  // £1, 10p, 2p, 2p
    expect(getChange(486, 600)).toEqual([100, 10, 2, 2]);
  });
});
