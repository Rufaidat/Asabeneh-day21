// level 1
// que 1
const firstP = document.querySelector("p");
console.log(firstP);
// que 2
document.getElementById("first");
document.getElementById("second");
document.getElementById("third");
document.getElementById("fourth");
// que 3
const nodeList = document.querySelectorAll("p");
console.log(nodeList);
// que 4
for (let i = 0; i < nodeList.length; i++) {
  console.log(nodeList[i].textContent);
}
// que 5
nodeList[3].textContent = "Fourth Paragraph";
console.log(nodeList[3]);
// que 6
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].classList.add("tags");
}
console.log(nodeList[1]);

// level 2
// que 1 & 2
firstP.style.color = "pink";
firstP.style.backgroundColor = "grey";
const secondP = document.getElementById("second");
const thirdP = document.getElementById("third");
const fourthP = document.getElementById("fourth");
secondP.style.color = "blue";
secondP.style.backgroundColor = "pink";
thirdP.style.color = "yellow";
thirdP.style.backgroundColor = "black";
fourthP.style.color = "green";
fourthP.style.backgroundColor = "yellow";
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.fontSize = "2rem";
  nodeList[i].style.fontFamily = "sans-serif";
  if (i % 2 === 1) {
    nodeList[i].style.color = "green";
  } else {
    nodeList[i].style.color = "red";
  }
}
