"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LisErrores extends Array {
    constructor() {
        super();
    }
    static add(new_error) {
        console.log(new_error);
        this.prototype.push(new_error);
    }
}
exports.LisErrores = LisErrores;
