let one = document.getElementById("one") 
let two = document.getElementById("two") 
let three = document.getElementById("three") 
let four = document.getElementById("four") 
let five = document.getElementById("five") 

one.addEventListener("click", function1);
two.addEventListener("click", function2);
three.addEventListener("click", function3);
four.addEventListener("click", function4);
five.addEventListener("click", function5);

let p = document.getElementsByTagName("P");
let h2 = document.getElementsByTagName("H2");
let arrow = document.querySelectorAll("img.arrow"); 

function function1() {
  if (p[0].style.display === "none" || (p[0].style.display === "")) {
    p[0].style.display = "block"; 
    h2[0].style.color = "hsl(238, 29%, 16%)"; 
    h2[0].style.fontWeight = "700"; 
    arrow[0].style.transform = "rotate(180deg)"; 
  } else {
    p[0].style.display = "none";
    h2[0].style.fontWeight = "400"; 
    h2[0].style.color = "hsl(237, 12%, 33%)"; 
    arrow[0].style.transform = "rotate(0deg)"; 
  }
}

function function2() {
  if (p[1].style.display === "none" || (p[1].style.display === "")) {
    p[1].style.display = "block"
    h2[1].style.color = "hsl(238, 29%, 16%)"; 
    h2[1].style.fontWeight = "700"; 
    arrow[1].style.transform = "rotate(180deg)"; 
  } else {
    p[1].style.display = "none";
    h2[1].style.fontWeight = "400"; 
    h2[1].style.color = "hsl(237, 12%, 33%)"; 
    arrow[1].style.transform = "rotate(0deg)"; 
  }
}

function function3() {
  if (p[2].style.display === "none" || (p[2].style.display === "")) {
    p[2].style.display = "block"
    h2[2].style.color = "hsl(238, 29%, 16%)"; 
    h2[2].style.fontWeight = "700"; 
    arrow[2].style.transform = "rotate(180deg)"; 
  } else {
    p[2].style.display = "none";
    h2[2].style.fontWeight = "400"; 
    h2[2].style.color = "hsl(237, 12%, 33%)"; 
    arrow[2].style.transform = "rotate(0deg)"; 
  }
}

function function4() {
  if (p[3].style.display === "none" || (p[3].style.display === "")) {
    p[3].style.display = "block"
    h2[3].style.color = "hsl(238, 29%, 16%)"; 
    h2[3].style.fontWeight = "700"; 
    arrow[3].style.transform = "rotate(180deg)"; 
  } else {
    p[3].style.display = "none";
    h2[3].style.fontWeight = "400"; 
    h2[3].style.color = "hsl(237, 12%, 33%)"; 
    arrow[3].style.transform = "rotate(0deg)"; 
  }
}

function function5() {
  if (p[4].style.display === "none" || (p[4].style.display === "")) {
    p[4].style.display = "block"
    h2[4].style.color = "hsl(238, 29%, 16%)"; 
    h2[4].style.fontWeight = "700"; 
    arrow[4].style.transform = "rotate(180deg)"; 
  } else {
    p[4].style.display = "none";
    h2[4].style.fontWeight = "400"; 
    h2[4].style.color = "hsl(237, 12%, 33%)"; 
    arrow[4].style.transform = "rotate(0deg)"; 
  }
}



