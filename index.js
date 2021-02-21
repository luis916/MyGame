
const sonido = document.getElementById('sonido');
const body = document.getElementById('body');
const sinSonido = document.getElementById('sinSonido');
const h1 =document.getElementById('h1');
var sonar = document.createElement('audio');
sonido.src = 'sonido.ico';
//body.style.backgroundImage = 'url(musicaDetenida.png)';

function sonarTrue(){
   
   sonido.addEventListener('click',()=>{
   sonar.src = 'audio.mp3';
   sonar.autoplay = true;
   sinSonido.style.display = 'block';
   sonido.style.display = 'none';
   h1.style.backgroundImage = 'url(gif.gif)';
   setTimeout(function(){h1.style.backgroundImage = 'url(muscaDetenida.PNG)';sonido.style.display = 'block';sinSonido.style.display = 'none';},1000*57)
   });}
function sonarFalse(){
   sinSonido.addEventListener('click',()=>{
      sonar.src = 'audio.mp3';
      sonar.autoplay = false;
      sonido.style.display = 'block';
      sinSonido.style.display = 'none';
      h1.style.backgroundImage = 'url(muscaDetenida.PNG)';

   });
}

   sonarTrue();
   sonarFalse();
