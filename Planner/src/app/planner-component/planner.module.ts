import { NgModule } from "@angular/core";
import { AppHeaderComponent } from "src/app/common/app-header-component/app-header.component";
import { SharedAppModule } from "src/app/shared/shared.module";
import { HomeComponent } from "src/app/planner-component/home-component/home.component";
import { AddUpdateUserComponent } from "src/app/planner-component/shared/components/add-update-user-component/add-update-user.component";
import { UserListComponent } from "src/app/planner-component/user-list-component/user-list.component";
import { MessageService } from "primeng/components/common/messageservice";
import { UserListDataService } from "src/app/planner-component/user-list-component/shared/service/user-list-data.service";
import { NDRDataService } from "src/app/planner-component/ndr-component/shared/service/ndr-data.service";
import { NDRComponent } from "./ndr-component/ndr.component";

@NgModule({
    imports:
    [
        SharedAppModule
    ],
    exports:
    [
        HomeComponent,
        AddUpdateUserComponent,
        UserListComponent,
        NDRComponent
    ],
    declarations:
    [
        HomeComponent,
        AddUpdateUserComponent,
        UserListComponent,
        NDRComponent
    ],
    entryComponents:
    [
        HomeComponent,
        AddUpdateUserComponent,
        UserListComponent,
        NDRComponent
    ],
    providers:
    [
        { provide: MessageService, useClass: MessageService },
        { provide: UserListDataService, useClass: UserListDataService},
        { provide: NDRDataService, useClass: NDRDataService }
    ],

})

export class PlannerModule { }
