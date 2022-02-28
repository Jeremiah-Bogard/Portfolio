var container = document.getElementById("projects-contain");

AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back',
});

var programs = [
  ["https://jeremiah-bogard.github.io/Tic-Tac-Toe", "Your classic Tic Tac Toe game!!! A Player vs Player game. Created using HTML, CSS, and mostly Javascript.", "TicTacToe22.png", ["HTML5", "CSS3", "JavaScript"]],
  ["https://jeremiah-bogard.github.io/Technical-Documentation", "A small Introduction to HTML. Made for responsive layout project from Free Code Camp with HTML, CSS, and Javascript.", "TechnicalDocs.png", ["HTML5", "CSS3", "JavaScript"]],
  ["https://jeremiah-bogard.github.io/Vroom-Shipping", "A landing page for Vroom Shipping which turns out to be a real company. It was created mostly for responsiveness by combining some HTML and CSS", "VroomShipping.png", ["HTML5", "CSS3"]],
  ["https://jeremiah-bogard.github.io/Portfolio", "My portfolio (this website) where you can find information about me and see some of my programs. Created using HTML, CSS, and Javascript.", "Portfolio22.png", ["HTML5", "CSS3", "JavaScript"]],
];
var langs = [
/*
  ["NAME", "LOGO IMAGE LINK", "MY SKILLS OF THIS LANGUAGE", "EXAMPLE"]
*/

  ["HTML5", "html5.png", "I know this language extremely well and have been creating tons of websites with it.", "https://jeremiah-bogard.github.io/Portfolio"],
  ["CSS3", "css3.png", "I've been using this language and know it fairly well. I am still learning how to make a website responsive by using CSS.", "https://jeremiah-bogard.github.io/Portfolio"],
  ["JavaScript", "javascript.png", "A very useful language that I use for changing parts of a webpage. I am still learning all of the uses for javascript.", "https://jeremiah-bogard.github.io/Portfolio"],
  ["Python", "python.png", "I become quite skilled at this language. I've used it for creating command line games and sending information accross the internet.", "https://jeremiah-bogard.github.io/Portfolio"]
];

for(let i = 0; i < programs.length; i++) {

    var linkSplit = programs[i][0].split("/");
    var title = linkSplit[linkSplit.length-1];

    var tile = document.createElement("article");
        tile.classList.add("project-tile");

	tile.innerHTML = `<a target='_blank' href='${programs[i][0]}'><img class='project-img' src='program_images/${programs[i][2]}' alt='Program Image'><h2>${title}</h2></a><p class='project-info'>${programs[i][1]}</p>`;

	container.append(tile);
} 

function updateLang(lang) {

  var programsSection = document.getElementById("projects");
      programsSection.scrollIntoView();

  // Display all programs that use the 'lang' language
  if(lang === "all") {
    return
  } else {

    container.innerHTML = "";

    for(let i = 0; i < programs.length; i++) {
      for(let j = 0; j < programs[i][3].length; j++) {

	if(programs[i][3][j].toLowerCase() === lang.toLowerCase()) {
	  
          var tile = document.createElement("article");
              tile.classList.add("project-tile");
	      tile.innerHTML = `<a target='_blank' href='${programs[i][0]}'><img class='project-img' src='program_images/${programs[i][2]}' alt='Program Image'></a><p class='project-info'>${programs[i][1]}</p>`;

	  container.append(tile);
        }

      }
    }

  }
  
}
updateLang("all");


function showLangs() {

  for(let i = 0; i < langs.length; i++) {

    var linkSplit = langs[i][3].split("/");
    var example = linkSplit[linkSplit.length-1];
    
    var container = document.getElementById("lang-box");
    
    var tile = document.createElement("article");
	tile.classList.add("lang-tile");
        tile.innerHTML = `<img src='language_logos/${langs[i][1]}' alt='Language Logo'><a href='javascript:updateLang("${langs[i][0]}")'><h2>${langs[i][0]}</h2></a><p>${langs[i][2]}</p><a href='${langs[i][3]}' target='_blank'><small>Example: ${example}</small></a>`;

    container.append(tile);

  }

}
showLangs();

const musicBttn = document.getElementById('music')
const musicAudio = document.getElementById('musicAudio')
var musicIs = "Off";

musicBttn.addEventListener('click', () => {
  if(musicIs === "Off") {
    musicAudio.play();
    musicIs = "On";
  } else {
    musicAudio.pause();
    musicIs = "Off";
  }
  document.getElementById('musicOnOff').innerText = musicIs;
})