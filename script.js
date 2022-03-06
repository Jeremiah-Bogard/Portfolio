var program_container = document.getElementById("projects-contain");
var language_container = document.getElementById("lang-box");
var programs_section = document.getElementById("projects");

AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back',
});

function programs(data) {
  for(let i = 0; i < data.length; i++) {
    var tile = document.createElement("div")
    tile.classList.add("project-tile");
    tile.innerHTML = `<a target='_blank' href='${data[i].link}'><img class='project-img' src='program_images/${data[i].image_name}' alt='Program Image'><h2>${data[i].name}</h2></a><p class='project-info'>${data[i].description}</p>`;
    program_container.appendChild(tile);
  }
}
function languages(data) {
  for(let i = 0; i < data.length; i++) {
    var tile = document.createElement("div");
   	tile.classList.add("lang-tile");
    tile.innerHTML = `<img src='language_logos/${data[i].image_name}' alt='Language Logo'><a href='javascript:updateLanguage("${data[i].name}")'><h2>${data[i].name}</h2></a><p>${data[i].description}</p><a href='${data[i].example_link}' target='_blank'><small>Example: ${data[i].example_name}</small></a>`;
    language_container.append(tile);
  }
}

fetch("api.json")
.then((res) => res.json())
.then ((data) => {
  programs(data.programs);
  languages(data.languages);
}).catch((err) => {
  console.error(err);
});

function updateLanguage(to) {
  if(to === "all") return;
  fetch("api.json")
  .then(res => res.json())
  .then((data) => {
    var programs_list = [];
    for(let i = 0; i < data.programs.length; i++) {
      for(let j = 0; j < data.programs[i].languages.length; j++) {
        var newData = data.programs[i].languages[j];
        if(newData.toLowerCase() === to.toLowerCase()) {
          programs_list.push(data.programs[i]);
          break;
        }
      }
    }
    program_container.innerHTML = "";
    if(programs_list.length === 0) {
      program_container.innerHTML = `<p>I have not published any programs with the language ${to}</p>`;
    } else {
      programs(programs_list);
    }
    programs_section.scrollIntoView();
  }).catch((err) => console.error(err));
}

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