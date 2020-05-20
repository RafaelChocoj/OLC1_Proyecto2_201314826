function Send(){

    /*prindipal*/
    //var texto = document.getElementById("operacion").value;
    var tprin=document.getElementById('txtSalida').value;
    console.log(tprin);

    /*copias*/
    let copis_pesta = new Array();
    copis_pesta.push(tprin);
    copis_pesta.push("hola");
    copis_pesta.push("arich 22");

    var url='http://localhost:8080/AnalizFile/';

    //$.post(url,{text:tprin},function(data,status){
    $.post(url,{text:copis_pesta},function(data,status){
        if(status.toString()=="success"){
            //console.log(data.toString());
            console.log(data);
            //alert("++El resultado es: "+data.toString());
            alert(data);
            //console.log(data);

            var rep_ast = data[0];
            var elemento = document.getElementById('contenido-variables');
            elemento.innerHTML = rep_ast;

            $('#html').jstree();

            /*para generar reporte de errores*/
            var html_erros = data[1];
            //console.log(html_erros);
            var elemento = document.getElementById('contenido-html');
            elemento.innerHTML = html_erros;




        }else{
            alert("Error estado de conexion:"+status);
        }
    });
}