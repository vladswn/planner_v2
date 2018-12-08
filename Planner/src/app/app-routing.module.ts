import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountLoginComponent } from "src/app/account-component/account-login-component/account-login.component";
import { HomeComponent } from "src/app/planner-component/home-component/home.component";
import { AuthGuard } from "src/app/shared/guard/auth-guard";
import { AddUpdateUserComponent } from "src/app/planner-component/shared/components/add-update-user-component/add-update-user.component";
import { UserListComponent } from "src/app/planner-component/user-list-component/user-list.component";
import { NDRComponent } from "src/app/planner-component/ndr-component/ndr.component";
import { PublicationComponent } from "src/app/planner-component/publication-component/publication.component";
import { AppDashboardComponent } from "src/app/planner-component/app-dashboard-component/app.dashboard.component";
import { ReportComponent } from "src/app/planner-component/report-component/report.component";
import { TrainingJobComponent } from "src/app/planner-component/indiv-plan-component/training-job-component/training.job.component";

const routes: Routes = [
  { path: 'login', component: AccountLoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'user', component: AddUpdateUserComponent, canActivate: [AuthGuard] },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'ndr', component: NDRComponent, canActivate: [AuthGuard] },
  { path: 'publication', component: PublicationComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: AppDashboardComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportComponent, canActivate: [AuthGuard] },
  { path: 'training-job', component: TrainingJobComponent, canActivate: [AuthGuard] },
  { path: '', component: AccountLoginComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
