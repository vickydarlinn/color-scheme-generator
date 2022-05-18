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
