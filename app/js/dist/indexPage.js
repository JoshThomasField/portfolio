var burger = document.querySelector('.fa-bars');
var links = document.querySelector('.hidden-nav-links');
var linkers = document.querySelectorAll('.linker');
burger.addEventListener('click', function () {
    if (links.style.display == 'none') {
        links.style.display = 'flex';
    }
    else {
        links.style.display = 'none';
    }
});
linkers.forEach(function (link) {
    link.addEventListener('click', function () {
        links.style.display = 'none';
    });
});

//# sourceMappingURL=indexPage.js.map
