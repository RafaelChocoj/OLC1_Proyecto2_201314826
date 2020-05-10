export enum types {
    int,
    decimal,
    double,
    boolean,
    char,
    string
}

export class Tipo{
    type : types;

    /**
     * 
     * @constructor Crea un nuevo tipo con el tipo primitivo indicado en el enum
     * @param type Tipo seleccionado para la variable o funcion
     * 
     */
    constructor(type: types){
        this.type = type;
    }

    toString(){
        if(this.type === types.int){
            return 'int';
        }else if(this.type === types.decimal){
            return 'decimal';
        }else if(this.type === types.double){
            return 'double';
        }else if(this.type === types.boolean){
            return 'boolean';
        }else if(this.type === types.char){
            return 'char';
        }else if(this.type === types.string){
            return 'string';
        }
        
    }
}