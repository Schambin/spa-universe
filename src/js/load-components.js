const placeToShowContent = document.getElementById('app');

export function loadPageComponents(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Nao deu bom', error);
            }
            return response.text();
        })
        .then(html => {
            placeToShowContent.innerHTML = html;
        })
        .catch(error => {
            console.error('Problema no fetch:', error);
        });
}