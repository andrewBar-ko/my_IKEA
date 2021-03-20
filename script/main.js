'use strict';

const btnBurger = document.querySelector('.btn-burger'),
    btnClose = document.querySelector('.btn-close'),
    catalog = document.querySelector('.catalog'),
    overlay = document.querySelector('.overlay'),
    subCatalog = document.querySelector('.subcatalog'),
    subCatalogHeader = document.querySelector('.subcatalog-header');

// Меню 
const openMenu = () => {

    catalog.classList.add('open');
    overlay.classList.add('active');

};

const closeMenu = () => {

    catalog.classList.remove('open');
    overlay.classList.remove('active');

};

const openSubMenu = e => {

    e.preventDefault();
    const target = e.target;
    const itemList = target.closest('.catalog-list__item');
    if (itemList) {
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    }
};

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);

// Закрытие меню по Esc
document.addEventListener('keydown', e => {

    if (e.code === 'Escape') {
        closeMenu();
    }

});