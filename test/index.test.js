var assert = require("assert");
const { add, ArrayLength, ReduceArray } = require("../src/index.js");

describe("this test is a test", () => {
  describe("some random", () => {
    it("hhh", () => {
      assert.strictEqual([1, 2, 3].indexOf(1), 0);
    });

    it("add function", () => {
      assert.strictEqual(add(7, 8), 15);
    });

    it("ReduceArray", () => {
      assert.strictEqual(ReduceArray({ values: [1, 2, 3, 4, 5] }), 15);
    });

    it("ArrayLength", () => {
      assert.strictEqual(ArrayLength({ values: ["ff", "dd"], index: 1 }), "dd");
    });

    it("ArrayLength for non valid input", () => {
      assert.strictEqual(ArrayLength({ values: ["ff", "dd"], index: 3 }), null);
    });
  });
});
