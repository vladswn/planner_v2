import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedAppModeule } from "src/app/shared/shared.module";
import { AccountModeule } from "src/app/account-component/account.modeule";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      //AppRoutingModule,
      SharedAppModeule,
      AccountModeule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
