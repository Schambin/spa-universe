const placeToShowContent = document.getElementById('app');

const anchors = document.querySelectorAll('a');
anchors.forEach(anchor => {
    anchor.addEventListener('click', clickEventCatcher);
});

function clickEventCatcher(event) {
    event.preventDefault();
    
    const url = event.currentTarget.href;
    const currentUrl = window.location.href;

    //
    const urlSegments = url.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];

    window.history.pushState({}, '', lastSegment);
    
    loadPageComponents(url, currentUrl);
}


function loadPageComponents(url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Nao deu bom');
        }
        return response.text();
    })
    .then(html => {
        placeToShowContent.innerHTML = html;
    })
    .catch(error => {
        console.error('Problema no fetch:', error)
    });

    const bodyForBg = document.querySelector('body')
}