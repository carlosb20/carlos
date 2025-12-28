const botao = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu2");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});
