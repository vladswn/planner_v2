import { NgModule } from "@angular/core";
import { SharedAppModule } from "src/app/shared/shared.module";
import { HomeComponent } from "src/app/planner-component/home-component/home.component";

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
    ],

})

export class HomeModule { }
