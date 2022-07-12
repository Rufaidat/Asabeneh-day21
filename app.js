const firstH1 = document.querySelector("h1");
// span
const spanStyle = () => {
  const span = document.querySelector("span");
  const myInterval = setInterval(setColor, 1000);
  span.style.fontSize = "3rem";
  function setColor() {
    span.style.color = span.style.color == "yellow" ? "pink" : "yellow";
  }
};
spanStyle();
// h2
const h2 = () => {
  const h2 = document.getElementById("h2-two");
  h2.style.fontWeight = "200";
  h2.style.fontSize = "18px";
  h2.style.textDecoration = "underline";
};
h2();
// wrapper
const wrapperStyle = () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.margin = "5rem 20rem";
  wrapper.style.textAlign = "center";
  wrapper.style.width = "50%";
};
wrapperStyle();
// li
const ul = () => {
  const ul = document.querySelectorAll("li");
  ul.forEach((li, i) => {
    li.style.padding = "1rem";
    li.style.margin = "1px auto";
    li.style.backgroundColor = "green";
    li.style.width = "35rem";
    li.style.listStyle = "none";
    li.style.textAlign = "left";
  });
};
ul();
// red li
const red = () => {
  const red = document.getElementById("one");
  red.style.backgroundColor = "red";
};
red();
// yellow li
const yellow = () => {
  const yellow = document.getElementById("two");
  yellow.style.backgroundColor = "yellow";
};
yellow();
// date
const date = new Date();
const month = () => {
  const month = date.getMonth();
  switch (month) {
    case "0":
      return "January";
      break;
    case "1":
      return "February";
      break;
    case "2":
      return "March";
      break;
    case "3":
      return "April";
      break;
    case "4":
      return "May";
      break;
    case "5":
      return "June";
      break;
    case "6":
      return "July";
      break;
    case "7":
      return "August";
      break;
    case "8":
      return "September";
      break;
    case "9":
      return "October";
      break;
    case "10":
      return "November";
      break;
    case "11":
      return "December";
      break;
  }
};
console.log(month());
const dateBox = () => {
  const dateBox = document.getElementById("date");
  dateBox.textContent = ` ${month()} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
dateBox();
