
const openModal = function(e) {
    let target = document.querySelector('.stat-perso1');
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true')
}

document.querySelector('.modal').addEventListener('click', openModal );



