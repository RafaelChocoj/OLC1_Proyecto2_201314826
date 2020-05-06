function Send(){

    //var texto = document.getElementById("operacion").value;
    var tprin=document.getElementById('txtSalida').value;
    console.log(tprin);

    var url='http://localhost:8080/AnalizFile/';

    $.post(url,{text:tprin},function(data,status){
        if(status.toString()=="success"){
            console.log(data.toString());
            alert("El resultado es: "+data.toString());
        }else{
            alert("Error estado de conexion:"+status);
        }
    });
}