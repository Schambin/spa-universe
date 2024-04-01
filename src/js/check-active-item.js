export const activeNavbarItem = document.addEventListener("DOMContentLoaded", function activeNavbarItem() {
    const navbarItems = document.querySelectorAll("nav a");

    navbarItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove a classe 'active' de todos os itens da barra de navegação
            navbarItems.forEach(navItem => {
                navItem.classList.remove("active");
            });

            // Adiciona a classe 'active' apenas ao item clicado
            item.classList.add("active");
        });
    });
});