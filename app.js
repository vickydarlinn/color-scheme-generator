const colorBtn = document.querySelector(".btn");
const seedColor = document.querySelector(".seed-color");
const colorPalletes = document.querySelector(".color-palletes");
const select = document.querySelector("#color-scheme");

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
      data.colors.forEach((color) => {
        console.log(color.hex.value);
        colorPalletes.innerHTML += `<div class="color" style="background-color: ${color.hex.value}"> 
        <p> ${color.hex.value}
        </div>`;
      });
    });
  colorPalletes.innerHTML = "";
});

// theme convertor

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
