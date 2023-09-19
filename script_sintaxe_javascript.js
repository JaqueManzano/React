const lowerCaseArrowFunction2 = (name) => name.toLowerCase();

const lowerCaseArrowFunction = (name) => {
  return name.toLowerCase();
};

const lowerCase = function (name) {
  return name.toLowerCase();
};

console.log(upperName("Jaque Manzano"));
console.log(lowerCase("Jaque Manzano"));

function upperName(name) {
  return name.toUpperCase();
}

function handleMouse(event) {
  const { clientX, clientY } = event;

  console.log(clientX, clientY);
}

document.addEventListener("click", handleMouse);

const frutas = ["banana", "maça", "uva", "laranja"];

const [fruta1, fruta2, fruta4, fruta3] = frutas;

console.log(fruta3);

function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(empresa, cliente);
  });
}

showList("Google - ", "Rodrigo", "Heitor");

const numeros = [10, 20, 30, 5, 12];
console.log(Math.max(...numeros));

const numeros2 = [...numeros, 11, 24, 39];
console.log(numeros2);

const carro = {
  cor: "Azul",
  portas: 4,
};

carroAno = { ...carro, ano: 2023 };
console.log(carroAno);
