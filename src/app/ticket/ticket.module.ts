import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './ticket.component';

const TICKET_ROUTER: Routes = [
    {
        path: '',
        component: TicketComponent
    }
];
@NgModule({
    declarations: [
        TicketComponent
    ],
    imports: [RouterModule.forChild(TICKET_ROUTER)],
    providers: [],
})
export class TicketModule { }
