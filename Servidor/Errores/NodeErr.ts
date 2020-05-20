
export class NodeErr{

    public tipo:string;
    public descripcion:string;
    public idlex:string;
    public linea:number;
    public columna:number;
    public Origen:String;

    constructor(tipo:string,descripcion:string, idlex:string,linea:number,columna:number, Origen:String){
        this.tipo=tipo;
        this.descripcion=descripcion;
        this.idlex=idlex;
        this.linea=linea;
        this.columna=(columna+1);
        this.Origen=Origen;
    }
}