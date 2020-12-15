var assert = require("assert");
const { add } = require("../src/index.js");

describe("this test is a test", () => {
  describe("some random", () => {
    it("hhh", () => {
      assert.strictEqual([1, 2, 3].indexOf(1), 0);
    });

    it("add function from", () => {
      assert.strictEqual(add(7, 8), 15);
    });
  });
});
