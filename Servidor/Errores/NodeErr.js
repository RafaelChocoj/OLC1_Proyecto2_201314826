"use strict";
exports.__esModule = true;
var NodeErr = /** @class */ (function () {
    function NodeErr(tipo, descripcion, linea, columna) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = (columna + 1);
    }
    return NodeErr;
}());
exports.NodeErr = NodeErr;
