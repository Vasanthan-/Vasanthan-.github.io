function coffeecup() {
  alert("You clicked the coffee cup!");
}

window.onscroll = () => {
  document.querySelector(".mountains").style.marginTop = scrollY/2 + "px";
  document.querySelector(".stars").style.marginBottom = scrollY/2.5 + "px";
  document.querySelector(".stars").style.marginLeft = scrollY/2 + "px";
  document.querySelector(".cave").style.transform = "scale(" + (scrollY/5000 + 1) + ")";
  document.querySelector(".moon").style.transform = "rotate(-" + (scrollY/5.5) + "deg)";
}