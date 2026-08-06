const container = document.querySelector(".container");
const button = document.querySelector("button");

container.addEventListener("mouseover", (event) => {
  event.target.classList.add("fill-square");
});

function isValidInput(number) {
  return number && number > 0 && number <= 100 && Number.isInteger(number);
}

function createGrid(numberOfSquares) {
  const gridSize = numberOfSquares ** 2;
  const containerSize = container.offsetWidth;
  const squareDimension = containerSize / numberOfSquares;

  for (let i = 0; i < numberOfSquares ** 2; i++) {
    const div = document.createElement("div");
    div.style.height = `${squareDimension}px`;
    div.style.width = `${squareDimension}px`;
    container.append(div);
  }
}

button.addEventListener("click", () => {
  const numberOfSquares = +prompt(
    "Enter the number of squares per side (Max: 100)",
  );

  if (isValidInput(numberOfSquares)) {
    container.textContent = "";
    createGrid(numberOfSquares);
  }
});

createGrid(16);
