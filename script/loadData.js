'use strict';

import { getData } from './getData.js';

const wishList = ['idd025', 'idd005', 'idd055', 'idd085',];

const cartList = [
    {
        id: 'idd002',
        count: 3
    },
    {
        id: 'idd042',
        count: 1
    },
    {
        id: 'idd032',
        count: 2
    }
];

export const loadData = () => {

    if (location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];


        if (prop === 's') {
            getData.search(value, data => console.log(data));
        } else if (prop === 'wishList') {
            getData.wishList(wishList, (data) => console.dir({wishlist: data}));
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, data => console.log(data));
        }
    } 

    if (location.hash) {
        getData.item(location.hash.substring(1), data => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, data => console.log(data));
    }
    
};

