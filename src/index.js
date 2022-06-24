"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function f() { return 'hello'; }
console.log(f());
var crypto = require("crypto");
var block = /** @class */ (function () {
    function block(prevhash, height, data) {
        this.hash = block.cal(prevhash, height, data);
    }
    block.cal = function (prevhash, height, data) {
        var str = "".concat(prevhash).concat(height).concat(data);
        return crypto.createHash('sha256').update(str).digest("hex");
    };
    return block;
}());
var blockchain = /** @class */ (function () {
    function blockchain() {
        this.blocks = [];
    }
    blockchain.prototype.getprevhash = function () {
        if (this.blocks.length === 0) {
            return "";
        }
        return this.blocks[this.blocks.length - 1].hash;
    };
    blockchain.prototype.addblock = function (data) {
        var termblock = new block(this.getprevhash(), this.blocks.length, data);
        this.blocks.push(termblock);
    };
    blockchain.prototype.getchain = function () {
        return __spreadArray([], this.blocks, true);
    };
    return blockchain;
}());
var newChain = new blockchain;
newChain.addblock('first');
newChain.addblock('second');
console.log(newChain.getchain);
