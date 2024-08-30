import { Routes } from '@angular/router';
import { LoginComponent } from './interfaces/auth/login/login.component';
import { DashboardComponent } from './interfaces/auth/dashboard/dashboard.component';
import { RegisterComponent } from './interfaces/auth/register/register.component';
import { ForgotPasswordComponent } from './interfaces/auth/forgot-password/forgot-password.component';

export const routes: Routes = [
    {path:"", redirectTo:'auth/login', pathMatch:'full'},
    {path:'auth/login', component:LoginComponent},
    {path:'auth/register', component:RegisterComponent},
    {path:'auth/change-password', component:ForgotPasswordComponent},
    {path:'dashboard', component:DashboardComponent,
        // children: [
        //     {path:},
        // ]
    },
    {path:'**', redirectTo:'auth/login'}
];
