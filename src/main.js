import {
  createDots,
  ImageDisplay,
  MoveImage,
  updateDots,
} from "./js/sliderLogic.js";
import "./style.css";

const natureImages = document.getElementById("natureImages");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dotsContainer");

const ImageArray = [
  { src: `./image/japan-1706942_1280.jpg` },
  { src: `./image/wugong-mountain-852346_1280.jpg` },
  { src: `./image/landscape-9263545_1280.jpg` },
  { src: `./image/rocks-8106681_1280.jpg` },
  { src: `./image/horse-1804425_1280.jpg` },
];

let currentIndex = 0;

// Manual navigation
prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = MoveImage(currentIndex, "prev", ImageArray);
  ImageDisplay(currentIndex, ImageArray, natureImages);
  updateDots(currentIndex, dotsContainer); // pass currentIndex
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = MoveImage(currentIndex, "next", ImageArray);
  ImageDisplay(currentIndex, ImageArray, natureImages);
  updateDots(currentIndex, dotsContainer); // pass currentIndex
});

// Initial render
window.addEventListener("DOMContentLoaded", () => {
  ImageDisplay(currentIndex, ImageArray, natureImages);
  createDots(currentIndex, ImageArray, dotsContainer);
});

// Automatic slideshow
setInterval(() => {
  currentIndex = MoveImage(currentIndex, "next", ImageArray);
  ImageDisplay(currentIndex, ImageArray, natureImages);
  updateDots(currentIndex, dotsContainer);
}, 3000);
