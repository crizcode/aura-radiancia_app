import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/landing/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ContactusComponent } from './pages/landing/home/contactus/contactus.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: HomeComponent,
      },
      {
        path: 'category',
        title: 'App Category Page',
        component: CategoryComponent,
      },
      {
        path: 'collections',
        title: 'App Collections Page',
        component: CollectionsComponent,
      },
      {
        path: 'contactus',
        title: 'App Contact page',
        component: ContactusComponent,
      },
];


