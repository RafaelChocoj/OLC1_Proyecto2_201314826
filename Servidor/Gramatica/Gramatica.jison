%{
    const {Primitive} = require('../Expresiones/Primitive');
    const {Aritmetica} = require('../Expresiones/Aritmetica');
    const {Relacional} = require('../Expresiones/Relacional');
    /*const {Continue} = require('../Expresiones/Continue');
    const {Break} = require('../Expresiones/Break');*/
    const {Logica} = require('../Expresiones/Logica');
    
    const {Identificador} = require('../Expresiones/Identificador');
    const {Imprimir} = require('../Instrucciones/Imprimir');
    /*const {If} = require('../Instrucciones/If');*/
    const {While} = require('../Instrucciones/While');
    const {DoWhile} = require('../Instrucciones/DoWhile');
    const {For} = require('../Instrucciones/For');
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
"."                    return '.'

{identificador}      return 'identificador'
<<EOF>>	              return 'EOF'

.           lis_Errores.LisErrores.add(new NError.NodeErr("Lexico","Caracter invalido: "+yytext,yylloc.first_line, yylloc.first_column))

/lex

/*inicio sintactico*/
/*precedencia*/
%left '='
%left ',' //para listado de id
%left '||'
%left '&&'
/*logicos*/
%left '==', '!='
%left '>=', '<=', '<', '>'
/*arimeticos*/
%left '+' '-'
%left '*' '/' 'mod'
%left '++' '--'
%left UMENOS //signo menos
%left '^' 
%right '!'

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
CONDICION : '(' EX ')' {$$ = $2;}
          ;

CON_FOR : EX  {$$ = $1;}
          ;

DOWHILE : 'do' BLOQUE_LISINSTRUCCIONES 'while' CONDICION ';' {$$ = new DoWhile($4, $2, _$.first_line, _$.first_column);}
        ;

FOR : 'for' '(' CON_FOR ')' BLOQUE_LISINSTRUCCIONES {$$ = new For($3, $5, _$.first_line, _$.first_column);}
      ;
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
      ;


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