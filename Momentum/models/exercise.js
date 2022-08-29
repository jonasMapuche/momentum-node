"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercise = void 0;
var Exercise = /** @class */ (function () {
    function Exercise(chain, list, resistance) {
        this._chain = chain;
        this._list = list;
        this._resistance = resistance;
    }
    Exercise.prototype.getChain = function () {
        return this._chain;
    };
    Exercise.prototype.getList = function () {
        return this._list;
    };
    Exercise.prototype.getResistence = function () {
        return this._resistance;
    };
    return Exercise;
}());
exports.exercise = Exercise;
//# sourceMappingURL=exercise.js.map