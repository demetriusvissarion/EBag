const sliderBar1 = document.querySelector(".sliderBar1-inner");
const sliderBar1ProgressBar = document.querySelector(
  ".sliderBar1-prog-bar-inner"
);

let sliderBar1Grabbed = false;

sliderBar1.parentElement.addEventListener("scroll", (e) => {
  sliderBar1ProgressBar.style.width = `${getScrollPercentage()}%`;
});

sliderBar1.addEventListener("mousedown", (e) => {
  sliderBar1Grabbed = true;
  sliderBar1.style.cursor = "grabbing";
});

sliderBar1.addEventListener("mouseup", (e) => {
  sliderBar1Grabbed = false;
  sliderBar1.style.cursor = "grab";
});

sliderBar1.addEventListener("mouseleave", (e) => {
  sliderBar1Grabbed = false;
  sliderBar1.style.cursor = "grab";
});

sliderBar1.addEventListener("mousemove", (e) => {
  if (sliderBar1Grabbed) {
    sliderBar1.parentElement.scrollLeft -= e.movementX;
  }
});

function getScrollPercentage() {
  return (
    (sliderBar1.parentElement.scrollLeft /
      (sliderBar1.parentElement.scrollWidth -
        sliderBar1.parentElement.clientWidth)) *
    100
  );
}
