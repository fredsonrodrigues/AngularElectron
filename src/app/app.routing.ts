import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const appRoutes: Routes =
    [
        {
            path: '',
            loadChildren: 'app/login/login.module#LoginModule'
        },
        {
            path: 'ticket',
            loadChildren: 'app/ticket/ticket.module#TicketModule',
        },
        {
            path: '**',
            redirectTo: '/login'
        }
    ];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);