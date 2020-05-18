function Send(){

    //var texto = document.getElementById("operacion").value;
    var tprin=document.getElementById('txtSalida').value;
    console.log(tprin);

    var url='http://localhost:8080/AnalizFile/';

    $.post(url,{text:tprin},function(data,status){
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




        }else{
            alert("Error estado de conexion:"+status);
        }
    });
}