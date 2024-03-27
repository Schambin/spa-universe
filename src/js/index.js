
const anchors = document.querySelectorAll('a');
anchors.forEach(anchor => {
    anchor.addEventListener('click', clickEventCatcher);
});


function clickEventCatcher(event) {
    event.preventDefault();

    const url = event.target.href;
    const currentUrl = window.location.href;
    
    loadPageComponents(url)
}

function loadPageComponents(url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.text();
    })
    .then(html => {
        document.querySelector('#app').innerHTML = html;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
    });
}