"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types;
(function (types) {
    types[types["int"] = 0] = "int";
    types[types["decimal"] = 1] = "decimal";
    types[types["double"] = 2] = "double";
    types[types["boolean"] = 3] = "boolean";
    types[types["char"] = 4] = "char";
    types[types["String"] = 5] = "String";
    types[types["VOID"] = 6] = "VOID";
})(types = exports.types || (exports.types = {}));
class Tipo {
    constructor(type) {
        this.type = type;
    }
    toString() {
        if (this.type === types.int) {
            return 'int';
        }
        else if (this.type === types.decimal) {
            return 'decimal';
        }
        else if (this.type === types.double) {
            return 'double';
        }
        else if (this.type === types.boolean) {
            return 'boolean';
        }
        else if (this.type === types.char) {
            return 'char';
        }
        else if (this.type === types.String) {
            return 'String';
        }
    }
}
exports.Tipo = Tipo;
