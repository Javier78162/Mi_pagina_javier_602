function mostarMensaje (){
    let mensaje=document.getElementById("sobre_mi");
    mensaje .InnerHTML ="🐾 cuida y  protegue a los perros";
    mensaje.style.display ="black";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    },50);
}
function mostar_mensaje (){
    let mensaje=document.getElementById("mostrar mensaje");
    mensaje .InnerHTML ="🐾 cuida y  protegue a los perros";
    mensaje.style.display ="block";
    setTimeout(()=> {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    },50);
}