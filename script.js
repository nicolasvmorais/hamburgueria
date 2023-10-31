const menuOptions = [
  { name: "X-Salada", price: 30, vegan: false, src: "./img/xsalada.jpeg" },
  { name: "X-Bacon", price: 34, vegan: false, src: "./img/xbacon.png" },
  { name: "X-Bacon Egg", price: 39, vegan: false, src: "./img/bacon-egg.png" },
  { name: "Monstruoso", price: 50, vegan: false, src: "./img/monstruoso.png" },
  { name: "Big Vegano", price: 55, vegan: true, src: "./img/xvegan.png" },
  {
    name: "X-Vegan",
    price: 45,
    vegan: true,
    src: "./img/monstruoso-vegan.png",
  },
];

const botao1 = document.querySelector(".botao1")
const botao2 = document.querySelector(".botao2")
const botao3 = document.querySelector(".botao3")
const botao4 = document.querySelector(".botao4")
function acao1() {
  const hamburgers = document.querySelectorAll(".tabela-burguer");
  hamburgers.forEach((hamburger) => {
    if (hamburger.style.display === "none" || hamburger.style.display === "") {
      hamburger.style.display = "inline-block";
    } else {
      hamburger.style.display = "none";
    }
  });
}

const hamburgers = document.querySelectorAll(".tabela-burguer");
let valoresAtualizados = false;
function acao2() {
  const menuNovo = menuOptions.map((actualValue) => actualValue.price * 0.9);
  const valores = document.querySelectorAll(".valor-hamburguer");

  if (valoresAtualizados) {
    menuOptions.forEach((item, index) => {
      valores[index].innerHTML = `R$ ${item.price.toFixed(2)}`;
    });
    valoresAtualizados = false;
  } else {
    valores.forEach((valor, index) => {
      valor.innerHTML = `R$ ${menuNovo[index].toFixed(2)}`;
    });
    valoresAtualizados = true;
  }
}
function acao3() {
  const hamburgers = document.querySelectorAll(".tabela-burguer");
  const mostrarValue = document.querySelector(".allValue") 
  let valorTotal = 0;

  hamburgers.forEach((hamburger, index) => {
    if (hamburger.style.display !== "none") {
      valorTotal += menuOptions[index].price;
    }
  });

  mostrarValue.innerHTML = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
return valorTotal;
}




  


function acao4() {
  const veganBurgers = menuOptions.filter((item) => item.vegan === true);

  hamburgers.forEach((hamburger, index) => {
    if (veganBurgers.includes(menuOptions[index])) {
      hamburger.style.display = "inline-block";
    } else {
      hamburger.style.display = "none";
    }
  });
}

