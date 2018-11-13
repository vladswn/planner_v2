import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountLoginComponent } from "src/app/account-component/account-login-component/account-login.component";
import { HomeComponent } from "src/app/planner-component/home-component/home.component";
import { AuthGuard } from "src/app/shared/guard/auth-guard";

const routes: Routes = [
    { path: 'login', component: AccountLoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: AccountLoginComponent },
    { path: '**', redirectTo: '/' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
