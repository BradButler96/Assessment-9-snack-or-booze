const unroll = require("./unroll");

const twoSquare = [
  [1, 2],
  [3, 4]
];

const threeSquare = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const fourSquare = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const fiveSquare = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],

];

const sixSquare = [
  [ 1,  2,  3, 4,   5,  6],
  [ 7,  8,  9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36]
];

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("should test for correct order of values", () => {
    expect(unroll(twoSquare)).toEqual([1, 2, 4, 3])
    expect(unroll(threeSquare)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
    expect(unroll(fourSquare)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
    expect(unroll(fiveSquare)).toEqual([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13])
    expect(unroll(sixSquare)).toEqual([1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35, 34, 33, 32, 31, 25, 19, 13, 7, 8, 9, 10, 11, 17, 23, 29, 28, 27, 26, 20, 14, 15, 16, 22, 21])
  })
});
