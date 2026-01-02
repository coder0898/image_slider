export function ImageDisplay(index, arr, element) {
  if (element.childElementCount === 0) {
    arr.forEach((imgs, i) => {
      const img = document.createElement("img");
      img.src = imgs.src;
      img.alt = "sliding_image";
      img.classList.add("auto");
      if (i === index) img.classList.add("active");
      element.appendChild(img);
    });
    return;
  }

  const imgs = element.querySelectorAll("img");
  imgs.forEach((img) => img.classList.remove("active"));
  imgs[index].classList.add("active");
}

export function MoveImage(index, type, arr) {
  if (type === "prev") return (index - 1 + arr.length) % arr.length;
  if (type === "next") return (index + 1) % arr.length;
}

// Create dots dynamically
export function createDots(currentIndex, arr, element) {
  element.innerHTML = "";
  arr.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");

    // Click on dot updates currentIndex in main.js
    dot.addEventListener("click", () => {
      ImageDisplay(i, arr, document.getElementById("natureImages"));
      updateDots(i, element);
      // Update currentIndex in main.js manually
      window.currentIndex = i; // ⚠️ simpler fix
    });

    element.appendChild(dot);
  });
}

// Update dot highlight
export function updateDots(currentIndex, element) {
  const dots = element.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}
