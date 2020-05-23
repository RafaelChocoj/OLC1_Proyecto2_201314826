function Send(){

    /*principal*/
    //var texto = document.getElementById("operacion").value;
    var tprin=document.getElementById('txtSalida').value;
    console.log(tprin);

    /*original*/
    let list_copias = new Array();
    list_copias.push(tprin);

    /*copias*/
    for(var i=0;i<lista.length;i++){
        //console.log(lista[i].pestana);
        if(lista[i] != null){
          contenido_tempo=document.getElementById(lista[i].pestana).value;
          list_copias.push(contenido_tempo);
        }
    }
    

    var url='http://localhost:8080/AnalizFile/';

    //$.post(url,{text:tprin},function(data,status){
    $.post(url,{text:list_copias},function(data,status){
        if(status.toString()=="success"){
            //console.log(data.toString());
            console.log(data);
            //alert("++El resultado es: "+data.toString());

            /////////alert(data);
            if (data[3] == "SE"){
                alert("Error!!, Se encontraron algunos errores\nen el analisis de la entrada");
            } else {
                alert("Termino el analisis");
            }
            


            var rep_ast = data[0];
            var elemento = document.getElementById('contenido-variables');
            elemento.innerHTML = rep_ast;

            $('#html').jstree();

            /*para generar reporte de errores*/
            var html_erros = data[1];
            //console.log(html_erros);
            var elemento = document.getElementById('contenido-html');
            elemento.innerHTML = html_erros;

            /*copuas clase*/
            var html_clasecop = data[2];
            var elemento = document.getElementById('contenido-copy_clase');
            elemento.innerHTML = html_clasecop;




        }else{
            alert("Error estado de conexion:"+status);
        }
    });
}