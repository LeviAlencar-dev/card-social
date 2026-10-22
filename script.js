let boxTema = document.getElementById("btn-tema");
let imgTema = document.getElementById("img-tema");
let pagina = document.body;
let temaCor = document.querySelector('meta[name="theme-color"]');

boxTema.addEventListener("click", mudarTema);

function mudarTema(event) {
    pagina.classList.toggle("tema-claro");
    if (pagina.classList.contains("tema-claro")) {
        imgTema.src = "img/lua.svg";
        temaCor.setAttribute("content", "#F4F6F0");
        boxTema.setAttribute("aria-pressed", "true");
    } else {
        imgTema.src = "img/sol.svg";  
        temaCor.setAttribute("content", "#141414");
        boxTema.setAttribute("aria-pressed", "false");
    }
}