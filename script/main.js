'use strict';

const btnBurger = document.querySelector('.btn-burger'),
    btnClose = document.querySelector('.btn-close'),
    catalog = document.querySelector('.catalog'),
    subCatalog = document.querySelector('.subcatalog'),
    subCatalogHeader = document.querySelector('.subcatalog-header'),
    btnReturn = document.querySelector('.btn-return');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend', overlay);

// Меню 
const openMenu = () => {

    catalog.classList.add('open');
    overlay.classList.add('active');

};

const closeMenu = () => {

    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();

};

// Sub-menu open
const openSubMenu = e => {

    e.preventDefault();
    const target = e.target;
    const itemList = target.closest('.catalog-list__item');
    if (itemList) {
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    }
};

const closeSubMenu = () => {

    subCatalog.classList.remove('subopen');

};

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);

// Закрытие меню по Esc
document.addEventListener('keydown', e => {

    if (e.code === 'Escape') {
        closeMenu();
    }

});