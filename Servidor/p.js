"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analizador = require('./Gramatica/gramatica.js');
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
var entrada = "void main() {" +
    "System.out.println(\"7 elevado al cubo es: \"+3);" +
    "}\n" +
    "double potencia(double n1, double n2){" +
    "  double resultado = n1^ n2;" +
    //"  return resultado;"+
    "  }" +
    "void imprime_salida() { //Metodo declarado \n" +
    "  a = 55; " +
    "} ";
var entrada = "//Llamada a un metodo\n" +
    //"metodo1();"+
    "//Llamada a una funcion\n" +
    //"double pot = potencia(5,3, \"cadena\", 5*3+1);";
    "int llamada = suma(numero1, 5*8+6)-resta(numero1, 5*8+6) * (multiplicacion(numero1, 5*8+6)/ division(numero1, 5*8+6));";
var entrada = "do {\n" +
    "continue; If( 3 < 4) { break; }" +
    "} while(1>a || a ==b);\n";
var entrada = "switch (3*54) {\n" +
    "case 3: // Sentencias\n" +
    "If( 3 < 4) { }" +
    //" int a,b;"+
    "break;" +
    // " case 5: "+
    //"// Sentencias\n"+
    //  "// Sentencias\n"+
    " default: " +
    //  "// Sentencias\n"+
    "break;" +
    "break;" +
    //" case 7: "+
    "bb = 1+2;" +
    "}";
var entrada = "/*import ClaseA;" +
    "import ClaseB;*/ \nclass ClaseC{\n" +
    "/*\n" +
    "Cuerpo de la clase C\n " +
    "*/\n" +
    "@ void suma() { " +
    "If( 3 < 4) # { while(1>a || a ==b){ /*return 25*2;*/} }" +
    "System.out.println(\"7 elevado al cubo es: \"+3);" +
    //"for(int k=15; k>5 ; k--){ /* Sentencias */ a = 'd'; }"+
    "return !(true || 1>a) ; }\n" +
    "}\n";
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
        //const tree = gramatica.parse(entrada);
        const tree = analizador.parse(entrada);
        //return gramatica.parse(texto);
        //const res = tree.execute(tree);
        //console.log(tree);
        console.log(tree.instructions);
        //tree.instructions.map((m: any) => {
        tree.instructions.map((m) => {
            const res = m.execute(tree, false, "NA", false);
            //console.log((res instanceof)+ " fin");
            /*if (res instanceof Break) {
              console.log('Semantico',
                `Sentencia break fuera de un ciclo`,
                res.line, res.column);
            }
            */
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
        ///errores
        //
        //console.log(gramatica);
        //analizador.clear_lista_erroes();
        const lex_err = analizador.get_lista_erroes();
        console.log(lex_err);
        console.log("tam, desde fin " + lex_err.length);
        //console.log(analizador.parseError;
        console.log(tree.lis_err);
        //////
        return null;
    }
    catch (e) {
        return "Error en compilacion de Entrada: " + e.toString();
    }
}
