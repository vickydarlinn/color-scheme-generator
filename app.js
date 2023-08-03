const colorBtn = document.querySelector(".btn");
const seedColor = document.querySelector(".seed-color");
const colorPalletes = document.querySelector(".color-palletes");
const select = document.querySelector("#color-scheme");
const output = document.querySelector(".output");

colorBtn.addEventListener("click", function () {
  let hex = seedColor.value.slice(1);
  console.log(hex);
  let colorSchemeValue = select.options[select.selectedIndex].value;
  console.log(colorSchemeValue);
  let url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colorSchemeValue}&count=5`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.colors);
      colorPalletes.innerHTML = ""; // Clear the color palettes container
      data.colors.forEach((color) => {
        console.log(color.hex.value);
        const colorElement = document.createElement("div");
        colorElement.classList.add("color");
        colorElement.style.backgroundColor = color.hex.value;
        colorElement.innerHTML = `<p>${color.hex.value}</p>`;
        colorPalletes.appendChild(colorElement);
      });
    });
});

// theme converter
document.querySelector(".dark").addEventListener("click", function () {
  let root = document.querySelector(":root");
  root.style.setProperty("--light", " rgba(67, 65, 65, 0.85)");
  root.style.setProperty("--dark", "rgba(228, 228, 228, 0.635)");
  document.querySelector(".dark").classList.add("hidden");
  document.querySelector(".light").classList.remove("hidden");
});

document.querySelector(".light").addEventListener("click", function () {
  let root = document.querySelector(":root");
  root.style.setProperty("--light", "rgba(228, 228, 228, 0.635)");
  root.style.setProperty("--dark", " rgba(67, 65, 65, 0.85)");
  document.querySelector(".dark").classList.remove("hidden");
  document.querySelector(".light").classList.add("hidden");
});

// Add copy functionality to the color boxes using event delegation
colorPalletes.addEventListener("click", function (event) {
  if (event.target.classList.contains("color")) {
    const colorValue = event.target.textContent.trim();
    console.log(colorValue);
    copyToClipboard(colorValue);
  }
});

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showOutput();
      setTimeout(() => {
        closeOutput();
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
function showOutput() {
  output.style.display = "block";
}
function closeOutput() {
  output.style.display = "none";
}
