import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const LOGIN_ROUTER: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [RouterModule.forChild(LOGIN_ROUTER)],
    providers: []
})
export class LoginModule { }
