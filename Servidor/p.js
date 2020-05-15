"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gramatica = require("./Gramatica/gramatica");
//const par = require('./Grammar/gramatica');
//var entrada = "-12345@+2*6.25+\n#14 -( nose + \"saber\")+'o7'";
//var entrada = "2^2+5%3*12345@+2*6.25+\n#14 -( nose + \"saber\")+'o'";
//var entrada = "a = 5+2*7-(5/3); b = var1;";
//var entrada = "a = 1*b+false+'C'+\"str\";";
//var entrada = "a = 1*6+2;\n System.out.print(\"la cadena es\" + a);";
var entrada = "a = 1*6+2/div;\n System.out.print(\"la cadena es\" + a); int b = 25;";
var entrada = "int a1 = 1*2; int b2, b3, b4 = 55+2;";
var entrada = "//int a1 = 1*2;\n h = (5<25 && (\"a\" == a1));";
var entrada = "while(1>a || a ==b){\n" +
    "System.out.print(\"0777-Compiladores 1\"); int a,s2;" +
    "}";
var entrada = "do {\n" +
    "System.out.print(\"0777-Compiladores 1\"); int a,s2;" +
    "} while(1>a || a ==b);";
var entrada = "int a = 25+3; a2 = b++;";
var entrada = "int k;" +
    "for(int k=15; k>5 ; k--){ /* Sentencias */ a = 'd'; }";
var entrada = "If( 3 < 4) { /* Sentencias */ char a = 'd'; }" +
    "else if (2 < 5) {System.out.print(\"en el elsiif\");}" +
    "else { b = 2;}";
var entrada = "switch (3*54) {\n" +
    // "case 3: // Sentencias\n"+
    // "If( 3 < 4) { }"+
    // " int a,b;"+
    //"break;"+
    // " case 5: "+
    //"// Sentencias\n"+
    //" case 7: "+
    //"bb = 1+2;"+
    //  "// Sentencias\n"+
    //"break;"+
    //" default: "+
    //  "// Sentencias\n"+
    //"break;"+
    "}";
//If(true) { /* Sentencias */ }
//If(false){ /* Sentencias */ }
//else { /* Sentencias */ }
//If(false){ /* Sentencias */ }
//else if(true) { /* Sentencias */ }"
//var entrada = "((5>2) && (num1 == 58)) ";
//var entrada = "!true@";
var resultado = parser(entrada);
console.log("res: " + resultado);
function parser(texto) {
    console.log("cad en: " + texto);
    try {
        const tree = gramatica.parse(entrada);
        //return gramatica.parse(texto);
        //const res = tree.execute(tree);
        //console.log(tree);
        console.log(tree.instructions);
        //tree.instructions.map((m: any) => {
        tree.instructions.map((m) => {
            const res = m.execute(tree);
            /*if (res instanceof Break) {
              const error = new Exception('Semantico',
                `Sentencia break fuera de un ciclo`,
                res.line, res.column);
              tree.excepciones.push(error);
              tree.console.push(error.toString());
            } else if (res instanceof Continue) {
              const error = new Exception('Semantico',
                `Sentencia continue fuera de un ciclo`,
                res.line, res.column);
              tree.excepciones.push(error);
              tree.console.push(error.toString());
            }*/
        });
        console.log("-------------------");
        //console.log(tree.arbol_ast);
        for (let i = 0; i < tree.arbol_ast.length; i++) {
            console.log(tree.arbol_ast[i]);
        }
        console.log("-------------------");
        //////
        return null;
    }
    catch (e) {
        return "Error en compilacion de Entrada: " + e.toString();
    }
}
