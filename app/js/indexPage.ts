declare var Handlebars: any

const burger = document.querySelector('.fa-bars');
const links: HTMLElement = document.querySelector('.hidden-nav-links');
let linkers = document.querySelectorAll('.linker');

burger.addEventListener('click', () => {
    if (links.style.display == 'none') {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
});
linkers.forEach((link) => {
    link.addEventListener('click', () => {
        links.style.display = 'none';
    })
})
