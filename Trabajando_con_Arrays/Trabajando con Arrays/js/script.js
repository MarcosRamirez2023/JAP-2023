// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función para filtrar y mostrar elementos de tipo String
function showOnlyStrings(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  // Filtrar elementos de tipo String
  const stringsOnly = array.filter(element => typeof element === "string");

  // Ordenar alfabéticamente sin distinción entre mayúsculas y minúsculas
  stringsOnly.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

  // Mostrar los elementos en una lista
  stringsOnly.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element;
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Llamar a la función para mostrar solo elementos de tipo String
  showOnlyStrings(strangeArray);
});
