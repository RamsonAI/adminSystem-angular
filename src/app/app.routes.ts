import { Routes } from '@angular/router';
import { LoginComponent } from './interfaces/auth/login/login.component';
import { DashboardComponent } from './interfaces/auth/dashboard/dashboard.component';
import { RegisterComponent } from './interfaces/auth/register/register.component';
import { ForgotPasswordComponent } from './interfaces/auth/forgot-password/forgot-password.component';
import { AdminLayoutComponent } from './interfaces/auth/admin-layout/admin-layout.component';
import { UsersComponent } from './interfaces/auth/users/users.component';
import { authGuard } from './interfaces/auth/guards/auth.guard';

export const routes: Routes = [
    {path:"", redirectTo:'auth/login', pathMatch:'full'},
    {path:'auth/login', component:LoginComponent},
    {path:'auth/register', component:RegisterComponent},
    {path:'auth/change-password', component:ForgotPasswordComponent},
    {
        path:'dashboard', component:AdminLayoutComponent, 
        canActivate : [authGuard],
        children: [
            {path:'', component:DashboardComponent},
            {path:'users', component:UsersComponent},
        ]
    },
    {path:'**', redirectTo:'auth/login'}
];
