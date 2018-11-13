import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedAppModule } from "src/app/shared/shared.module";
import { AccountModule } from "src/app/account-component/account.module";
import { HomeModule } from "src/app/planner-component/home-component/home.module";
import { CommonModule } from "@angular/common";
import { AppHeaderComponent } from "src/app/common/app-header-component/app-header.component";

@NgModule({
  declarations: [
      AppComponent,
      AppHeaderComponent
  ],
  imports: [
      BrowserModule,
      //AppRoutingModule,
      SharedAppModule,
      AccountModule,
      HomeModule,
      CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
