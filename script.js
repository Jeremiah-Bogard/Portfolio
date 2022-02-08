AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back',
});

const langs = [
  "HTML5",
  "CSS3",
  "Javascript",
];

var currLang = 1;

function updateLang(dir) {

  let item = document.getElementById("lang-lang");

  if((dir === "left" && currLang > 0) || (dir === "right" && currLang < langs.length-1)) {

    if(dir === "left") {
      currLang--;
    } else {
      currLang++;
    }
    
    item.innerText = langs[currLang];
    
  }
  
}
updateLang("left");
