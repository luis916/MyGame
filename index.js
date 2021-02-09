


var reproducir = document.querySelector("#reproducir");
var audio = document.createElement("audio");



function reproducirAudio()
{
  var imagen = document.getElementById("imagen");
  var mario = document.getElementById("mario");
  imagen.style.display = "block";
  var palabras = ["Girando...","Espere...","Ya viene...","Ya casi..."];
  var random = Math.random()*3;
  reproducir.value = palabras[Math.round(random)];
  document.body.style.backgroundColor = "blue";
  audio.src = "sonidoDados.mp3";
  audio.play();
  var valorDado = document.getElementById("valorDado");
  var numAleatorio = Math.random()*6
  valorDado.style.display = "block";
  valorDado.innerHTML = "Avanzas "+Math.round(numAleatorio)+" espacios";
  mario.style.left = `${Math.round(numAleatorio)*Math.round(numAleatorio)}px`;

  var ganaste = ``;
   if (Math.round(numAleatorio)>=3)
   {
     var h1 = document.createElement("h6");
     var textoH1 = document.createTextNode("Ganaste!!!");
     h1.appendChild(textoH1);
     document.body.appendChild(h1);
   }  


}





