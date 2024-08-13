document.addEventListener("DOMContentLoaded", function () {
    let bloqueDiv = document.getElementById("div");
    let boton=document.getElementById("boton");

    bloqueDiv.addEventListener("click", alertaDiv);
    boton.addEventListener("click", alertaBoton);

    function alertaDiv(){
        alert("Hola soy el div!");
    }

    function alertaBoton(){
        alert("Hola soy el botón!");
        event.stopPropagation();
    }

});
