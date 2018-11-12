import { NgModule } from "@angular/core";
import { SharedAppModeule } from "src/app/shared/shared.module";
import { AccountLoginComponent } from "src/app/account-component/account-login-component/account-login.component";

@NgModule({
    imports:
    [
        SharedAppModeule
    ],
    exports:
    [
        AccountLoginComponent
    ],
    declarations:
    [
        AccountLoginComponent
    ],
    entryComponents:
    [
        AccountLoginComponent
    ],
    providers:
    [
    ],

})

export class AccountModeule { }
