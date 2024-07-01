import { Routes } from '@angular/router';
import { AuthGuard } from './services/guard.service';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./dashboard/pages/auth/auth.component')
    },
    {
        path: 'home',
        loadComponent: () => import('./dashboard/pages/home/home.component'),
        children: [
            {
                path: 'audit',
                title: "Audit",
                loadComponent: () => import('./dashboard/pages/home/audit/audit.component')
            },
            {
                path: 'users',
                title: "Users",
                loadComponent: () => import('./dashboard/pages/home/users/users.component')
            }
        ]
        //canActivate: [AuthGuard],

    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
