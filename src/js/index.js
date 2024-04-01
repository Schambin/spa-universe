import { loadPageComponents } from "./load-components.js";
import { activeNavbarItem } from "./check-active-item.js";

activeNavbarItem;
const navbarItens = document.querySelectorAll('nav a');
navbarItens.forEach(item => {
    item.addEventListener('click', urlManipulator);
});

function urlManipulator(event) {
    event.preventDefault();

    const url = event.currentTarget.href;

    // Remove '/pages' da URL
    const urlSegments = url.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];

    window.history.pushState({}, '', lastSegment);

    loadPageComponents(url);
}
