const firstH1 = document.querySelector("h1");
// span
const spanStyle = () => {
  const span = document.querySelector("span");
  span.style.fontSize = "3rem";
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor() {
    span.style.color = getRandomColor();
  }

  setInterval(changeColor, 1000);
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
  wrapper.style.margin = "5rem 25%";
  wrapper.style.textAlign = "center";
  wrapper.style.width = "50%";
};
wrapperStyle();
// li
const ul = () => {
  const ul = document.querySelectorAll("li");
  ul.forEach((li, i) => {
    li.style.padding = "0.8rem";
    li.style.margin = "2px auto";
    li.style.backgroundColor = "red";
    li.style.width = "35rem";
    li.style.listStyle = "none";
    li.style.textAlign = "left";
  });
};
ul();
// red li
const green = () => {
  const green = document.getElementById("one");
  green.style.backgroundColor = "green";
};
green();
// yellow li
const yellow = () => {
  const yellow = document.getElementById("two");
  yellow.style.backgroundColor = "yellow";
};
yellow();
// date
const date = new Date();
let month = () => {
  let month = date.getMonth();
  if (month == 0) {
    month = "January";
  } else if (month == 1) {
    month = "February";
  } else if (month == 2) {
    month = "March";
  } else if (month == 3) {
    month = "April";
  } else if (month == 4) {
    month = "May";
  } else if (month == 5) {
    month = "June";
  } else if (month == 6) {
    month = "July";
  } else if (month == 7) {
    month = "August";
  } else if (month == 8) {
    month = "September";
  } else if (month == 9) {
    month = "October";
  } else if (month == 10) {
    month = "November";
  } else month = "December";

  return month;
};
console.log(month());
const dateBox = () => {
  const dateBox = document.getElementById("date");
  dateBox.textContent = ` ${month()} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  dateBox.style.backgroundColor = "red";
  dateBox.style.width = "10rem";
  dateBox.style.margin = "auto";
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor() {
    dateBox.style.backgroundColor = getRandomColor();
  }

  setInterval(changeColor, 1000);
};
dateBox();
