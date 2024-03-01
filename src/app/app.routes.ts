import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/landing/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ContactusComponent } from './pages/landing/home/contactus/contactus.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddcartComponent } from './pages/addcart/addcart.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                title: 'Home',
                component: HomeComponent, pathMatch: 'full'
            },
            {
                path: 'category',
                title: 'Categoria',
                component: CategoryComponent
            },
            {
                path: 'collections',
                title: 'Colección',
                component: CollectionsComponent
            },
            {
                path: 'contactus',
                title: 'Contacto',
                component: ContactusComponent
            },
            {
                path: 'login',
                title: 'Login',
                component: LoginComponent
            },
            {
                path: 'detail/:productId',
                title: 'Detalle',
                component: DetailComponent
            },
            {
                path: 'shopping',
                title: 'Ventas',
                component: ShoppingcartComponent
            },
            {
                path: 'delivery',
                title: 'Delivery',
                component: DeliveryComponent
            },

        ]
    },

    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'resumen',
                title: 'Resumen',
                loadComponent: () => import('./dashboard/pages/resumen/resumen.component'),
            },
            {
                path: 'productos',
                title: 'Productos',
                loadComponent: () => import('./dashboard/pages/producto/producto.component'),
            },
            {
                path: 'clientes',
                title: 'Clientes',
                loadComponent: () => import('./dashboard/pages/cliente/cliente.component'),
            },

        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'

    }
];