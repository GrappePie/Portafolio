/*
  ________                                 __________.__        
 /  _____/___________  ______ ______   ____\______   \__| ____  
/   \  __\_  __ \__  \ \____ \\____ \_/ __ \|     ___/  |/ __ \ 
\    \_\  \  | \// __ \|  |_> >  |_> >  ___/|    |   |  \  ___/ 
 \______  /__|  (____  /   __/|   __/ \___  >____|   |__|\___  >
        \/           \/|__|   |__|        \/                 \/ 
*/

// Konami code
const onKonamiCode = (cb) => { // https://stackoverflow.com/a/45576888
  let input = '';
  let key = '38384040373937396665';
  document.addEventListener('keydown', (e) => {
    input += ('' + e.keyCode);
    if (input === key) return cb();
    if (!key.indexOf(input)) return;
    input = ('' + e.keyCode);
  });
}

// Easter Egg
onKonamiCode(() => {
  let audio = new Audio('assets/audio/kirbe.ogg');
  audio.play();
  alert('código konami activado, haga clic en Aceptar para habilitar el modo Kirby');
  document.body.style.background = "url('assets/img/kirby.webp')";
  document.body.style.color = 'white';
  document.title = 'modo kirby habilitado';
  document.getElementById('icon').src = 'assets/img/kirby.gif';
  document.getElementById('titletext').innerHTML = 'Kirby <3';
  document.getElementById('kirby1').innerHTML = "¿Disfrutas de este huevo de Pascua? ¡Destaca este repositorio en GitHub <a href='https://github.com/GrappePie' target=_blank'>aquí</a>!";
  document.getElementById('kirby2').innerHTML = '¡La página se actualizará automáticamente una vez que termine la canción!';
  document.getElementById('content').style.display = 'none';
  audio.onended = () => { location.reload(); };
});

// Wallpapers
const getCurrentSeason = () => { // https://gist.github.com/neris/5ddff1ec5d421602a01b1c81fa3fc076
  var now = new Date();
  var currentYear = now.getFullYear();
  
  if (now < new Date(currentYear, 2, 1))  return 'winter';
  if (now < new Date(currentYear, 5, 1))  return 'spring';
  if (now < new Date(currentYear, 8, 1))  return 'summer';
  if (now < new Date(currentYear, 11, 1)) return 'autumn';
  return 'winter';
};

switch (getCurrentSeason()) { // https://gist.github.com/neris/5ddff1ec5d421602a01b1c81fa3fc076
  case 'winter':
    document.body.style.background = "url('assets/img/seasons/winter.webp')";
    break;
  case 'spring':
    document.body.style.background = "url('assets/img/seasons/spring.webp')";
    break;
  case 'summer':
    document.body.style.background = "url('assets/img/seasons/summer.webp')";
    break;
  case 'autumn':
    document.body.style.background = "url('assets/img/seasons/autumn.webp')";
    document.getElementById('titletext').setAttribute('style', 'color: white !important;');
    document.getElementById('gang').setAttribute('style', 'color: white !important;');
    break;
}
