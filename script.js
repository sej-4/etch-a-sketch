const container = document.querySelector(".container");
const gridSize = 16 ** 2;
const button = document.querySelector("button");

for (let i = 0; i < gridSize; i++) {
  const div = document.createElement("div");
  container.append(div);
}

container.addEventListener("mouseover", (event) => {
  event.target.classList.add("fill-square");
});

function isValidInput(number) {
  return number && number > 0 && number <= 100 && Number.isInteger(number);
}

button.addEventListener("click", () => {
  const numberOfSquares = +prompt(
    "Enter the number of squares per side (Max: 100)",
  );

  if (isValidInput(numberOfSquares)) {
    container.textContent = "";
  }
});
