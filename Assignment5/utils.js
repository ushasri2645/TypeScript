"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var result2 = '';
var Utils;
(function (Utils) {
    function PrintObjects(objs) {
        for (var property in objs) {
            if (typeof objs[property] == 'object') {
                result2 += "".concat(PrintObjects(objs[property]), ", ");
            }
            else {
                result2 += "".concat(property, " : ").concat(objs[property], ", ");
            }
        }
        result2 = result2.slice(0, -2);
        return result2;
    }
    Utils.PrintObjects = PrintObjects;
})(Utils || (exports.Utils = Utils = {}));

