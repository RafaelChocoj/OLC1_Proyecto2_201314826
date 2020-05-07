%{
    /*const {Primitive} = require('../Expresiones/Primitive');
    const {Arithmetic} = require('../Expresiones/Arithmetic');
    const {Relational} = require('../Expresiones/Relational');
    const {Continue} = require('../Expresiones/Continue');
    const {Break} = require('../Expresiones/Break');
    const {Logic} = require('../Expresiones/Logic');
    const {Identificador} = require('../Expresiones/Identificador');
    const {Print} = require('../Instrucciones/Print');
    const {If} = require('../Instrucciones/If');
    const {While} = require('../Instrucciones/While');
    const {Declaracion} = require('../Instrucciones/Declaracion');
    const {Asignacion} = require('../Instrucciones/Asignacion');
    const {Excepcion} = require('../utils/Exception');
    const {Type, types} = require('../utils/Type');
    const {Tree} = require('../Simbols/Tree');*/

    let lis_Errores=require('../Errores/LisErrores');
    let NError=require('../Errores/NodeErr');
%}

/*inicio Lexico*/
%lex
%options case-insensitive
/*expresiones regulares*/
entero [0-9]+
//decimal {entero}("."{entero})?
decimal [0-9]+("."[0-9]+)?
cadena (\"[^"]*\")
/*cadena2*/
//cadena [\"]([^\"\n]|\\\"")*[\"]
identificador ([a-zA-Z_])[a-zA-Z0-9_]*
char [\'][^\'\n][\']

%%

\s+                   /* skip whitespace */
/*expresiones regulares*/
{decimal}            return 'decimal' 
{entero}             return 'entero' 

{cadena}             return 'cadena'
{identificador}      return 'identificador'
{char}               return 'char'

/*artimeticas*/
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"*"                   return '*'
"^"                   return '^'
"%"                   return 'mod'
//--
//++

/*relacionales*/
"<"                   return '<'
">"                   return '>'
"<="                  return '<='
">="                  return '>='
"=="                  return '=='
"!="                  return '!='
/*logicas*/
"||"                  return '||'
"&&"                  return '&&'
"!"                   return '!'
/*simbolos*/
"("                   return '('
")"                   return ')'  
"{"                   return '{'
"}"                   return '}'  
";"                   return ';'
","                   return ','
"="                   return '='
/*reservadas*/
//tipo
"int"                 return 'int'
"double"              return 'double'
"boolean"             return 'boolean'
"char"                return 'char'
"string"              return 'string'

"true"                return 'true'
"false"               return 'false'

"if"                  return 'if'
"else"                return 'else'

"switch"              return 'switch'
"case"                return 'case'
"break"               return 'break'
"default"             return 'default'

"while"               return 'while'
"continue"            return 'continue'
"print"               return 'print'
<<EOF>>	              return 'EOF'

.           lis_Errores.LisErrores.add(new NError.NodeErr("Lexico","Caracter invalido: "+yytext,yylloc.first_line, yylloc.first_column))

/lex

/*inicio sintactico*/
/*precedencia*/
%left '+' '-'
%left '*' '/'

%start INICIO
%% 

INICIO: EX EOF {};
EX : EX '+' EX		    { }
    | EX '-' EX		    { }
    | EX '*' EX		    { }
    | EX '/' EX	          {  }
    | 'entero'
    | 'decimal'				    {  }
    | 'true'				    {  }
    | 'false'				    {  }
    | 'cadena'			    { }
    | 'char'			    { }
    | 'identificador'			          { }
    | '(' EX ')'		          { }
    ;