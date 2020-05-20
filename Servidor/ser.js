"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const gramatica = require("./Gramatica/gramatica");
const analizador = require('./Gramatica/gramatica.js');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
let lex_err_final;
let lex_err;
/*original*/
let principal;
/*listado de copias*/
let lista_copias;
app.post('/AnalizFile/', function (req, res) {
    lex_err_final = new Array();
    lista_copias = new Array();
    let copias_archivos;
    copias_archivos = req.body.text;
    console.log("00000000000000000000000000");
    //////////////////console.log(copias_archivos);
    //console.log("22222222");
    var entrada = req.body.text[0];
    //console.log(entrada);
    //////////console.log("00000000000000000000000000");
    /*solo original*/
    let resul_fin;
    resul_fin = parser(entrada);
    /*verificando copias*/
    if (copias_archivos.length > 1) {
        for (let i = 1; i < copias_archivos.length; i++) {
            var entrada_tem = copias_archivos[i];
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
    Comparando_copias(principal, lista_copias);
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
function parser(entrada) {
    console.log("cad en: " + entrada);
    let resul_fin;
    resul_fin = new Array();
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
        tree.instructions.map((m) => {
            const res = m.execute(tree, false, "NA", false);
        });
        console.log("-------------------");
        //console.log(tree.arbol_ast);
        let ast_carpetas;
        ast_carpetas = "";
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</li>");
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</div>");
        for (let i = 0; i < tree.arbol_ast.length; i++) {
            ast_carpetas = ast_carpetas + tree.arbol_ast[i] + "\n";
            console.log(tree.arbol_ast[i]);
        }
        console.log("-------------------");
        ///errores
        //console.log(gramatica.LisErrores.length);
        //analizador.clear_lista_erroes();
        //let lex_err =  gramatica.get_lista_erroes();
        lex_err = gramatica.get_lista_erroes();
        //let lex_err =  analizador.get_lista_erroes();
        for (let i = 0; i < lex_err.length; i++) {
            lex_err[i].Origen = "Principal";
            lex_err_final.push(lex_err[i]);
        }
        for (let i = 0; i < tree.lis_err.length; i++) {
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
        while (lex_err.length > 0) {
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
    }
    catch (e) {
        return ["Error en compilacion de Entrada: " + e.toString()];
    }
}
function parser_copias(entrada, numpes) {
    //console.log("copias!!!!!!!!!!");
    /////console.log("---: " + entrada)
    let resul_fin22;
    resul_fin22 = new Array();
    try {
        const tree_cop = gramatica.parse(entrada);
        console.log(tree_cop.instructions);
        lista_copias.push(tree_cop.instructions);
        tree_cop.instructions.map((m) => {
            const res = m.execute(tree_cop, false, "NA", false);
        });
        for (let i = 0; i < lex_err.length; i++) {
            lex_err[i].Origen = "Pestania (" + numpes + ")";
            lex_err_final.push(lex_err[i]);
        }
        for (let i = 0; i < tree_cop.lis_err.length; i++) {
            tree_cop.lis_err[i].Origen = "Pestania (" + numpes + ")";
            lex_err_final.push(tree_cop.lis_err[i]);
        }
        /********reiniciando*errores******/
        while (lex_err.length > 0) {
            lex_err.pop();
        }
        return resul_fin22;
    }
    catch (e) {
        return ["Error en compilacion de Entrada: " + e.toString()];
    }
}
function Comparando_copias(ar_principal, lis_copias) {
    console.log("11111111111111111111 verifiando origianl");
    console.log(ar_principal);
    console.log("2222222");
    //console.log(lis_copias);
    /*verificando copia de clase*/
    for (let i = 0; i < lis_copias.length; i++) {
        console.log(lis_copias[i]);
        if (ar_principal[0].identificador == lis_copias[i][0].identificador) {
            console.log("es copia :v");
        }
    }
}
function ErrLex(lex_err) {
    //console.log(lex_err);
    let Contenido_html;
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
    let Cad_tokens = "";
    let tempo_tokens;
    for (let i = 0; i < lex_err.length; i++) {
        tempo_tokens = "";
        tempo_tokens = "<tr>" +
            "<td><strong>" + (i + 1) +
            "</strong></td>" +
            "<td>" + lex_err[i].idlex +
            "</td>" +
            "<td>" + lex_err[i].descripcion +
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
