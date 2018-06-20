import React from 'react';
import ProductsLitsPage from './pages/ProductsListPage/ProductsLitsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductsLitsPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match }) => <ProductActionPage match={ match } />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;