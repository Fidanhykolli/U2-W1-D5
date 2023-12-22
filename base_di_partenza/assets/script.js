document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const getStarted = document.querySelector("#get-started");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 364) {
      header.classList.add("white-bg");
      getStarted.classList.add("green-bg");
    } else {
      header.classList.remove("white-bg");
      getStarted.classList.remove("green-bg");
    }
  });
});

const toggleM = document.querySelectorAll("svg > g > g > g");
function allM() {
  toggleM.forEach((M) => {
    const randomTime = Math.round(Math.random() * 10000);
    setTimeout(function () {
      const opacityToggle = Math.round(Math.random());
      M.style.opacity = opacityToggle;
    }, randomTime);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  allM();

  setInterval(toggleM, 10000);
});
