/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,14],$V2=[1,15],$V3=[1,16],$V4=[1,17],$V5=[1,18],$V6=[1,19],$V7=[1,20],$V8=[1,21],$V9=[1,22],$Va=[1,13],$Vb=[5,20,21,25,29,30,32,34,35,36,37,38,39],$Vc=[1,30],$Vd=[1,32],$Ve=[16,18,19],$Vf=[1,47],$Vg=[1,48],$Vh=[1,46],$Vi=[1,39],$Vj=[1,40],$Vk=[1,41],$Vl=[1,42],$Vm=[1,43],$Vn=[1,44],$Vo=[1,45],$Vp=[5,20,21,25,26,29,30,32,34,35,36,37,38,39,43,44,60,61,62,63,64],$Vq=[1,65],$Vr=[1,62],$Vs=[1,63],$Vt=[1,64],$Vu=[1,66],$Vv=[1,67],$Vw=[1,68],$Vx=[1,69],$Vy=[1,70],$Vz=[1,71],$VA=[1,72],$VB=[1,73],$VC=[1,74],$VD=[1,75],$VE=[1,76],$VF=[1,77],$VG=[18,27,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],$VH=[5,20,21,25,29,30,32,33,34,35,36,37,38,39],$VI=[20,26,37,43,44,60,61,62,63,64],$VJ=[18,27,43,47,52,53,54,55,56,57,58,59],$VK=[18,27,43,47,48,49,51,52,53,54,55,56,57,58,59],$VL=[18,27,52,53,54,55,56,57,58,59],$VM=[18,27,56,57,58,59];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"LIS_INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"DECLARACION":7,"ASIGNACION":8,"PRINT":9,"WHILE":10,"DOWHILE":11,"FOR":12,"IF":13,"TIPO":14,"LISTA_ID":15,"=":16,"EX":17,";":18,",":19,"identificador":20,"while":21,"CONDICION":22,"BLOQUE_LISINSTRUCCIONES":23,"{":24,"}":25,"(":26,")":27,"CON_FOR":28,"do":29,"for":30,"INIFOR":31,"if":32,"else":33,"int":34,"double":35,"boolean":36,"char":37,"String":38,"System":39,".":40,"out":41,"print":42,"-":43,"!":44,"++":45,"--":46,"+":47,"*":48,"/":49,"^":50,"mod":51,"<":52,">":53,">=":54,"<=":55,"==":56,"!=":57,"||":58,"&&":59,"entero":60,"decimal":61,"true":62,"false":63,"cadena":64,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",16:"=",18:";",19:",",20:"identificador",21:"while",24:"{",25:"}",26:"(",27:")",29:"do",30:"for",32:"if",33:"else",34:"int",35:"double",36:"boolean",37:"char",38:"String",39:"System",40:".",41:"out",42:"print",43:"-",44:"!",45:"++",46:"--",47:"+",48:"*",49:"/",50:"^",51:"mod",52:"<",53:">",54:">=",55:"<=",56:"==",57:"!=",58:"||",59:"&&",60:"entero",61:"decimal",62:"true",63:"false",64:"cadena"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,5],[7,3],[15,3],[15,1],[10,3],[23,3],[23,2],[22,3],[28,1],[11,5],[12,8],[31,1],[31,1],[13,3],[13,5],[13,5],[14,1],[14,1],[14,1],[14,1],[14,1],[8,4],[9,9],[17,2],[17,2],[17,2],[17,2],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$ = new Tree($$[$0-1]); return this.$;
break;
case 2:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 3: case 14:
 this.$ = [$$[$0]]; 
break;
case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 19: case 22: case 23:
this.$ = $$[$0];
break;
case 11:
this.$ = new Declaracion($$[$0-4], $$[$0-3], $$[$0-1], _$.first_line, _$.first_column);
break;
case 12:
this.$ = new Declaracion($$[$0-2], $$[$0-1], null, _$.first_line, _$.first_column);
break;
case 13:
 this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 15:
this.$ = new While($$[$0-1], $$[$0], _$.first_line, _$.first_column);
break;
case 16: case 18:
this.$ = $$[$0-1];
break;
case 17:
this.$ = [];
break;
case 20:
this.$ = new DoWhile($$[$0-1], $$[$0-3], _$.first_line, _$.first_column);
break;
case 21:
this.$ = new For($$[$0-5], $$[$0-4], $$[$0-2], $$[$0], _$.first_line, _$.first_column);
break;
case 24:
this.$ = new If($$[$0-1], $$[$0], [], _$.first_line, _$.first_column);
break;
case 25:
this.$ = new If($$[$0-3], $$[$0-2], $$[$0], _$.first_line, _$.first_column);
break;
case 26:
this.$ = new If($$[$0-3], $$[$0-2], [$$[$0]], _$.first_line, _$.first_column);
break;
case 27:
this.$ = new Tipo(types.int);
break;
case 28:
this.$ = new Tipo(types.double);
break;
case 29:
this.$ = new Tipo(types.boolean);
break;
case 30:
this.$ = new Tipo(types.char);
break;
case 31:
this.$ = new Tipo(types.String);
break;
case 32:
 this.$ = new Asignacion($$[$0-3], $$[$0-1], _$.first_line, _$.first_column); 
break;
case 33:
 this.$ = new Imprimir($$[$0-2], _$.first_line, _$.first_column);
break;
case 34:
 this.$ = new Aritmetica($$[$0], null, '-', _$.first_line, _$.first_column); 
break;
case 35:
 
break;
case 36:
 this.$ = new Aritmetica($$[$0-1], null, '++', _$.first_line, _$.first_column); 
break;
case 37:
 this.$ = new Aritmetica($$[$0-1], null, '--', _$.first_line, _$.first_column); 
break;
case 38:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '+', _$.first_line, _$.first_column); 
break;
case 39:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '-', _$.first_line, _$.first_column); 
break;
case 40:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '*', _$.first_line, _$.first_column); 
break;
case 41:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '/', _$.first_line, _$.first_column); 
break;
case 42:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '^', _$.first_line, _$.first_column); 
break;
case 43:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '%', _$.first_line, _$.first_column); 
break;
case 44:
 this.$ = new Relacional($$[$0-2], $$[$0], '<', _$.first_line, _$.first_column); 
break;
case 45:
 this.$ = new Relacional($$[$0-2], $$[$0], '>', _$.first_line, _$.first_column); 
break;
case 46:
 this.$ = new Relacional($$[$0-2], $$[$0], '>=', _$.first_line, _$.first_column);
break;
case 47:
 this.$ = new Relacional($$[$0-2], $$[$0], '<=', _$.first_line, _$.first_column); 
break;
case 48:
 this.$ = new Relacional($$[$0-2], $$[$0], '==', _$.first_line, _$.first_column);
break;
case 49:
 this.$ = new Relacional($$[$0-2], $$[$0], '!=', _$.first_line, _$.first_column); 
break;
case 50:
 this.$ = new Logica($$[$0-2], $$[$0], '&&', _$.first_line, _$.first_column); 
break;
case 51:
 this.$ = new Logica($$[$0-2], $$[$0], '||', _$.first_line, _$.first_column); 
break;
case 52:
 this.$ = new Primitive(new Tipo(types.int), Number($$[$0]), _$.first_line, _$.first_column);
break;
case 53:
 this.$ = new Primitive(new Tipo(types.decimal), Number($$[$0]), _$.first_line, _$.first_column); 
break;
case 54: case 55:
 this.$ = new Primitive(new Tipo(types.boolean), Boolean($$[$0]), _$.first_line, _$.first_column);
break;
case 56:
 this.$ = new Primitive(new Tipo(types.String), String($$[$0]), _$.first_line, _$.first_column);
break;
case 57:
 this.$ = new Primitive(new Tipo(types.char), String($$[$0]), _$.first_line, _$.first_column);
break;
case 58:
 this.$ = new Identificador($$[$0], _$.first_line, _$.first_column); 
break;
case 59:
 this.$ = $$[$0-1]; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,20:$V0,21:$V1,29:$V2,30:$V3,32:$V4,34:$V5,35:$V6,36:$V7,37:$V8,38:$V9,39:$Va},{1:[3]},{5:[1,23],6:24,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,20:$V0,21:$V1,29:$V2,30:$V3,32:$V4,34:$V5,35:$V6,36:$V7,37:$V8,38:$V9,39:$Va},o($Vb,[2,3]),o($Vb,[2,4]),o($Vb,[2,5]),o($Vb,[2,6]),o($Vb,[2,7]),o($Vb,[2,8]),o($Vb,[2,9]),o($Vb,[2,10]),{15:25,20:[1,26]},{16:[1,27]},{40:[1,28]},{22:29,26:$Vc},{23:31,24:$Vd},{26:[1,33]},{22:34,26:$Vc},{20:[2,27]},{20:[2,28]},{20:[2,29]},{20:[2,30]},{20:[2,31]},{1:[2,1]},o($Vb,[2,2]),{16:[1,35],18:[1,36],19:[1,37]},o($Ve,[2,14]),{17:38,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{41:[1,49]},{23:50,24:$Vd},{17:51,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{21:[1,52]},{4:53,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,20:$V0,21:$V1,25:[1,54],29:$V2,30:$V3,32:$V4,34:$V5,35:$V6,36:$V7,37:$V8,38:$V9,39:$Va},{7:56,8:57,14:11,20:$V0,31:55,34:$V5,35:$V6,36:$V7,37:$V8,38:$V9},{23:58,24:$Vd},{17:59,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},o($Vp,[2,12]),{20:[1,60]},{18:[1,61],43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC,57:$VD,58:$VE,59:$VF},{17:78,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:79,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},o($VG,[2,52]),o($VG,[2,53]),o($VG,[2,54]),o($VG,[2,55]),o($VG,[2,56]),o($VG,[2,57]),o($VG,[2,58]),{17:80,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{40:[1,81]},o($Vb,[2,15]),{27:[1,82],43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC,57:$VD,58:$VE,59:$VF},{22:83,26:$Vc},{6:24,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,20:$V0,21:$V1,25:[1,84],29:$V2,30:$V3,32:$V4,34:$V5,35:$V6,36:$V7,37:$V8,38:$V9,39:$Va},o($VH,[2,17]),{17:86,20:$Vf,26:$Vg,28:85,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},o($VI,[2,22]),o($VI,[2,23]),o($Vb,[2,24],{33:[1,87]}),{18:[1,88],43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC,57:$VD,58:$VE,59:$VF},o($Ve,[2,13]),o($Vp,[2,32]),o($VG,[2,36]),o($VG,[2,37]),{17:89,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:90,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:91,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:92,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:93,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:94,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:95,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:96,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:97,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:98,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:99,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:100,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:101,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{17:102,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},o($VG,[2,34]),o([18,27,43,45,46,47,48,49,51,52,53,54,55,56,57,58,59],[2,35],{50:$Vw}),{27:[1,103],43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC,57:$VD,58:$VE,59:$VF},{42:[1,104]},o([18,24],[2,18]),{18:[1,105]},o($VH,[2,16]),{18:[1,106]},{18:[2,19],43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC,57:$VD,58:$VE,59:$VF},{13:108,23:107,24:$Vd,32:$V4},o($Vp,[2,11]),o($VJ,[2,38],{45:$Vr,46:$Vs,48:$Vu,49:$Vv,50:$Vw,51:$Vx}),o($VJ,[2,39],{45:$Vr,46:$Vs,48:$Vu,49:$Vv,50:$Vw,51:$Vx}),o($VK,[2,40],{45:$Vr,46:$Vs,50:$Vw}),o($VK,[2,41],{45:$Vr,46:$Vs,50:$Vw}),o($VG,[2,42]),o($VK,[2,43],{45:$Vr,46:$Vs,50:$Vw}),o($VL,[2,44],{43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx}),o($VL,[2,45],{43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx}),o($VL,[2,46],{43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx}),o($VL,[2,47],{43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx}),o($VM,[2,48],{43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB}),o($VM,[2,49],{43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB}),o([18,27,58],[2,50],{43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC,57:$VD,59:$VF}),o([18,27,58,59],[2,51],{43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC,57:$VD}),o($VG,[2,59]),{26:[1,109]},o($Vb,[2,20]),{17:110,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},o($Vb,[2,25]),o($Vb,[2,26]),{17:111,20:$Vf,26:$Vg,37:$Vh,43:$Vi,44:$Vj,60:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo},{27:[1,112],43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC,57:$VD,58:$VE,59:$VF},{27:[1,113],43:$Vq,45:$Vr,46:$Vs,47:$Vt,48:$Vu,49:$Vv,50:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC,57:$VD,58:$VE,59:$VF},{23:114,24:$Vd},{18:[1,115]},o($Vb,[2,21]),o($Vb,[2,33])],
defaultActions: {18:[2,27],19:[2,28],20:[2,29],21:[2,30],22:[2,31],23:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    const {Primitive} = require('../Expresiones/Primitive');
    const {Aritmetica} = require('../Expresiones/Aritmetica');
    const {Relacional} = require('../Expresiones/Relacional');
    /*const {Continue} = require('../Expresiones/Continue');
    const {Break} = require('../Expresiones/Break');*/
    const {Logica} = require('../Expresiones/Logica');
    
    const {Identificador} = require('../Expresiones/Identificador');
    const {Imprimir} = require('../Instrucciones/Imprimir');
    //const {If} = require('../Instrucciones/If');
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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/*comen unilinea*/
break;
case 2:/*comen multilinea*/
break;
case 3:return 61 
break;
case 4:return 60 
break;
case 5:return 64
break;
case 6:return 37
break;
case 7:return 48
break;
case 8:return 49
break;
case 9:return 46
break;
case 10:return 43
break;
case 11:return 45
break;
case 12:return 47
break;
case 13:return 48
break;
case 14:return 50
break;
case 15:return 51
break;
case 16:return 52
break;
case 17:return 53
break;
case 18:return 55
break;
case 19:return 54
break;
case 20:return 56
break;
case 21:return 57
break;
case 22:return 58
break;
case 23:return 59
break;
case 24:return 44
break;
case 25:return 26
break;
case 26:return 27  
break;
case 27:return 24
break;
case 28:return 25  
break;
case 29:return 18
break;
case 30:return 19
break;
case 31:return 16
break;
case 32:return 34
break;
case 33:return 35
break;
case 34:return 36
break;
case 35:return 37
break;
case 36:return 38
break;
case 37:return 62
break;
case 38:return 63
break;
case 39:return 32
break;
case 40:return 33
break;
case 41:return 'switch'
break;
case 42:return 'case'
break;
case 43:return 'break'
break;
case 44:return 'default'
break;
case 45:return 21
break;
case 46:return 29
break;
case 47:return 30
break;
case 48:return 'continue'
break;
case 49:return 39
break;
case 50:return 41
break;
case 51:return 42
break;
case 52:return 40
break;
case 53:return 20
break;
case 54:return 5
break;
case 55:lis_Errores.LisErrores.add(new NError.NodeErr("Lexico","Caracter invalido: "+yy_.yytext,yy_.yylloc.first_line, yy_.yylloc.first_column))
break;
}
},
rules: [/^(?:\s+)/i,/^(?:(\/\/.*\r\n)|(\/\/.*\n)|(\/\/.*\r))/i,/^(?:\/\*\/*([^*/]|[^*]\/|\*[^/])*\**\*\/)/i,/^(?:([0-9]+(\.[0-9]+)?))/i,/^(?:([0-9]+))/i,/^(?:(("[^"]*")))/i,/^(?:([\'][^\'\n][\']))/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:--)/i,/^(?:-)/i,/^(?:\+\+)/i,/^(?:\+)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:%)/i,/^(?:<)/i,/^(?:>)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:;)/i,/^(?:,)/i,/^(?:=)/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:String\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:break\b)/i,/^(?:default\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:for\b)/i,/^(?:continue\b)/i,/^(?:System\b)/i,/^(?:out\b)/i,/^(?:print\b)/i,/^(?:\.)/i,/^(?:(([a-zA-Z_])[a-zA-Z0-9_]*))/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}