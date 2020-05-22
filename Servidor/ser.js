"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const gramatica = require("./Gramatica/gramatica");
const analizador = require('./Gramatica/gramatica.js');
const Metodo_1 = require("./ClasesF/Metodo");
const Funcion_1 = require("./ClasesF/Funcion");
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
/*reporte de Clases copias*/
//let clase_copias:Array<String>;
let html_clasecopia;
let html_clasecopia_tempo;
let metodos_or = 0;
let funcion_or = 0;
let metodos_cop = 0;
let funcion_cop = 0;
/*reporte de FUNCIONES copias*/
let html_funcionescopia;
let html_funcionescopia_tempo;
/*reporte de VARIABLES copias*/
let html_variablescopia;
let html_variablescopia_tempo;
app.post('/AnalizFile/', function (req, res) {
    lex_err_final = new Array();
    lista_copias = new Array();
    /*reporte de Clases copias*/
    html_clasecopia = "";
    html_funcionescopia = "";
    html_variablescopia = "";
    ini_ClaseCopia();
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
    //////////////console.log("********");
    //////////////console.log(lex_err_final);
    //Errores.clear();
    //res.send(resultado.toString());
    resul_fin.push(html_err);
    Comparando_copias(principal, lista_copias);
    html_clasecopia = html_clasecopia + "</table>";
    html_funcionescopia = html_funcionescopia + "</table>";
    html_variablescopia = html_variablescopia + "</table>";
    resul_fin.push(html_clasecopia + html_funcionescopia + html_variablescopia);
    //console.log(html_clasecopia);
    /*verifica si tiene errores*/
    if (lex_err_final.length > 0) {
        resul_fin.push("Error!!, Se encontraron algunos errores\nen el analisis de la entrada");
    }
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
    //////////////////////////console.log("cad en: " + entrada)
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
        ////////console.log("-------------------");
        //console.log(tree.arbol_ast);
        let ast_carpetas;
        ast_carpetas = "";
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</li>");
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</div>");
        for (let i = 0; i < tree.arbol_ast.length; i++) {
            ast_carpetas = ast_carpetas + tree.arbol_ast[i] + "\n";
            ///////////////console.log(tree.arbol_ast[i]);
        }
        ///////////console.log("-------------------");
        ///errores
        //console.log(gramatica.LisErrores.length);
        //analizador.clear_lista_erroes();
        //let lex_err =  gramatica.get_lista_erroes();
        lex_err = gramatica.get_lista_erroes();
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        console.log(lex_err);
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
    //console.log(lis_copias);
    /*verificando copia de clase CLASE*/
    for (let i = 0; i < lis_copias.length; i++) {
        html_clasecopia_tempo = "";
        html_funcionescopia_tempo = "";
        let clas_tempo = lis_copias[i];
        console.log(clas_tempo);
        if (ar_principal[0].identificador == clas_tempo[0].identificador) {
            console.log("*********************es copia :v ** pes " + (i + 1)); //mismo nombre de clase
            /*verificando si tiene la misma cantidad*/
            metodos_or = 0;
            funcion_or = 0;
            metodos_cop = 0;
            funcion_cop = 0;
            let igual_tam_clase;
            igual_tam_clase = Num_MetFun(ar_principal[0].Instruc_Clase, clas_tempo[0].Instruc_Clase);
            /*verificando si son iguales*/
            let is_copia;
            is_copia = Recorriendo_MetFun(ar_principal[0].Instruc_Clase, clas_tempo[0].Instruc_Clase, ar_principal[0].identificador, i);
            /*para clase copia*/
            //if (is_copia == true){
            if (is_copia == true && igual_tam_clase == true) {
                console.log("fin fin fin fin fin fin fin  COPIA pes " + (i + 1));
                ClaseCopia_rows(ar_principal[0].identificador, i);
                html_clasecopia = html_clasecopia + html_clasecopia_tempo;
            }
            else {
                html_clasecopia_tempo = "";
                console.log("no no no no no fin fin  COPIA pes " + (i + 1));
            }
            /*verificando funciones copias*/
            let is_funcopia;
            is_funcopia = Copia_FUNCIONES(ar_principal[0].Instruc_Clase, clas_tempo[0].Instruc_Clase, ar_principal[0].identificador, i);
        }
    }
}
function Num_MetFun(ListInstruc_ori, ListInstruc_cop) {
    metodos_or = 0;
    funcion_or = 0;
    metodos_cop = 0;
    funcion_cop = 0;
    for (let i = 0; i < ListInstruc_ori.length; i++) {
        const res = ListInstruc_ori[i];
        if (res instanceof Metodo_1.Metodo) {
            metodos_or = metodos_or + 1;
        }
        else if (res instanceof Funcion_1.Funcion) {
            funcion_or = funcion_or + 1;
        }
    }
    for (let i = 0; i < ListInstruc_cop.length; i++) {
        const res_cop = ListInstruc_cop[i];
        if (res_cop instanceof Metodo_1.Metodo) {
            metodos_cop = metodos_cop + 1;
        }
        else if (res_cop instanceof Funcion_1.Funcion) {
            funcion_cop = funcion_cop + 1;
        }
    }
    ///////console.log("123 123 123 123 123 123 123 132 132 123");
    ///////console.log(ListInstruc_ori);
    ///////console.log(ListInstruc_cop);
    //console.log("original : M-" + metodos_or + " F-"+funcion_or);
    //console.log("copia : M-" + metodos_cop + " F-"+funcion_cop);
    if (metodos_or == metodos_cop && funcion_or == funcion_cop) {
        return true;
    }
    else {
        return false;
    }
}
function Recorriendo_MetFun(ListInstruc_ori, ListInstruc_cop, nameclass, pesta) {
    /*FUNCIONES Y EVENTOS DE LA CLASE*/
    let Is_Copy = false;
    //let lis_cop:Array<Boolean> = new Array<Boolean>();
    for (let i = 0; i < ListInstruc_ori.length; i++) {
        /*lista de instrucciones*/
        const res = ListInstruc_ori[i];
        if (res instanceof Metodo_1.Metodo || res instanceof Funcion_1.Funcion) {
            //if(res instanceof Metodo ){
            Is_Copy = false;
            /*METODO*/
            if (res instanceof Metodo_1.Metodo) {
                console.log("55555555555555es metodo");
                /*verificando si tiene el mismo metodo en las copias*/
                for (let c = 0; c < ListInstruc_cop.length; c++) {
                    const copy = ListInstruc_cop[c];
                    if (copy instanceof Metodo_1.Metodo) {
                        if (res.identificador == copy.identificador) {
                            //////console.log("metodo igual " + res.identificador);
                            Is_Copy = true;
                            //html_clasecopia
                        }
                    }
                }
                /*FUNCION*/
            }
            else if (res instanceof Funcion_1.Funcion) {
                console.log("55555555555555es funcuin ");
                /*verificando si tiene la misma guncion en las copias*/
                for (let c = 0; c < ListInstruc_cop.length; c++) {
                    const copy_fun = ListInstruc_cop[c];
                    if (copy_fun instanceof Funcion_1.Funcion) {
                        //console.log("or id fun " + res.identificador + "  or  tipo fun " + res.type.toString());
                        //console.log("copy id fun " + copy_fun.identificador + "  copy  tipo fun " + copy_fun.type.toString());
                        if (res.identificador == copy_fun.identificador && res.type.toString() == copy_fun.type.toString()) {
                            //////console.log(res.ListParametros);
                            //////console.log("funcion igual " + res.identificador);
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
function Copias_VARIABLES(Lvar_ori, Lvar_cop, nameclass, pesta, name_fun) {
    for (let i = 0; i < Lvar_ori.length; i++) {
        const var_or = Lvar_ori[i];
        let tipo_or = var_or.type.toString();
        for (let lv = 0; lv < var_or.identificador.length; lv++) {
            /*verifica si tiene el tipo e indentificador es el mismo*/
            // id original = var_or.identificador[lv]
            /*declaracion copias*/
            for (let c = 0; c < Lvar_cop.length; c++) {
                const var_cop = Lvar_cop[c];
                let tipo_cop = var_cop.type.toString();
                for (let vco = 0; vco < var_cop.identificador.length; vco++) {
                    // id codia = var_cop.identificador[vco]
                    /*SI LA VARIABLE ES IGUAL*/
                    if (var_or.identificador[lv] == var_cop.identificador[vco] &&
                        tipo_or == tipo_cop) {
                        ///////console.log("igual variable igual variable igual variable igual variable");
                        ///////console.log(var_or.identificador[lv] +"=="+ var_cop.identificador[vco] + ", "+ tipo_or+ "==" +tipo_cop);
                        html_variablescopia_tempo = html_variablescopia_tempo + "<tr>" +
                            "<td> Pestania(" + (pesta + 1) + ")" +
                            "</td>" +
                            "<td>" + tipo_cop +
                            "</td>" +
                            "<td>" + var_or.identificador[lv] +
                            "</td>" +
                            "<td>" + name_fun +
                            "</td>" +
                            "<td>" + nameclass +
                            "</td>" +
                            "</tr>";
                    }
                }
            }
            /*fin for original*/
        }
    }
}
function Copia_FUNCIONES(ListInstruc_ori, ListInstruc_cop, nameclass, pesta) {
    /*FUNCIONES Y EVENTOS DE LA CLASE*/
    let Is_Copy = false;
    for (let i = 0; i < ListInstruc_ori.length; i++) {
        /*lista de instrucciones*/
        const res = ListInstruc_ori[i];
        if (res instanceof Metodo_1.Metodo || res instanceof Funcion_1.Funcion) {
            Is_Copy = false;
            /*METODO*/
            if (res instanceof Metodo_1.Metodo) {
                console.log("5---par-------es metodo");
                /*verificando si tiene el mismo metodo en las copias*/
                for (let c = 0; c < ListInstruc_cop.length; c++) {
                    const copy = ListInstruc_cop[c];
                    if (copy instanceof Metodo_1.Metodo) {
                        /*verificando el los parametros*/
                        console.log("aaaaa met aaaaaaaaaaaaaaaaaaaaaaaa");
                        //////console.log(res.ListParametros);
                        //////console.log(copy.ListParametros);
                        /*el mismo tamaño de parametros*/
                        if (res.ListParametros.length == copy.ListParametros.length) {
                            /*verificando tipo y nombre de parametros*/
                            let par_igual = false;
                            let row_parametro = new Array();
                            for (let par = 0; par < res.ListParametros.length; par++) {
                                if (res.ListParametros[par].type.toString() == copy.ListParametros[par].type.toString() /*&&
                                  res.ListParametros[par].identificador ==  copy.ListParametros[par].identificador*/) {
                                    par_igual = true;
                                    console.log(res.ListParametros[par].type.toString() + "==" + copy.ListParametros[par].type.toString());
                                    row_parametro.push(copy.ListParametros[par].type.toString() + " " + copy.ListParametros[par].identificador);
                                }
                                else {
                                    par_igual = false;
                                    par = res.ListParametros.length;
                                }
                            }
                            if (res.ListParametros.length == 0) {
                                par_igual = true;
                            }
                            if (par_igual == true) {
                                console.log("parametro igual " + res.identificador);
                                html_funcionescopia_tempo = html_funcionescopia_tempo + "<tr>" +
                                    "<td> Pestania(" + (pesta + 1) + ")" +
                                    "</td>" +
                                    "<td> void" +
                                    "</td>" +
                                    "<td>" + res.identificador +
                                    "</td>" +
                                    "<td>" + copy.identificador +
                                    "</td>" +
                                    "<td>" + row_parametro +
                                    "</td>" +
                                    "<td>" + nameclass +
                                    "</td>" +
                                    "</tr>";
                                Is_Copy = true;
                                /*verifianco las variables*/
                                /////console.log("aaaaa met instrucciones del met original");
                                /////console.log(res.ListAllVar);
                                /////console.log("aaaaa met instrucciones del met copia");
                                /////console.log(copy.ListAllVar);
                                Copias_VARIABLES(res.ListAllVar, copy.ListAllVar, nameclass, pesta, copy.identificador);
                            }
                        }
                        /*fin met*/
                    }
                }
                /*FUNCION*/
            }
            else if (res instanceof Funcion_1.Funcion) {
                console.log("----- es funcuin ");
                /*verificando si tiene la misma guncion en las copias*/
                for (let c = 0; c < ListInstruc_cop.length; c++) {
                    const copy_fun = ListInstruc_cop[c];
                    if (copy_fun instanceof Funcion_1.Funcion) {
                        /*verificando el los parametros*/
                        console.log("aaaaa fun aaaaaaaaaaaaaaaaaaaaaaaa");
                        //console.log(res.ListParametros);
                        //console.log(copy_fun.ListParametros);
                        /*el mismo tamaño de parametros y el mismo tipo*/
                        console.log("1111 res.ListParametros.length:  " + res.ListParametros.length);
                        if (res.ListParametros.length == copy_fun.ListParametros.length &&
                            res.type.toString() == copy_fun.type.toString()) {
                            /*verificando tipo y nombre de parametros*/
                            let par_igual = false;
                            let row_parametro = new Array();
                            for (let par = 0; par < res.ListParametros.length; par++) {
                                if (res.ListParametros[par].type.toString() == copy_fun.ListParametros[par].type.toString() /* &&
                                  res.ListParametros[par].identificador ==  copy_fun.ListParametros[par].identificador*/) {
                                    par_igual = true;
                                    console.log(res.ListParametros[par].type.toString() + "==" + copy_fun.ListParametros[par].type.toString());
                                    row_parametro.push(copy_fun.ListParametros[par].type.toString() + " " + copy_fun.ListParametros[par].identificador);
                                }
                                else {
                                    par_igual = false;
                                    par = res.ListParametros.length;
                                }
                            }
                            if (res.ListParametros.length == 0) {
                                par_igual = true;
                            }
                            if (par_igual == true) {
                                console.log("parametro igual " + res.identificador);
                                html_funcionescopia_tempo = html_funcionescopia_tempo + "<tr>" +
                                    "<td> Pestania(" + (pesta + 1) + ")" +
                                    "</td>" +
                                    "<td>" + res.type.toString() +
                                    "</td>" +
                                    "<td>" + res.identificador +
                                    "</td>" +
                                    "<td>" + copy_fun.identificador +
                                    "</td>" +
                                    "<td>" + row_parametro +
                                    "</td>" +
                                    "<td>" + nameclass +
                                    "</td>" +
                                    "</tr>";
                                Is_Copy = true;
                                /*verifianco las variables*/
                                /////console.log("aaaaa FUN instrucciones del FUN original");
                                /////console.log(res.ListAllVar);
                                /////console.log("aaaaa FUN instrucciones del FUN copia");
                                /////console.log(copy_fun.ListAllVar);
                                Copias_VARIABLES(res.ListAllVar, copy_fun.ListAllVar, nameclass, pesta, copy_fun.identificador);
                            }
                        }
                        /*fin met*/
                    }
                }
            }
            if (Is_Copy == true) {
                console.log("si si si par par  COPIA pes " + (i + 1));
                html_funcionescopia = html_funcionescopia + html_funcionescopia_tempo;
                html_funcionescopia_tempo = "";
                //var
                html_variablescopia = html_variablescopia + html_variablescopia_tempo;
                html_variablescopia_tempo = "";
            }
            else {
                html_funcionescopia_tempo = "";
                html_variablescopia_tempo = "";
                console.log("par par par no no no COPIA pes " + (i + 1));
            }
        }
    }
    return Is_Copy;
}
function ClaseCopia_rows(nameclass, pesta) {
    html_clasecopia_tempo = html_clasecopia_tempo + "<tr>" +
        "<td> Pestania(" + (pesta + 1) + ")" +
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
    html_clasecopia = "<h2 align='center'>Clases Copias</h2>" + // </br>
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
    html_funcionescopia = "<h2 align='center'>Funciones/Metodos Copia</h2>" +
        "<table cellpadding='10' border = '1' align='center'>" +
        "<tr>" +
        "<td><strong>Origen" +
        "</strong></td>" +
        "<td><strong>Tipo Retorno" +
        "</strong></td>" +
        "<td><strong>Funcion/Metodo (Original)" +
        "</strong></td>" +
        "<td><strong>Funcion/Metodo (Copia)" +
        "</strong></td>" +
        "<td><strong>Parametros" +
        "</strong></td>" +
        "<td><strong>Nombre Clase" +
        "</strong></td>" +
        "</tr>";
    html_variablescopia = "<h2 align='center'>Variables Copia</h2>" +
        "<table cellpadding='10' border = '1' align='center'>" +
        "<tr>" +
        "<td><strong>Origen" +
        "</strong></td>" +
        "<td><strong>Tipo" +
        "</strong></td>" +
        "<td><strong>Nombre" +
        "</strong></td>" +
        "<td><strong>Funcion/Metodo" +
        "</strong></td>" +
        "<td><strong>Nombre Clase" +
        "</strong></td>" +
        "</tr>";
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
