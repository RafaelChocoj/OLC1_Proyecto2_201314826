import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as gramatica from "./Gramatica/gramatica";
const analizador = require('./Gramatica/gramatica.js');
import { NodeErr } from './Errores/NodeErr';

var app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

let lex_err_final: Array<NodeErr>;
let lex_err: Array<NodeErr>;

app.post('/AnalizFile/', function (req, res) {

    lex_err_final = new Array<NodeErr>()

    let copias_archivos: Array<String>;
    copias_archivos = req.body.text;

    console.log("00000000000000000000000000");
    //console.log(req.body.text);
    console.log(copias_archivos);
    //console.log("22222222");
    var entrada=req.body.text[0];
    //console.log(entrada);
    console.log("00000000000000000000000000");

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
    ////////console.log(resul_fin);
 
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

        //for (let i:Number = 0; i < tree.arbol_ast.length; i++)
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

        /**********************reiniciando*errores***********************************/
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
  console.log("---: " + entrada)
  let resul_fin22: Array<String> 
  resul_fin22 = new Array<String>()

  try {
    const tree_cop = gramatica.parse(entrada);    
    console.log(tree_cop.instructions);



      for (let i = 0; i < lex_err.length; i++)
      {
        lex_err[i].Origen = "Pestania (" + numpes + ")";
        lex_err_final.push(lex_err[i]);
      }

      /*for (let i = 0; i < tree.lis_err.length; i++)
      {
        lex_err[i].Origen = "Pestania (" + numpes + ")";
        lex_err_final.push(tree.lis_err[i]);
      }*/

      /********reiniciando*errores******/
      while(lex_err.length>0){
        lex_err.pop();
      }   

    return resul_fin22;
  } catch (e) {
      return ["Error en compilacion de Entrada: "+ e.toString()];
  }
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
