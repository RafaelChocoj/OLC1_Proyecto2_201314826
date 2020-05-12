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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,13],$V2=[1,14],$V3=[1,15],$V4=[1,16],$V5=[1,17],$V6=[1,18],$V7=[1,19],$V8=[1,20],$V9=[1,12],$Va=[5,19,20,24,28,29,30,31,32,33,34,35],$Vb=[1,28],$Vc=[1,30],$Vd=[15,17,18],$Ve=[1,44],$Vf=[1,45],$Vg=[1,43],$Vh=[1,36],$Vi=[1,37],$Vj=[1,38],$Vk=[1,39],$Vl=[1,40],$Vm=[1,41],$Vn=[1,42],$Vo=[1,60],$Vp=[1,57],$Vq=[1,58],$Vr=[1,59],$Vs=[1,61],$Vt=[1,62],$Vu=[1,63],$Vv=[1,64],$Vw=[1,65],$Vx=[1,66],$Vy=[1,67],$Vz=[1,68],$VA=[1,69],$VB=[1,70],$VC=[1,71],$VD=[1,72],$VE=[17,26,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],$VF=[17,26,39,43,48,49,50,51,52,53,54,55],$VG=[17,26,39,43,44,45,47,48,49,50,51,52,53,54,55],$VH=[17,26,48,49,50,51,52,53,54,55],$VI=[17,26,52,53,54,55];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"LIS_INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"DECLARACION":7,"ASIGNACION":8,"PRINT":9,"WHILE":10,"DOWHILE":11,"FOR":12,"TIPO":13,"LISTA_ID":14,"=":15,"EX":16,";":17,",":18,"identificador":19,"while":20,"CONDICION":21,"BLOQUE_LISINSTRUCCIONES":22,"{":23,"}":24,"(":25,")":26,"CON_FOR":27,"do":28,"for":29,"int":30,"double":31,"boolean":32,"char":33,"String":34,"System":35,".":36,"out":37,"print":38,"-":39,"!":40,"++":41,"--":42,"+":43,"*":44,"/":45,"^":46,"mod":47,"<":48,">":49,">=":50,"<=":51,"==":52,"!=":53,"||":54,"&&":55,"entero":56,"decimal":57,"true":58,"false":59,"cadena":60,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",15:"=",17:";",18:",",19:"identificador",20:"while",23:"{",24:"}",25:"(",26:")",28:"do",29:"for",30:"int",31:"double",32:"boolean",33:"char",34:"String",35:"System",36:".",37:"out",38:"print",39:"-",40:"!",41:"++",42:"--",43:"+",44:"*",45:"/",46:"^",47:"mod",48:"<",49:">",50:">=",51:"<=",52:"==",53:"!=",54:"||",55:"&&",56:"entero",57:"decimal",58:"true",59:"false",60:"cadena"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,5],[7,3],[14,3],[14,1],[10,3],[22,3],[22,2],[21,3],[27,1],[11,5],[12,5],[13,1],[13,1],[13,1],[13,1],[13,1],[8,4],[9,9],[16,2],[16,2],[16,2],[16,2],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,3]],
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
case 3: case 13:
 this.$ = [$$[$0]]; 
break;
case 4: case 5: case 6: case 7: case 8: case 9: case 18:
this.$ = $$[$0];
break;
case 10:
this.$ = new Declaracion($$[$0-4], $$[$0-3], $$[$0-1], _$.first_line, _$.first_column);
break;
case 11:
this.$ = new Declaracion($$[$0-2], $$[$0-1], null, _$.first_line, _$.first_column);
break;
case 12:
 this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 14:
this.$ = new While($$[$0-1], $$[$0], _$.first_line, _$.first_column);
break;
case 15: case 17:
this.$ = $$[$0-1];
break;
case 16:
this.$ = [];
break;
case 19:
this.$ = new DoWhile($$[$0-1], $$[$0-3], _$.first_line, _$.first_column);
break;
case 20:
this.$ = new For($$[$0-2], $$[$0], _$.first_line, _$.first_column);
break;
case 21:
this.$ = new Tipo(types.int);
break;
case 22:
this.$ = new Tipo(types.double);
break;
case 23:
this.$ = new Tipo(types.boolean);
break;
case 24:
this.$ = new Tipo(types.char);
break;
case 25:
this.$ = new Tipo(types.String);
break;
case 26:
 this.$ = new Asignacion($$[$0-3], $$[$0-1], _$.first_line, _$.first_column); 
break;
case 27:
 this.$ = new Imprimir($$[$0-2], _$.first_line, _$.first_column);
break;
case 28:
 this.$ = new Aritmetica($$[$0], null, '-', _$.first_line, _$.first_column); 
break;
case 29:
 
break;
case 30:
 this.$ = new Aritmetica($$[$0-1], null, '++', _$.first_line, _$.first_column); 
break;
case 31:
 this.$ = new Aritmetica($$[$0-1], null, '--', _$.first_line, _$.first_column); 
break;
case 32:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '+', _$.first_line, _$.first_column); 
break;
case 33:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '-', _$.first_line, _$.first_column); 
break;
case 34:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '*', _$.first_line, _$.first_column); 
break;
case 35:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '/', _$.first_line, _$.first_column); 
break;
case 36:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '^', _$.first_line, _$.first_column); 
break;
case 37:
 this.$ = new Aritmetica($$[$0-2], $$[$0], '%', _$.first_line, _$.first_column); 
break;
case 38:
 this.$ = new Relacional($$[$0-2], $$[$0], '<', _$.first_line, _$.first_column); 
break;
case 39:
 this.$ = new Relacional($$[$0-2], $$[$0], '>', _$.first_line, _$.first_column); 
break;
case 40:
 this.$ = new Relacional($$[$0-2], $$[$0], '>=', _$.first_line, _$.first_column);
break;
case 41:
 this.$ = new Relacional($$[$0-2], $$[$0], '<=', _$.first_line, _$.first_column); 
break;
case 42:
 this.$ = new Relacional($$[$0-2], $$[$0], '==', _$.first_line, _$.first_column);
break;
case 43:
 this.$ = new Relacional($$[$0-2], $$[$0], '!=', _$.first_line, _$.first_column); 
break;
case 44:
 this.$ = new Logica($$[$0-2], $$[$0], '&&', _$.first_line, _$.first_column); 
break;
case 45:
 this.$ = new Logica($$[$0-2], $$[$0], '||', _$.first_line, _$.first_column); 
break;
case 46:
 this.$ = new Primitive(new Tipo(types.int), Number($$[$0]), _$.first_line, _$.first_column);
break;
case 47:
 this.$ = new Primitive(new Tipo(types.decimal), Number($$[$0]), _$.first_line, _$.first_column); 
break;
case 48: case 49:
 this.$ = new Primitive(new Tipo(types.boolean), Boolean($$[$0]), _$.first_line, _$.first_column);
break;
case 50:
 this.$ = new Primitive(new Tipo(types.String), String($$[$0]), _$.first_line, _$.first_column);
break;
case 51:
 this.$ = new Primitive(new Tipo(types.char), String($$[$0]), _$.first_line, _$.first_column);
break;
case 52:
 this.$ = new Identificador($$[$0], _$.first_line, _$.first_column); 
break;
case 53:
 this.$ = $$[$0-1]; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,19:$V0,20:$V1,28:$V2,29:$V3,30:$V4,31:$V5,32:$V6,33:$V7,34:$V8,35:$V9},{1:[3]},{5:[1,21],6:22,7:4,8:5,9:6,10:7,11:8,12:9,13:10,19:$V0,20:$V1,28:$V2,29:$V3,30:$V4,31:$V5,32:$V6,33:$V7,34:$V8,35:$V9},o($Va,[2,3]),o($Va,[2,4]),o($Va,[2,5]),o($Va,[2,6]),o($Va,[2,7]),o($Va,[2,8]),o($Va,[2,9]),{14:23,19:[1,24]},{15:[1,25]},{36:[1,26]},{21:27,25:$Vb},{22:29,23:$Vc},{25:[1,31]},{19:[2,21]},{19:[2,22]},{19:[2,23]},{19:[2,24]},{19:[2,25]},{1:[2,1]},o($Va,[2,2]),{15:[1,32],17:[1,33],18:[1,34]},o($Vd,[2,13]),{16:35,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{37:[1,46]},{22:47,23:$Vc},{16:48,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{20:[1,49]},{4:50,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,19:$V0,20:$V1,24:[1,51],28:$V2,29:$V3,30:$V4,31:$V5,32:$V6,33:$V7,34:$V8,35:$V9},{16:53,19:$Ve,25:$Vf,27:52,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:54,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},o($Va,[2,11]),{19:[1,55]},{17:[1,56],39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA,53:$VB,54:$VC,55:$VD},{16:73,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:74,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},o($VE,[2,46]),o($VE,[2,47]),o($VE,[2,48]),o($VE,[2,49]),o($VE,[2,50]),o($VE,[2,51]),o($VE,[2,52]),{16:75,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{36:[1,76]},o($Va,[2,14]),{26:[1,77],39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA,53:$VB,54:$VC,55:$VD},{21:78,25:$Vb},{6:22,7:4,8:5,9:6,10:7,11:8,12:9,13:10,19:$V0,20:$V1,24:[1,79],28:$V2,29:$V3,30:$V4,31:$V5,32:$V6,33:$V7,34:$V8,35:$V9},o($Va,[2,16]),{26:[1,80]},{26:[2,18],39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA,53:$VB,54:$VC,55:$VD},{17:[1,81],39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA,53:$VB,54:$VC,55:$VD},o($Vd,[2,12]),o($Va,[2,26]),o($VE,[2,30]),o($VE,[2,31]),{16:82,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:83,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:84,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:85,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:86,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:87,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:88,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:89,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:90,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:91,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:92,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:93,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:94,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{16:95,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},o([17,26,39,41,42,43,44,45,47,48,49,50,51,52,53,54,55],[2,28],{46:$Vu}),o($VE,[2,29]),{26:[1,96],39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA,53:$VB,54:$VC,55:$VD},{38:[1,97]},o([17,23],[2,17]),{17:[1,98]},o($Va,[2,15]),{22:99,23:$Vc},o($Va,[2,10]),o($VF,[2,32],{41:$Vp,42:$Vq,44:$Vs,45:$Vt,46:$Vu,47:$Vv}),o($VF,[2,33],{41:$Vp,42:$Vq,44:$Vs,45:$Vt,46:$Vu,47:$Vv}),o($VG,[2,34],{41:$Vp,42:$Vq,46:$Vu}),o($VG,[2,35],{41:$Vp,42:$Vq,46:$Vu}),o($VE,[2,36]),o($VG,[2,37],{41:$Vp,42:$Vq,46:$Vu}),o($VH,[2,38],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv}),o($VH,[2,39],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv}),o($VH,[2,40],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv}),o($VH,[2,41],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv}),o($VI,[2,42],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz}),o($VI,[2,43],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz}),o([17,26,54],[2,44],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA,53:$VB,55:$VD}),o([17,26,54,55],[2,45],{39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA,53:$VB}),o($VE,[2,53]),{25:[1,100]},o($Va,[2,19]),o($Va,[2,20]),{16:101,19:$Ve,25:$Vf,33:$Vg,39:$Vh,40:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn},{26:[1,102],39:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz,52:$VA,53:$VB,54:$VC,55:$VD},{17:[1,103]},o($Va,[2,27])],
defaultActions: {16:[2,21],17:[2,22],18:[2,23],19:[2,24],20:[2,25],21:[2,1]},
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
case 3:return 57 
break;
case 4:return 56 
break;
case 5:return 60
break;
case 6:return 33
break;
case 7:return 44
break;
case 8:return 45
break;
case 9:return 42
break;
case 10:return 39
break;
case 11:return 41
break;
case 12:return 43
break;
case 13:return 44
break;
case 14:return 46
break;
case 15:return 47
break;
case 16:return 48
break;
case 17:return 49
break;
case 18:return 51
break;
case 19:return 50
break;
case 20:return 52
break;
case 21:return 53
break;
case 22:return 54
break;
case 23:return 55
break;
case 24:return 40
break;
case 25:return 25
break;
case 26:return 26  
break;
case 27:return 23
break;
case 28:return 24  
break;
case 29:return 17
break;
case 30:return 18
break;
case 31:return 15
break;
case 32:return 30
break;
case 33:return 31
break;
case 34:return 32
break;
case 35:return 33
break;
case 36:return 34
break;
case 37:return 58
break;
case 38:return 59
break;
case 39:return 'if'
break;
case 40:return 'else'
break;
case 41:return 'switch'
break;
case 42:return 'case'
break;
case 43:return 'break'
break;
case 44:return 'default'
break;
case 45:return 20
break;
case 46:return 28
break;
case 47:return 29
break;
case 48:return 'continue'
break;
case 49:return 35
break;
case 50:return 37
break;
case 51:return 38
break;
case 52:return 36
break;
case 53:return 19
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