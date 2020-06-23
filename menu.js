let activeToggleMenu = false;
let activeSearchBar = false;

document.querySelector('.toggle-menu').addEventListener('click', () => {
    document.querySelector('.toggle-menu').classList.toggle('on');

    activeToggleMenu = !activeToggleMenu;
    document.body.style.overflow = activeToggleMenu ? 'hidden' : 'initial';
});

// document.querySelector('#search-img').addEventListener('click', () => {
//     activeSearchBar = !activeSearchBar;
//     document.querySelector('input#search').style.display = activeSearchBar ? 'initial' : 'none';
// });

document.querySelector('#search-img').addEventListener('click', (e) => {
    if(activeSearchBar !== true) {
        activeSearchBar = !activeSearchBar;
        document.querySelector('input#search').style.display = activeSearchBar ? 'initial' : 'none';
    }
});

document.querySelector('main').addEventListener('click', () => {
    if(activeSearchBar !== false) {
        activeSearchBar = !activeSearchBar;
        document.querySelector('input#search').style.display = activeSearchBar ? 'initial' : 'none';
    }
});