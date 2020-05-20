"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeErr {
    constructor(tipo, descripcion, idlex, linea, columna, Origen) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.idlex = idlex;
        this.linea = linea;
        this.columna = (columna + 1);
        this.Origen = Origen;
    }
}
exports.NodeErr = NodeErr;
