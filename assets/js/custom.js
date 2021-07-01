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

var alertKonamiCode, title, text1, text2 = "";
var about = document.getElementById('about');
var desc = document.getElementById('desc');
var exp = document.getElementById('exp');
var projects = document.getElementById('projects');
var project_desc1 = document.getElementById('project-desc1');
var project_desc2 = document.getElementById('project-desc2');
var gang = document.getElementById('gang');
var goToPage = document.getElementsByClassName('goToPage')[0];
var goToProject = document.getElementsByClassName('goToProject')[0];
var yeet = document.getElementsByClassName('yeet');

fetch('https://api.db-ip.com/v2/free/self')
  .then(response => response.json())
  .then(data => {
    console.log(data.countryCode);
    if(data.countryCode == 'US'){
      alertKonamiCode = "konami code activated, click ok to enable kirby mode";
      title = "kirby mode enabled";
      text1 = "Do you enjoy this Easter egg? Highlight this repository on GitHub <a href='https://github.com/GrappePie' target=_blank'> here </a>!";
      text2 = "The page automatically updates once the song is over!";
      about.innerText = "About";
      desc.innerHTML = "Hi! My name is Michael (known as GrappePie online), and I studied Computer Systems engineering. I like <a href='https://github.com/GrappePie' target='_blank'>programing</a>, <a href = 'https://soundcloud.com/grappe-pie' target = ' _blank '>music</a>, <a href='https://steamcommunity.com/id/grappepie/' target='_blank'>video games</a> and <a href =' https://myanimelist.net/animelist/GrappePie 'target =' _ blank '>anime</a>!";
      exp.innerHTML = "Programming knowledge";
      projects.innerHTML = "Projects";
      project_desc1.innerHTML = "Interactive manual of Keep Talking and Nobody Explodes.";
      project_desc2.innerHTML = "Music bot for Discord.";
      goToPage.text = "Go to page";
      goToProject.text = "Go to project";
      yeet.innerHTML = "This site is 10x better with Javascript enabled.";
      gang.dataset.rotate = '["Game Developer", "Backend Developer", "Frontend Developer", "Web Developer"]';
    }
    if(data.countryCode == 'MX'){
      alertKonamiCode = "código konami activado, haga clic en Aceptar para habilitar el modo Kirby";
      title = "modo kirby habilitado";
      text1 = "¿Disfrutas de este huevo de Pascua? ¡Destaca este repositorio en GitHub <a href='https://github.com/GrappePie' target=_blank'>aquí</a>!";
      text2 = "¡La página se actualizará automáticamente una vez que termine la canción!";
      about.innerText = "Acerca de";
      desc.innerHTML = "Hola! Me llamo Michael (conocido como GrappePie en línea), y estudié ingeniería en Sistemas Computacionales. Me gusta <a href='https://github.com/GrappePie' target='_blank'>programar</a>, la <a href='https://soundcloud.com/grappe-pie' target='_blank'>música</a>, los <a href='https://steamcommunity.com/id/grappepie/' target='_blank'>videojuegos</a> y el <a href='https://myanimelist.net/animelist/GrappePie' target='_blank'>anime</a>!";
      exp.innerHTML = "Conocimientos de programación";
      projects.innerHTML = "Proyectos";
      project_desc1.innerHTML = "Manual de Keep Talking and Nobody Explodes interactivo.";
      project_desc2.innerHTML = "Bot de música para Discord.";
      goToPage.text = "Ir a la pagina";
      goToProject.text = "Ir al proyecto";
      yeet.innerHTML = "Este sition es 10x mejor con Javascript activado.";
      gang.dataset.rotate = '["Desarrollador de Videojuegos", "Desarrollador de backend", "Desarrollador de frontend", "Desarrollador web"]';
    }
  });

// Easter Egg
onKonamiCode(() => {
  let audio = new Audio('assets/audio/kirbe.ogg');
  audio.play();
  alert(alertKonamiCode);
  document.body.style.background = "url('assets/img/kirby.webp')";
  document.body.style.color = 'white';
  document.title = title;
  document.getElementById('icon').src = 'assets/img/kirby.gif';
  document.getElementById('titletext').innerHTML = 'Kirby <3';
  document.getElementById('kirby1').innerHTML = text1;
  document.getElementById('kirby2').innerHTML = text2;
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
