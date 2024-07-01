import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./dashboard/pages/auth/auth.component')
    },
    {
        path: 'home',
        loadComponent: () => import('./dashboard/pages/home/home.component')
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
