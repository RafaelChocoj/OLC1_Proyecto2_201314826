import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as gramatica from "./Gramatica/gramatica";
const analizador = require('./Gramatica/gramatica.js');

import { NodeErr } from './Errores/NodeErr';
import { Node } from "./Abstracto/Node"
import {types, Tipo } from "./Abstracto/Tipo";

import { Clase } from "./ClasesF/Clase";
import {Metodo}  from "./ClasesF/Metodo";
import {Funcion}  from "./ClasesF/Funcion";

var app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

let lex_err_final: Array<NodeErr>;
let lex_err: Array<NodeErr>;

/*original*/
let principal: Array<Node>;
/*listado de copias*/
let lista_copias;

/*reporte de Clases copias*/
//let clase_copias:Array<String>;
let html_clasecopia:String;
let html_clasecopia_tempo:String;

let metodos_or:number = 0;
let funcion_or:number = 0;
let metodos_cop:number = 0;
let funcion_cop:number = 0;

/*reporte de FUNCIONES copias*/
let html_funcionescopia:String;
let html_funcionescopia_tempo:String;

app.post('/AnalizFile/', function (req, res) {

    lex_err_final = new Array<NodeErr>();
    lista_copias = new Array();

    /*reporte de Clases copias*/
    html_clasecopia = "";
    html_funcionescopia = "";
    ini_ClaseCopia();

    let copias_archivos: Array<String>;
    copias_archivos = req.body.text;

    console.log("00000000000000000000000000");
    //////////////////console.log(copias_archivos);
    //console.log("22222222");
    var entrada=req.body.text[0];
    //console.log(entrada);
    //////////console.log("00000000000000000000000000");

    /*solo original*/
    let resul_fin: Array<String> 
    resul_fin = parser(entrada);

    /*verificando copias*/
    if (copias_archivos.length > 1 ){
      for (let i = 1; i < copias_archivos.length; i++)
      {
        var entrada_tem:String = copias_archivos[i];
        parser_copias(entrada_tem, i);
      }
    }

    let html_err = ErrLex(lex_err_final);
    console.log("********");
    console.log(lex_err_final);

    //Errores.clear();
    
    //res.send(resultado.toString());

    

    //resul_fin.push("fila1");
    //resul_fin.push("fila2");

    resul_fin.push(html_err);
    
    Comparando_copias(principal, lista_copias);

    html_clasecopia = html_clasecopia + "</table>";
    resul_fin.push(html_clasecopia);
    //console.log(html_clasecopia);


    
 
    res.send(resul_fin);
});

var server = app.listen(8080, function () {
    console.log('Servidor escuchando en puerto 8080...');
});

/*function parser(texto:string) {
    try {
        return gramatica.parse(texto);
    } catch (e) {
        return "Error en compilacion de Entrada: "+ e.toString();
    }
}*/

function parser(entrada:string) {
    console.log("cad en: " + entrada)
    let resul_fin: Array<String> 
    resul_fin = new Array<String>()
    try {

        const tree = gramatica.parse(entrada);    
        //const tree = analizador.parse(entrada);

        //analizador.clear_lista_erroes();

        //return gramatica.parse(texto);
        //const res = tree.execute(tree);
        
        //console.log(tree);
        console.log(tree.instructions);
        principal = tree.instructions;
        
        //tree.instructions.map((m: any) => {
        tree.instructions.map((m: any) => {
        const res = m.execute(tree, false, "NA", false);

        });

        console.log("-------------------");
        //console.log(tree.arbol_ast);
        let ast_carpetas:String;
        ast_carpetas = "";

        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</li>");
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</div>");

        for (let i = 0; i < tree.arbol_ast.length; i++)
        {
            ast_carpetas = ast_carpetas + tree.arbol_ast[i] + "\n";
            console.log(tree.arbol_ast[i]);
        }
        console.log("-------------------");
        ///errores

        //console.log(gramatica.LisErrores.length);

        //analizador.clear_lista_erroes();
        //let lex_err =  gramatica.get_lista_erroes();
        lex_err =  gramatica.get_lista_erroes();
        //let lex_err =  analizador.get_lista_erroes();
        
        for (let i = 0; i < lex_err.length; i++)
        {
          lex_err[i].Origen = "Principal";
          lex_err_final.push(lex_err[i]);
        }

        for (let i = 0; i < tree.lis_err.length; i++)
        {
          tree.lis_err[i].Origen = "Principal";
          lex_err_final.push(tree.lis_err[i]);
        }
        /*for (let i = 0; i < lex_err.length; i++)
        {
          tree.lis_err.push(lex_err[i]);
        }*/

        //let html_err = ErrLex(lex_err);
        //console.log("********");
        //console.log(lex_err);

        /************reiniciando*errores******************/
        while(lex_err.length>0){
          lex_err.pop();
        }      

        //////
        //return null;
        /*if (lex_err.length > 0){
          resul_fin.push("SE");
        }*/
        

        resul_fin.push(ast_carpetas);
        //resul_fin.push(html_err);
        

        return resul_fin;
    } catch (e) {
        return ["Error en compilacion de Entrada: "+ e.toString()];
    }
}


function parser_copias(entrada:String, numpes:Number) {
  //console.log("copias!!!!!!!!!!");
  /////console.log("---: " + entrada)
  let resul_fin22: Array<String> 
  resul_fin22 = new Array<String>()

  try {
    const tree_cop = gramatica.parse(entrada);    
    console.log(tree_cop.instructions);
    lista_copias.push(tree_cop.instructions);

    tree_cop.instructions.map((m: any) => {
      const res = m.execute(tree_cop, false, "NA", false);
    });

      for (let i = 0; i < lex_err.length; i++)
      {
        lex_err[i].Origen = "Pestania (" + numpes + ")";
        lex_err_final.push(lex_err[i]);
      }

      for (let i = 0; i < tree_cop.lis_err.length; i++)
      {
        tree_cop.lis_err[i].Origen = "Pestania (" + numpes + ")";
        lex_err_final.push(tree_cop.lis_err[i]);
      }

      /********reiniciando*errores******/
      while(lex_err.length>0){
        lex_err.pop();
      }   

    return resul_fin22;
  } catch (e) {
      return ["Error en compilacion de Entrada: "+ e.toString()];
  }
}

function Comparando_copias(ar_principal: Array<Clase>, lis_copias:Array<Clase>) {
  console.log("11111111111111111111 verifiando origianl");
  console.log(ar_principal);
  console.log("2222222");
  //console.log(lis_copias);

  /*verificando copia de clase CLASE*/
  for (let i = 0; i < lis_copias.length; i++)
  {
    html_clasecopia_tempo = "";

    let clas_tempo:Clase = lis_copias[i];
    console.log(clas_tempo);
    if( ar_principal[0].identificador == clas_tempo[0].identificador ){
      console.log("*********************es copia :v ** pes " + (i +1)); //mismo nombre de clase
      
      /*verificando si tiene la misma cantidad*/
      metodos_or = 0;
      funcion_or = 0;
      metodos_cop = 0;
      funcion_cop = 0;

      let igual_tam_clase:Boolean;
      igual_tam_clase = Num_MetFun(ar_principal[0].Instruc_Clase, clas_tempo[0].Instruc_Clase);
      /*verificando si son iguales*/
      let is_copia:Boolean;
      is_copia = Recorriendo_MetFun(ar_principal[0].Instruc_Clase, clas_tempo[0].Instruc_Clase, ar_principal[0].identificador, i);

      /*para clase copia*/
      //if (is_copia == true){
      if (is_copia == true && igual_tam_clase == true) {
        console.log("fin fin fin fin fin fin fin  COPIA pes " + (i +1));
        ClaseCopia_rows(ar_principal[0].identificador, i);
        html_clasecopia = html_clasecopia + html_clasecopia_tempo;
      }
      else {
        html_clasecopia_tempo = "";
        console.log("no no no no no fin fin  COPIA pes " + (i +1));
      }


    }
  }
}

function Num_MetFun(ListInstruc_ori: Array<Node>, ListInstruc_cop: Array<Node>) {

  metodos_or = 0;
  funcion_or = 0;
  metodos_cop = 0;
  funcion_cop = 0;

  for (let i = 0; i < ListInstruc_ori.length; i++) {
    const res = ListInstruc_ori[i];
    if(res instanceof Metodo){
      metodos_or = metodos_or + 1;
    } else if(res instanceof Funcion){
      funcion_or = funcion_or + 1;
    }
  }

  for (let i = 0; i < ListInstruc_cop.length; i++) {
    const res_cop = ListInstruc_cop[i];
    if(res_cop instanceof Metodo){
      metodos_cop = metodos_cop + 1;
    } else if(res_cop instanceof Funcion){
      funcion_cop = funcion_cop + 1;
    }
  }

  console.log("123 123 123 123 123 123 123 132 132 123");
  console.log(ListInstruc_ori);
  console.log(ListInstruc_cop);
  console.log("original : M-" + metodos_or + " F-"+funcion_or);
  console.log("copia : M-" + metodos_cop + " F-"+funcion_cop);



  if (metodos_or == metodos_cop && funcion_or == funcion_cop){
    return true;
  }
  else {
    return false;
  }


}
  

function Recorriendo_MetFun(ListInstruc_ori: Array<Node>, ListInstruc_cop: Array<Node>, nameclass:String, pesta:Number) {

  /*FUNCIONES Y EVENTOS DE LA CLASE*/
  let Is_Copy:Boolean = false;
  //let lis_cop:Array<Boolean> = new Array<Boolean>();
  for (let i = 0; i < ListInstruc_ori.length; i++) {
    /*lista de instrucciones*/
    const res = ListInstruc_ori[i];
    if(res instanceof Metodo || res instanceof Funcion)
    {
    //if(res instanceof Metodo ){
      Is_Copy = false;
      /*METODO*/
      if(res instanceof Metodo){
          console.log("55555555555555es metodo");
          /*verificando si tiene el mismo metodo en las copias*/
          for (let c = 0; c < ListInstruc_cop.length; c++) {
            const copy = ListInstruc_cop[c];
            if(copy instanceof Metodo){
              if (res.identificador == copy.identificador)
              {
                console.log("metodo igual " + res.identificador);
                /*html_clasecopia_tempo = html_clasecopia_tempo +  "<tr>" +
                "<td>" + pesta +
                "</td>" +

                "<td>" + nameclass +
                "</td>" +

                "<td> MET: " + copy.identificador +
                "</td>" +
                "</tr>";*/
                Is_Copy = true;
                //html_clasecopia
              }
            }
          }
          

      /*FUNCION*/
      }else if( res instanceof Funcion){
        console.log("55555555555555es funcuin ");
        /*verificando si tiene la misma guncion en las copias*/
        for (let c = 0; c < ListInstruc_cop.length; c++) {
          const copy_fun = ListInstruc_cop[c];
          if(copy_fun instanceof Funcion){
            console.log("or id fun " + res.identificador + "  or  tipo fun " + res.type.toString());
            console.log("copy id fun " + copy_fun.identificador + "  copy  tipo fun " + copy_fun.type.toString());
            if (res.identificador == copy_fun.identificador && res.type.toString() == copy_fun.type.toString())
            {
              console.log("funcion igual " + res.identificador);
              /*html_clasecopia_tempo = html_clasecopia_tempo +  "<tr>" +
              "<td>" + pesta +
              "</td>" +

              "<td>" + nameclass +
              "</td>" +

              "<td> FUN: " + copy_fun.identificador +
              "</td>" +
              "</tr>";*/
              Is_Copy = true;
            }
          }
        }


      }

      if (Is_Copy == false) {
        return Is_Copy;
      }

    }

  }
  return Is_Copy;
}

/*function Es_funMetCop(ListInstruc_ori: Array<Node>, ListInstruc_cop: Array<Node>) {
}*/

function ClaseCopia_rows(nameclass:String, pesta:number ) {

  html_clasecopia_tempo = html_clasecopia_tempo +  "<tr>" +
  "<td> Pestania(" + (pesta+1) + ")"+
  "</td>" +

  "<td>" + nameclass +
  "</td>" +

  "<td> " + metodos_or +
  "</td>" +

  "<td> " + funcion_or +
  "</td>" +

  "</tr>";

}

function ini_ClaseCopia() {

  /*html_clasecopia = "<h1 align='center'>Clases Copias</h1></br>" +
  "<table cellpadding='10' border = '1' align='center'>" +
  "<tr>" +

  "<td><strong>Origen" +
  "</strong></td>" +

  "<td><strong>Nombre Clase" +
  "</strong></td>" +

  "<td><strong>Nombre Metodo/Funcion" +
  "</strong></td>" +
  "</tr>";*/

  html_clasecopia = "<h1 align='center'>Clases Copias</h1></br>" +
  "<table cellpadding='10' border = '1' align='center'>" +
  "<tr>" +

  "<td><strong>Origen" +
  "</strong></td>" +

  "<td><strong>Nombre Clase" +
  "</strong></td>" +

  "<td><strong>No. Metodo" +
  "</strong></td>" +

  "<td><strong>No. Funcion" +
  "</strong></td>" +

  "</tr>";

}

function ErrLex(lex_err:Array<NodeErr>) {
  //console.log(lex_err);
  let Contenido_html:String;
  Contenido_html = "";
            Contenido_html = "<html>" +
            "<body>" +
            "<h1 align='center'>ERRORES ENCONTRADOS</h1></br>" +
            "<table cellpadding='10' border = '1' align='center'>" +
            "<tr>" +
            "<td><strong>No." +
            "</strong></td>" +

            "<td><strong>Error" +
            "</strong></td>" +

            "<td><strong>Descripción" +
            "</strong></td>" +

            "<td><strong>Linea" +
            "</strong></td>" +

            "<td><strong>Columna" +
            "</strong></td>" +

            "<td><strong>Tipo" +
            "</strong></td>" +

            "<td><strong>Origen" +
            "</strong></td>" +

            "</tr>";

            let Cad_tokens:String = "";
            let tempo_tokens:String;

            for (let i= 0; i < lex_err.length ; i++)
            {
                tempo_tokens = "";
                tempo_tokens = "<tr>" +
                "<td><strong>" + (i + 1) +
                "</strong></td>" +

                "<td>" + lex_err[i].idlex +
                "</td>" +

                "<td>" + lex_err[i].descripcion+
                "</td>" +

                "<td>" + lex_err[i].linea +
                "</td>" +

                "<td>" + lex_err[i].columna +
                "</td>" +

                "<td>" + lex_err[i].tipo +
                "</td>" +

                "<td>" + lex_err[i].Origen +
                "</td>" +

                "</tr>";
                Cad_tokens = Cad_tokens + tempo_tokens;

            }
            Contenido_html = Contenido_html + Cad_tokens +
            "</table>" +
            "</body>" +
            "</html>";

          return Contenido_html;

}