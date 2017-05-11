
window.addEventListener('load', function () {
    let ShopView = require('./views/shop');
    let ShopModel = require('./models/shop');

    let shop = new ShopModel();
    shop.tires = 2;
    shop.paint = 'red';
    shop.exhaust = false; //'false' means exhuast is broken
    shop.horsepower = 120;
    shop.mpg = 33;
    shop.totalcost = 0;

    let view = new ShopView({
        el: document.querySelector('main'),
        model: shop,
    });
    view.render();
});