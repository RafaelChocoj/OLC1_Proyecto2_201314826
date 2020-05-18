import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as gramatica from "./Gramatica/gramatica";

var app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/AnalizFile/', function (req, res) {
    var entrada=req.body.text;
    //console.log(entrada);

    let resul_fin: Array<String> 
    //resul_fin = new Array<String>()
    resul_fin = parser(entrada);

    //Errores.clear();
    
    //res.send(resultado.toString());

    

    //resul_fin.push("fila1");
    //resul_fin.push("fila2");

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

        //return gramatica.parse(texto);
        //const res = tree.execute(tree);
        
        //console.log(tree);
        console.log(tree.instructions);
        
        //tree.instructions.map((m: any) => {
        tree.instructions.map((m: any) => {

        const res = m.execute(tree, false, "NA", false);

        //console.log((res instanceof)+ " fin");
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

        //////
        //return null;
        resul_fin.push(ast_carpetas);
        return resul_fin;
    } catch (e) {
        //return "Error en compilacion de Entrada: "+ e.toString();
        return ["Error en compilacion de Entrada: "+ e.toString()];
    }
}
