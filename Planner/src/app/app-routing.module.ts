import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountLoginComponent } from "src/app/account-component/account-login-component/account-login.component";

const routes: Routes = [
    { path: 'login', component: AccountLoginComponent },
    { path: '', component: AccountLoginComponent },
    { path: '**', redirectTo: '/' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
