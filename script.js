const container = document.querySelector(".container");

const gridSize = 16 ** 2;

for (let i = 0; i < gridSize; i++) {
  const div = document.createElement("div");
  container.append(div);
}

container.addEventListener("mouseover", (event) => {
  event.target.classList.add("fill-square");
});
