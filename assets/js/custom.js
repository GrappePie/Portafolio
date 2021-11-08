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
  $(document).keydown(function(e){
    input += ('' + e.keyCode);
    if (input === key) return cb();
    if (!key.indexOf(input)) return;
    input = ('' + e.keyCode);
  });
}
var Snow = {
  el: "#particles", 
  density: 10000, // higher = fewer bits
  maxHSpeed: 5, // How much do you want them to move horizontally
  minFallSpeed: 2,
	canvas: null,
	ctx: null, 
  particles: [],
  colors: [],
  mp: 1,
  quit: false,
  init(){
    this.canvas = document.querySelector(this.el);
    this.ctx = this.canvas.getContext("2d");
    this.reset();
    requestAnimationFrame(this.render.bind(this));
    window.addEventListener("resize", this.reset.bind(this));
  },
  reset(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.particles = [];
    this.mp = Math.ceil(this.w * this.h / this.density);
		for(var i = 0; i < this.mp; i++)
		{
			var size = Math.random()*4+5;
			this.particles.push({
				x: Math.random()*this.w, //x-coordinate
				y: Math.random()*this.h, //y-coordinate
				w: size,
				h: size,
				vy: this.minFallSpeed + Math.random(), //density
				vx:(Math.random()*this.maxHSpeed) - this.maxHSpeed/2,
				fill: "#ffffff",
				s: (Math.random() * 0.2) - 0.1
			});
		}
  },
  
  render(){
		this.ctx.clearRect(0, 0, this.w, this.h);
		this.particles.forEach((p,i) => {
      p.y += p.vy;
			p.x += p.vx;
			this.ctx.fillStyle = p.fill;
			this.ctx.fillRect(p.x, p.y, p.w, p.h);
      if(p.x > this.w+5 || p.x < -5 || p.y > this.h){
        p.x = Math.random()*this.w;
        p.y = -10;
			}
    });
    if(this.quit){
      return;
    }
		requestAnimationFrame(this.render.bind(this));
  },
  destroy(){
    this.quit = true;
  }
	
};
var alertKonamiCode, 
title,
text1, 
text2,
about,
desc,
exp,
projects,
project_desc1,
project_desc2,
gang,
volume_title,
goToPage,
goToProject,
yeet;


$(document).ready(function () {
  var volume = $('#volume');
  var Overworld_full_power = new Audio('assets/audio/Overworld (full power).ogg');
  var Overworld_pacefull = new Audio('assets/audio/Overworld (Peacefull).ogg');
  var timecheck = window.setInterval(function(){
    let hours = new Date().getHours();
    hours = (hours)%24;
    let mid='am';
    if(hours==0){ //At 00 hours we need to show 12 am
    hours=12;
    }
    else if(hours>=12)
    {
    hours=hours%12;
    mid='pm';
    }
  if(mid == 'am'){
    Overworld_pacefull.muted = false;
    Overworld_full_power.muted = true;
  }else{
    Overworld_full_power.muted = false;
    Overworld_pacefull.muted = true;
  }
  }, 1000);
  Overworld_full_power.volume = 0.5;
  Overworld_pacefull.volume = 0.5;
  Overworld_full_power.loop = true;
  Overworld_pacefull.loop = true;
  Overworld_full_power.play();
  Overworld_full_power.muted = true;
  Overworld_pacefull.play();
  Overworld_pacefull.muted = true;
  $('#volume').mousemove(function(){
    Overworld_full_power.volume = this.value/100;
    Overworld_pacefull.volume = this.value/100;
  }).change(function(){
    Overworld_full_power.volume = this.value/100;
    Overworld_pacefull.volume = this.value/100;
  });
});

$.get('https://api.db-ip.com/v2/free/self')
.done(function(data) {
  if(data.countryCode == 'MX'){
    alertKonamiCode = "código konami activado, haga clic en Aceptar para habilitar el modo Kirby";
    title = "modo kirby habilitado";
    text1 = "¿Disfrutas de este huevo de Pascua? ¡Destaca este repositorio en GitHub <a href='https://github.com/GrappePie' target=_blank'>aquí</a>!";
    text2 = "¡La página se actualizará automáticamente una vez que termine la canción!";
    about = "Acerca de";
    desc = "Hola! Me llamo Michael (conocido como GrappePie en línea), y estudié ingeniería en Sistemas Computacionales. Me gusta <a href='https://github.com/GrappePie' target='_blank'>programar</a>, la <a href='https://soundcloud.com/grappe-pie' target='_blank'>música</a>, los <a href='https://steamcommunity.com/id/grappepie/' target='_blank'>videojuegos</a> y el <a href='https://myanimelist.net/animelist/GrappePie' target='_blank'>anime</a>!";
    exp = "Conocimientos de programación";
    projects = "Proyectos";
    project_desc1 = "Manual de Keep Talking and Nobody Explodes interactivo.";
    project_desc2 = "Bot de música para Discord.";
    goToPage = "Ir a la pagina";
    goToProject = "Ir al proyecto";
    yeet = "Este sition es 10x mejor con Javascript activado.";
    gang = '["Desarrollador de Videojuegos", "Desarrollador de Backend", "Desarrollador de Frontend", "Desarrollador Web"]';
    volume_title = 'Volumen';
  }else{
    alertKonamiCode = "konami code activated, click ok to enable kirby mode";
    title = "kirby mode enabled";
    text1 = "Do you enjoy this Easter egg? Highlight this repository on GitHub <a href='https://github.com/GrappePie' target=_blank'> here </a>!";
    text2 = "The page automatically updates once the song is over!";
    about = "About";
    desc = "Hi! My name is Michael (known as GrappePie online), and I studied Computer Systems engineering. I like <a href='https://github.com/GrappePie' target='_blank'>programing</a>, <a href = 'https://soundcloud.com/grappe-pie' target = ' _blank '>music</a>, <a href='https://steamcommunity.com/id/grappepie/' target='_blank'>video games</a> and <a href =' https://myanimelist.net/animelist/GrappePie 'target =' _ blank '>anime</a>!";
    exp = "Programming knowledge";
    projects = "Projects";
    project_desc1 = "Interactive manual of Keep Talking and Nobody Explodes.";
    project_desc2 = "Music bot for Discord.";
    goToPage = "Go to page";
    goToProject = "Go to project";
    yeet = "This site is 10x better with Javascript enabled.";
    gang = '["Game Developer", "Backend Developer", "Frontend Developer", "Web Developer"]';
    volume_title = 'Volume';
  }
  $('#about').text(about);
  $('#desc').html(desc);
  $('#exp').text(exp);
  $('#projects').text(projects);
  $('#project-desc1').html(project_desc1);
  $('#project-desc2').html(project_desc2);
  $('.goToPage').text(goToPage);
  $('.goToProject').text(goToProject);
  $('.yeet').text(yeet);
  $('#gang').attr("data-rotate",gang);
  $('#volume_title').text(volume_title);
})

// Easter Egg
onKonamiCode(() => {
  Overworld_full_power.muted = true;
  Overworld_pacefull.muted = true;
  let audio = new Audio('assets/audio/kirbe.ogg');
  audio.volume = 0.5;
  audio.play();
  $('#volume').mousemove(function(){
    audio.volume = this.value/100;
  }).change(function(){
    audio.volume = this.value/100;
  });
  alert(alertKonamiCode);
  $('body').css("background","url('assets/img/kirby.webp')");
  $('body').css("color",'white');
  $('#about').text(title);
  $('#icon').attr("src",'assets/img/kirby.gif');
  $('#titletext').html('Kirby <3');
  $('#kirby1').html(text1);
  $('#kirby2').html(text2);
  $('#content').hide();
  audio.onended = () => { location.reload(); };
});

// Wallpapers
const getCurrentSeason = () => {
  var now = new Date();
  var currentYear = now.getFullYear();
  
  if (now < new Date(currentYear, 2, 1))  return 'winter';
  if (now < new Date(currentYear, 5, 1))  return 'spring';
  if (now < new Date(currentYear, 8, 1))  return 'summer';
  if (now < new Date(currentYear, 11, 1)) return 'autumn';
  return 'winter';
};

switch (getCurrentSeason()) {
  case 'winter':
    $('body').css("background","url('assets/img/seasons/winter.webp')");
    $('#icon').attr("src",'assets/img/winter.gif');
    var confetti = Snow.init();
    break;
  case 'spring':
    $('body').css("background","url('assets/img/seasons/spring.webp')");
    $('#icon').attr("src",'assets/img/spring.gif');
    break;
  case 'summer':
    $('body').css("background","url('assets/img/seasons/summer.webp')");
    $('#icon').attr("src",'assets/img/summer.gif');
    break;
  case 'autumn':
    $('body').css("background","url('assets/img/seasons/autumn.webp')");
    $('#icon').attr("src",'assets/img/autumn.gif');
    $('#titletext').css('color', 'white');
    $('#gang').css('color', 'white');
    $('#volume_title').css('color', 'white');
    break;
}

