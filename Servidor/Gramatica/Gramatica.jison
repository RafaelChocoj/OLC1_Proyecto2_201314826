%{
    const {Primitive} = require('../Expresiones/Primitive');
    const {Aritmetica} = require('../Expresiones/Aritmetica');
    const {Relacional} = require('../Expresiones/Relacional');
    /*const {Continue} = require('../Expresiones/Continue');
    const {Break} = require('../Expresiones/Break');*/
    const {Logica} = require('../Expresiones/Logica');
    
    const {Identificador} = require('../Expresiones/Identificador');
    const {Imprimir} = require('../Instrucciones/Imprimir');
    const {If} = require('../Instrucciones/If');
    const {While} = require('../Instrucciones/While');
    const {DoWhile} = require('../Instrucciones/DoWhile');
    const {For} = require('../Instrucciones/For');
    const {Switch} = require('../Instrucciones/Switch');
    const {CaseSwitch} = require('../Instrucciones/CaseSwitch');
    const {DefaultSwitch} = require('../Instrucciones/DefaultSwitch');

    const {VoidMain} = require('../ClasesF/VoidMain');
    const {Metodo} = require('../ClasesF/Metodo');
    const {Parametros} = require('../ClasesF/Parametros');
    
    const {Declaracion} = require('../Instrucciones/Declaracion');
    const {Asignacion} = require('../Instrucciones/Asignacion');
    //const {Excepcion} = require('../utils/Exception');*/
    const {Tipo, types} = require('../Abstracto/Tipo');
    const {Tree} = require('../Simbols/Tree');

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
("//".*\r\n)|("//".*\n)|("//".*\r)          /*comen unilinea*/
"/*""/"*([^*/]|[^*]"/"|"*"[^/])*"*"*"*/"    /*comen multilinea*/

/*expresiones regulares*/
{decimal}            return 'decimal' 
{entero}             return 'entero' 

{cadena}             return 'cadena'
{char}               return 'char'

/*artimeticas*/
"*"                   return '*'
"/"                   return '/'
"--"                   return '--'
"-"                   return '-'
"++"                   return '++'
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
"String"              return 'String'

"true"                return 'true'
"false"               return 'false'

"if"                  return 'if'
"else"                return 'else'

"switch"              return 'switch'
"case"                return 'case'
"break"               return 'break'
"default"             return 'default'

"while"               return 'while'
"do"                  return 'do'

"for"                 return 'for'

"continue"            return 'continue'

//"print"               return 'print'
"System"               return 'System'
"out"                  return 'out'
"print"                return 'print'
"println"              return 'println'
"."                    return '.'
":"                    return ':'

"void"                return 'void'
"main"                return 'main'

{identificador}      return 'identificador'
<<EOF>>	              return 'EOF'

.           lis_Errores.LisErrores.add(new NError.NodeErr("Lexico","Caracter invalido: "+yytext,yylloc.first_line, yylloc.first_column))

/lex

/*inicio sintactico*/
/*precedencia*/
%left '='
%left ',' //para listado de id

%left 'else'

%left '||'
%left '&&'
/*logicos*/
%left '==', '!='
%left '>=', '<=', '<', '>'
/*arimeticos*/
%left '+' '-'
%left '*' '/' 'mod'
%left '++' '--'

%right '!'
%left '^' 
%left UMENOS //signo menos



%start INICIO
%% 

//INICIO: EX EOF {};
INICIO : LIS_INSTRUCCIONES EOF {$$ = new Tree($1); return $$;};

LIS_INSTRUCCIONES : LIS_INSTRUCCIONES INSTRUCCION { $$ = $1; $$.push($2); }
                    | INSTRUCCION                 { $$ = [$1]; }
                    //| error { console.log('++Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
                    ;

INSTRUCCION : DECLARACION {$$ = $1;}
            | ASIGNACION {$$ = $1;}
            | PRINT {$$ = $1;}
            | WHILE {$$ = $1;}
            | DOWHILE {$$ = $1;}
            | FOR {$$ = $1;}
            | IF {$$ = $1;}
            | SWITCH {$$ = $1;}

            /*probando otros*/
            | MAIN {$$ = $1;}
            | METODO {$$ = $1;}
            

            ;


/*lista de variables*/
DECLARACION : TIPO LISTA_ID '=' EX ';' {$$ = new Declaracion($1, $2, $4, _$.first_line, _$.first_column);}
            | TIPO LISTA_ID ';' {$$ = new Declaracion($1, $2, null, _$.first_line, _$.first_column);}
            ;

LISTA_ID : LISTA_ID ',' identificador  { $$ = $1; $$.push($3); }
            | identificador { $$ = [$1]; }
            ;
/*DECLARACION : TIPO identificador '=' EX ';' {$$ = new Declaracion($1, $2, $4, _$.first_line, _$.first_column);}
            | TIPO identificador ';' {$$ = new Declaracion($1, $2, null, _$.first_line, _$.first_column);}
            ;*/

/*sentencias inicio*/
WHILE : 'while' CONDICION BLOQUE_LISINSTRUCCIONES {$$ = new While($2, $3, _$.first_line, _$.first_column);}
      ;
BLOQUE_LISINSTRUCCIONES : '{' LIS_INSTRUCCIONES '}' {$$ = $2;}
                     | '{' '}' {$$ = [];}
                     ;

CASE_LISINSTRUCCIONES : LIS_INSTRUCCIONES  {$$ = $1;}
                     |  {$$ = []; }
                     ;
CONDICION : '(' EX ')' {$$ = $2;}
          ;

CON_FOR : EX  {$$ = $1;}
          ;

DOWHILE : 'do' BLOQUE_LISINSTRUCCIONES 'while' CONDICION ';' {$$ = new DoWhile($4, $2, _$.first_line, _$.first_column);}
        ;

FOR : 'for' '(' INIFOR CON_FOR ';' EX ')' BLOQUE_LISINSTRUCCIONES {$$ = new For($3, $4, $6, $8, _$.first_line, _$.first_column);}
      ;
INIFOR : DECLARACION {$$ = $1;}
        | ASIGNACION {$$ = $1;}
        ;

IF : 'if' CONDICION BLOQUE_LISINSTRUCCIONES {$$ = new If($2, $3, [], _$.first_line, _$.first_column);}
   | 'if' CONDICION BLOQUE_LISINSTRUCCIONES 'else' BLOQUE_LISINSTRUCCIONES {$$ = new If($2, $3, $5, _$.first_line, _$.first_column);}
   | 'if' CONDICION BLOQUE_LISINSTRUCCIONES 'else' IF {$$ = new If($2, $3, [$5], _$.first_line, _$.first_column);}
   ;

//SWITCH : 'switch' CONDICION '{' LIS_CASES C_DEFAULT '}' { $$ = new Switch($2, $3, $4, $5, _$.first_line, _$.first_column);  }
SWITCH : 'switch' CONDICION '{' LIS_CASES C_DEFAULT '}' { $$ = new Switch($2, $4, $5, _$.first_line, _$.first_column);  }
       | 'switch' CONDICION '{' C_DEFAULT '}' { $$ = new Switch($2, [], $4, _$.first_line, _$.first_column);  }
      ;

LIS_CASES : LIS_CASES CASE { $$ = $1; $$.push($2); }
      | CASE { $$ = [$1]; }
      //|  { $$ = [];}
      ;
CASE : 'case' EX ':' CASE_LISINSTRUCCIONES { $$ = new CaseSwitch($2, $4, _$.first_line, _$.first_column); }
      ;
C_DEFAULT : 'default' ':' CASE_LISINSTRUCCIONES { $$ = [new DefaultSwitch( $3, _$.first_line, _$.first_column)]; } 
            | {$$ = []; }
            ;
/*C_DEFAULT : 'default' ':' CASE_LISINSTRUCCIONES { $$ = $3; } 
            | {$$ = []; }
            ;*/
/*fin sentencias*/

TIPO : 'int' {$$ = new Tipo(types.int);}
     | 'double' {$$ = new Tipo(types.double);}
     | 'boolean' {$$ = new Tipo(types.boolean);}
     | 'char' {$$ = new Tipo(types.char);}
     | 'String' {$$ = new Tipo(types.String);}
     ;

ASIGNACION : identificador '=' EX ';' { $$ = new Asignacion($1, $3, _$.first_line, _$.first_column); }
           ;

PRINT : 'System' '.' 'out' '.' 'print' '(' EX ')' ';' { $$ = new Imprimir($7, _$.first_line, _$.first_column);}
      | 'System' '.' 'out' '.' 'println' '(' EX ')' ';' { $$ = new Imprimir($7, _$.first_line, _$.first_column);}
      ;
/*inicio funciones, eventos*/
MAIN : 'void' 'main' '(' ')' BLOQUE_LISINSTRUCCIONES  { $$ = new VoidMain( $5, _$.first_line, _$.first_column); }
      ;
METODO : 'void' identificador '(' LIS_PARAMETROS ')' BLOQUE_LISINSTRUCCIONES  { $$ = new Metodo($2, $4, $6, _$.first_line, _$.first_column); }
      |  'void' identificador '(' ')' BLOQUE_LISINSTRUCCIONES  { $$ = new Metodo($2, [], $5, _$.first_line, _$.first_column); }
      ;

FUNCION : TIPO identificador '(' LIS_PARAMETROS ')' BLOQUE_LISINSTRUCCIONES  { $$ = new Metodo($2, $4, $6, _$.first_line, _$.first_column); }
       |  TIPO identificador '(' ')' BLOQUE_LISINSTRUCCIONES  { $$ = new Metodo($2, [], $5, _$.first_line, _$.first_column); }
       ;

LIS_PARAMETROS : LIS_PARAMETROS ',' TIPO identificador  { $$ = $1; $$.push(new Parametros( $3, $4, _$.first_line, _$.first_column)); }
      | TIPO identificador { $$ = [new Parametros( $1, $2, _$.first_line, _$.first_column)]; }
      ;
/**/

EX : '-' EX %prec UMENOS	    { $$ = new Aritmetica($2, null, '-', _$.first_line, _$.first_column); }
    | '!' EX	 { }
    
    | EX '++'		  { $$ = new Aritmetica($1, null, '++', _$.first_line, _$.first_column); }
    | EX '--'		  { $$ = new Aritmetica($1, null, '--', _$.first_line, _$.first_column); }

    | EX '+' EX		  { $$ = new Aritmetica($1, $3, '+', _$.first_line, _$.first_column); }
    | EX '-' EX		  { $$ = new Aritmetica($1, $3, '-', _$.first_line, _$.first_column); }
    | EX '*' EX		  { $$ = new Aritmetica($1, $3, '*', _$.first_line, _$.first_column); }
    | EX '/' EX	      { $$ = new Aritmetica($1, $3, '/', _$.first_line, _$.first_column); }
    | EX '^' EX	      { $$ = new Aritmetica($1, $3, '^', _$.first_line, _$.first_column); }
    | EX 'mod' EX	  { $$ = new Aritmetica($1, $3, '%', _$.first_line, _$.first_column); }
    
    | EX '<' EX		    { $$ = new Relacional($1, $3, '<', _$.first_line, _$.first_column); }
    | EX '>' EX		    { $$ = new Relacional($1, $3, '>', _$.first_line, _$.first_column); }
    | EX '>=' EX	    { $$ = new Relacional($1, $3, '>=', _$.first_line, _$.first_column);}
    | EX '<=' EX	    { $$ = new Relacional($1, $3, '<=', _$.first_line, _$.first_column); }
    | EX '==' EX	    { $$ = new Relacional($1, $3, '==', _$.first_line, _$.first_column);}
    | EX '!=' EX	    { $$ = new Relacional($1, $3, '!=', _$.first_line, _$.first_column); }

    | EX '||' EX	    { $$ = new Logica($1, $3, '&&', _$.first_line, _$.first_column); }
    | EX '&&' EX	    { $$ = new Logica($1, $3, '||', _$.first_line, _$.first_column); }

    | 'entero'      { $$ = new Primitive(new Tipo(types.int), Number($1), _$.first_line, _$.first_column);}
    | 'decimal'     { $$ = new Primitive(new Tipo(types.decimal), Number($1), _$.first_line, _$.first_column); }
    | 'true'        { $$ = new Primitive(new Tipo(types.boolean), Boolean($1), _$.first_line, _$.first_column);}
    | 'false'       { $$ = new Primitive(new Tipo(types.boolean), Boolean($1), _$.first_line, _$.first_column);}
    | 'cadena'		{ $$ = new Primitive(new Tipo(types.String), String($1), _$.first_line, _$.first_column);}
    | 'char'		{ $$ = new Primitive(new Tipo(types.char), String($1), _$.first_line, _$.first_column);}
    | 'identificador'	{ $$ = new Identificador($1, _$.first_line, _$.first_column); }
    | '(' EX ')'		{ $$ = $2; }
    ;