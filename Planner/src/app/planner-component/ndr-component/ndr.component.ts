import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { LoginModel } from "src/app/account-component/shared/models/login.model";
import { AuthenticationService } from "src/app/shared/components/authentication-component";
import { Router } from "@angular/router";
import { MessageService } from "primeng/components/common/messageservice";
import { NDR } from "src/app/planner-component/ndr-component/shared/models/ndr.model";
import { UserInfo } from "src/app/shared/models/user-info.model";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "events";
import { UserDataService } from "src/app/planner-component/shared/service/user-data.service";
import { ValidateLetter } from "src/app/shared/validators/letter-validator";
import { ValidateURL } from "src/app/shared/validators/url-validator";
import { ApplicationConstants } from "src/app/shared/constants/constants";
import { NDRDataService } from "src/app/planner-component/ndr-component/shared/service/ndr-data.service";


@Component({
  selector: 'ndr',
  templateUrl: './ndr.component.html',
  styleUrls: ['./ndr.component.css']
})
export class NDRComponent implements OnInit {
  studentResearchWork: NDR[] = [];

  studentResearchWorkForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
    private NDRDataService: NDRDataService,
    private router: Router,
    private messageService: MessageService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
  }
}
