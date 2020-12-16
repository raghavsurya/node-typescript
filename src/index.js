"use strict";
exports.__esModule = true;
exports.ArrayLength = exports.ReduceArray = exports.add = void 0;
var bob = "hey";
console.log(bob);
var obj = {
    x: 33,
    y: "Something else"
};
var add = function (x, y) {
    return x + y;
};
exports.add = add;
var ReduceArray = function (_a) {
    var values = _a.values;
    return values.reduce(function (acc, val) {
        return acc + val;
    });
};
exports.ReduceArray = ReduceArray;
var ArrayLength = function (_a) {
    var values = _a.values, index = _a.index;
    return index < values.length ? values[index] : null;
};
exports.ArrayLength = ArrayLength;
console.log(exports.ArrayLength({ values: [1, 2], index: 1 }));
