import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { LoginModel } from "src/app/account-component/shared/models/login.model";
import { AuthenticationService } from "src/app/shared/components/authentication-component";
import { Router } from "@angular/router";
import { MessageService } from "primeng/components/common/messageservice";

@Component({
    selector: 'app-sidenav',
    templateUrl: './app-sidenav.component.html',
  styleUrls: ['./app-sidenav.component.css']
})
export class AppSidenavComponent implements OnInit {
    isShowHeader: boolean;
    display: boolean = true;
    constructor(private router: Router) { }

    ngOnInit() {
        this.isShowHeader = this.router.url === '/login';

    }

}
