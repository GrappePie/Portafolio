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
var alertKonamiCode, title, text1, text2 = "";
var about = document.getElementById('about');
var desc = document.getElementById('desc');
var exp = document.getElementById('exp');
var projects = document.getElementById('projects');
var project_desc1 = document.getElementById('project-desc1');
var project_desc2 = document.getElementById('project-desc2');
var gang = document.getElementById('gang');
var volume = document.getElementById('volume');
var volume_title = document.getElementById('volume_title');
var goToPage = document.getElementsByClassName('goToPage')[0];
var goToProject = document.getElementsByClassName('goToProject')[0];
var yeet = document.getElementsByClassName('yeet');

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
  let Overworld_full_power = new Audio('assets/audio/Overworld (full power).ogg');
  let Overworld_pacefull = new Audio('assets/audio/Overworld (Peacefull).ogg');
  Overworld_full_power.volume = 0.5;
  Overworld_pacefull.volume = 0.5;
  Overworld_full_power.loop = true;
  Overworld_pacefull.loop = true;
  let now12 = new Date(),
    now = new Date();

    now12.setHours(0);
  if(now.getTime() >= now12.getTime()){
    Overworld_pacefull.play();
  }else{
    Overworld_full_power.play();
  }
  
  volume.onchange = function(val){
    Overworld_full_power.volume = val.target.valueAsNumber/100;
    Overworld_pacefull.volume = val.target.valueAsNumber/100;
  };
  }
}




fetch('https://api.db-ip.com/v2/free/self')
  .then(response => response.json())
  .then(data => {
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
      gang.dataset.rotate = '["Desarrollador de Videojuegos", "Desarrollador de Backend", "Desarrollador de Frontend", "Desarrollador Web"]';
      volume_title.innerHTML = 'Volumen';
    }else{
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
      volume_title.innerHTML = 'Volume';
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
    document.body.style.background = "url('assets/img/seasons/winter.webp')";
    var confetti = Snow.init();
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

