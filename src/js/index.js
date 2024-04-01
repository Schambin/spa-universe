import { loadPageComponents } from "./load-components.js";

const navbarItens = document.querySelectorAll('a');
navbarItens.forEach(item => {
    //click listener to each 'a' on navbar
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
