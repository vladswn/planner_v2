import { NgModule } from "@angular/core";
import { AppHeaderComponent } from "src/app/common/app-header-component/app-header.component";
import { SharedAppModule } from "src/app/shared/shared.module";
import { HomeComponent } from "src/app/planner-component/home-component/home.component";
import { AddUpdateUserComponent } from "src/app/planner-component/shared/components/add-update-user-component/add-update-user.component";


@NgModule({
    imports:
    [
        SharedAppModule
    ],
    exports:
    [
        HomeComponent,
        AddUpdateUserComponent
    ],
    declarations:
    [
        HomeComponent,
        AddUpdateUserComponent
    ],
    entryComponents:
    [
        HomeComponent,
        AddUpdateUserComponent
    ],
    providers:
    [
    ],

})

export class PlannerModule { }
