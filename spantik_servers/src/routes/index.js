const express = require('express');
const authRoute = require('./auth.route');
const productRoute = require('./product.route');
const categoryRoute = require('./category.route');
const subCategoryRoute = require('./subCategory.route');
const subCatProductsRoute = require('./subCatProducts.route');
const cartRoute = require('./cart.route');
const ordersRoute = require('./orders.route');
const adminRoute = require('./admin.route');

const router = express.Router();
//the purpose of creating index.js is that we can create varity of routes in a single file without messup
const routes = [{
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/products',
        route: productRoute
    },
    {
        path: '/category',
        route: categoryRoute
    },
    {
        path: '/subCategory',
        route: subCategoryRoute
    },
    {
        path: '/subCatProducts',
        route: subCatProductsRoute
    },
    {
        path: '/cart',
        route: cartRoute
    },
    {
        path: '/orders',
        route: ordersRoute
    },
    {
        path: '/admin',
        route: adminRoute
    }

];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;