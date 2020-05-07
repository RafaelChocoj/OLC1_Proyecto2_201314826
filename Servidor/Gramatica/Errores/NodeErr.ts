
export class NodoErr{

    public tipo:string;
    public descripcion:string;
    public linea:number;
    public columna:number;

    constructor(tipo:string,descripcion:string,linea:number,columna:number){
        this.tipo=tipo;
        this.descripcion=descripcion;
        this.linea=(linea+1);
        this.columna=(columna+1);
    }
}