AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back',
});

const skills = [
 /*
  Language, Percentage, Color
 */
  ["HTML", 90, "#070"],
  ["CSS", 70, "#00f"],
  ["Javascript", 90, "#f00"],
];

skills.sort((a, b) => {
  return b[1] - a[1];
});

for(let i = 0; i < skills.length; i++) {
  
  var rate = skills[i][1];
  if(rate === 100) {
    rate = "Extreme Skill";
  }
  else if(rate >= 90) {
    rate = "Quite Skilled";
  }
  else if(rate >= 80) {
    rate = "Well Known";
  } 
  else if(rate >= 60) {
    rate = "Known";
  }
  else if(rate >= 50) {
    rate = "Can Write In";
  }
  else {
    rate = "Still Learning";
  }
  
  const item = document.createElement("div");
        item.classList.add("skill-item");
        item.setAttribute("data-aos", "fade-left");
  
  const bar = document.createElement("div");
        bar.classList.add("skill-bar");
        bar.style.backgroundColor = skills[i][2];
        bar.style.width = skills[i][1] + "%";
        bar.innerText = skills[i][0] + " (" + rate + ")";
        
  item.append(bar);
  document.querySelector("#skill-graph").append(item);
  
}
