document.addEventListener("DOMContentLoaded", function () {
    let bloqueDiv = document.getElementById("div");
    bloqueDiv.addEventListener("click", alerta);

    function alerta(){
        alert("Hola soy el div!");
    }
});