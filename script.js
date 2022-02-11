var container = document.getElementById("projects-contain");

AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back',
});

var programs = [
  ["https://jeremiah-bogard.github.io/Tic-Tac-Toe", "Your classic Tic Tac Toe game!!! A Player vs Player game. Created using HTML, CSS, and mostly Javascript.", "TicTacToe22.png", ["HTML", "CSS", "JavaScript"]],
  ["https://jeremiah-bogard.github.io/Technical-Documentation", "A small Introduction to HTML. Made for responsive layout project from Free Code Camp with HTML, CSS, and Javascript.", "TechnicalDocs.png", ["HTML", "CSS", "JavaScript"]],
  ["https://jeremiah-bogard.github.io/Vroom-Shipping", "A landing page for Vroom Shipping which turns out to be a real company. It was created mostly for responsiveness by combining some HTML and CSS", "VroomShipping.png", ["HTML", "CSS"]],
  ["https://jeremiah-bogard.github.io/Portfolio", "My portfolio (this website) where you can find information about me and see some of my programs. Created using HTML, CSS, and Javascript.", "portfolio.png", ["HTML", "CSS", "JavaScript"]],
];

for(let i = 0; i < programs.length; i++) {

    var tile = document.createElement("article");
        tile.classList.add("project-tile");

	tile.innerHTML = `<a target='_blank' href='${programs[i][0]}'><img class='project-img' src='program_images/${programs[i][2]}' alt='Program Image'><p class='project-info'>${programs[i][1]}</p></a>`;

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
	      tile.innerHTML = `<a target='_blank' href='${programs[i][0]}'><img class='project-img' src='program_images/${programs[i][2]}' alt='Program Image'><p class='project-info'>${programs[i][1]}</p></a>`;

	  container.append(tile);
        }

      }
    }

  }
  
}
updateLang("all");


document.getElementById("gitForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Function not avaible");
});
