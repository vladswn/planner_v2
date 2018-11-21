import { NgModule } from "@angular/core";
import { AppHeaderComponent } from "src/app/common/app-header-component/app-header.component";
import { SharedAppModule } from "src/app/shared/shared.module";
import { HomeComponent } from "src/app/planner-component/home-component/home.component";
import { AddUpdateUserComponent } from "src/app/planner-component/shared/components/add-update-user-component/add-update-user.component";
import { UserListComponent } from "src/app/planner-component/user-list-component/user-list.component";
import { MessageService } from "primeng/components/common/messageservice";
import { UserListDataService } from "src/app/planner-component/user-list-component/shared/service/user-list-data.service";

@NgModule({
    imports:
    [
        SharedAppModule
    ],
    exports:
    [
        HomeComponent,
        AddUpdateUserComponent,
        UserListComponent
    ],
    declarations:
    [
        HomeComponent,
        AddUpdateUserComponent,
        UserListComponent
    ],
    entryComponents:
    [
        HomeComponent,
        AddUpdateUserComponent,
        UserListComponent
    ],
    providers:
    [
        { provide: MessageService, useClass: MessageService },
        { provide: UserListDataService, useClass: UserListDataService}
        
    ],

})

export class PlannerModule { }
