import { NgModule } from "@angular/core";
import { SharedAppModule } from "src/app/shared/shared.module";
import { HomeComponent } from "src/app/planner-component/home-component/home.component";
import { HomeDataService } from "src/app/planner-component/home-component/shared/services/home-data.service";

@NgModule({
    imports:
    [
        SharedAppModule
    ],
    exports:
    [
        HomeComponent
    ],
    declarations:
    [
        HomeComponent
    ],
    entryComponents:
    [
        HomeComponent
    ],
    providers:
    [
        { provide: HomeDataService, useClass: HomeDataService },
    ],

})

export class HomeModule { }
