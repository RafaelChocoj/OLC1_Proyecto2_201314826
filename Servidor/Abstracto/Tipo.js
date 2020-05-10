"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types;
(function (types) {
    types[types["int"] = 0] = "int";
    types[types["decimal"] = 1] = "decimal";
    types[types["double"] = 2] = "double";
    types[types["boolean"] = 3] = "boolean";
    types[types["char"] = 4] = "char";
    types[types["string"] = 5] = "string";
})(types = exports.types || (exports.types = {}));
class Tipo {
    /**
     *
     * @constructor Crea un nuevo tipo con el tipo primitivo indicado en el enum
     * @param type Tipo seleccionado para la variable o funcion
     *
     */
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
        else if (this.type === types.string) {
            return 'string';
        }
    }
}
exports.Tipo = Tipo;
