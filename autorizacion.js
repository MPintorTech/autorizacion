function autorizacion(){
    var usuario=document.getElementById('usuario').value;
    if(usuario==""){
        document.getElementById('mensaje').value="Debe escribir un nombre de usuario";
    }
    else{
        if(usuario=="guess" || usuario=="invitado" || usuario=="usuario"){
            document.getElementById('mensaje').value="usuario autorizado";
        }
        else{
            document.getElementById('mensaje').value="usuario NO encontrado";
        }

    }
}
function salir(){
    window.close();
}