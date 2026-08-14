// =========================
// MENU MOBILE
// =========================

function abrirMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("ativo");
}


// =========================
// BUSCA DE NOTÍCIAS
// =========================

function buscarNoticias() {

    const campo = document.getElementById("campoBusca");

    const pesquisa = campo.value
        .toLowerCase()
        .trim();

    const noticias = document.querySelectorAll(".card");

    const semResultados =
        document.getElementById("semResultados");

    let encontrou = false;

    noticias.forEach(function (noticia) {

        const titulo =
            noticia
                .getAttribute("data-titulo")
                .toLowerCase();

        const texto =
            noticia.innerText.toLowerCase();

        if (
            titulo.includes(pesquisa) ||
            texto.includes(pesquisa)
        ) {

            noticia.style.display = "block";
            encontrou = true;

        } else {

            noticia.style.display = "none";

        }

    });

    if (encontrou) {
        semResultados.style.display = "none";
    } else {
        semResultados.style.display = "block";
    }
}


// =========================
// LER NOTÍCIA
// =========================

function lerNoticia(titulo) {

    alert(
        "Você selecionou a notícia:\n\n" +
        titulo +
        "\n\n" +
        "Aqui você poderá colocar a página completa da notícia."
    );

}


// =========================
// NEWSLETTER
// =========================

function inscrever(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    if (email === "") {
        alert("Digite seu e-mail.");
        return;
    }

    alert(
        "Cadastro realizado com sucesso!\n\n" +
        "E-mail: " + email
    );

    document.getElementById("email").value = "";
}


// =========================
// FECHAR MENU AO CLICAR
// =========================

const linksMenu =
    document.querySelectorAll("#menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        document
            .getElementById("menu")
            .classList.remove("ativo");

    });

});