import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { LoginModel } from "src/app/account-component/shared/models/login.model";
import { AuthenticationService } from "src/app/shared/components/authentication-component";
import { Router } from "@angular/router";
import { MessageService } from "primeng/components/common/messageservice";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "events";
import { ValidateLetter } from "src/app/shared/validators/letter-validator";
import { ValidateURL } from "src/app/shared/validators/url-validator";
import { ApplicationConstants } from "src/app/shared/constants/constants";
import { HttpEventType } from "@angular/common/http";
import { NDRDataService } from "src/app/planner-component/ndr-component/shared/service/ndr-data.service";
import { NDR } from "src/app/planner-component/ndr-component/shared/models/ndr.model";


@Component({
  selector: 'ndr',
  templateUrl: './ndr.component.html',
  styleUrls: ['./ndr.component.css']
})
export class NDRComponent implements OnInit {
  NDRInfo: NDR;

  NDR: NDR[] = [];

  NDRForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
    private NDRDataService: NDRDataService,
    private router: Router,
    private messageService: MessageService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
      this.NDRInfo = new NDR();
      this.getUserNdr();

    this.NDRForm = this.fb.group({
      'FullName': new FormControl(this.NDRInfo.FullName, Validators.compose(
        [Validators.required,
        Validators.maxLength(250),
        Validators.minLength(3),
          ValidateLetter]
      )),
      'Type': new FormControl(this.NDRInfo.Type, Validators.compose(
        [Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
          ValidateLetter]
      )),
      'Level': new FormControl(this.NDRInfo.Level, Validators.compose(
        [Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
          ValidateLetter])),
      'Name': new FormControl(this.NDRInfo.Name, Validators.compose(
        [Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
          ValidateLetter])),
      'Step': new FormControl(this.NDRInfo.Step, Validators.compose(
        [Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
          ValidateLetter])),
      'Place': new FormControl(this.NDRInfo.Place, Validators.compose(
        [Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
          ValidateLetter])),
      'StudentName': new FormControl(this.NDRInfo.StudentName, Validators.compose(
        [Validators.required,
        Validators.maxLength(250),
        Validators.minLength(3),
          ValidateLetter])),
      'Awards': new FormControl(this.NDRInfo.Awards, Validators.compose(
        [Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
          ValidateLetter]))
    }
    );
  }

  addNDR() {
    if (this.NDRForm.invalid) return;

    let tempNDR = <NDR>this.NDRForm.value;

    this.NDRDataService.addNDR(tempNDR).subscribe(data => {
      if (data) {
          this.NDRForm.reset();
          this.getUserNdr();
          this.messageService.add({ key: 'success', severity: 'success', summary: '', detail: 'НДР студента успішно додано' });
      } else {
        this.messageService.add({ key: 'error', severity: 'error', summary: '', detail: '' });
      }
    });
  }

  getUserNdr() {
    this.NDRDataService.getUserNdr().subscribe((result: NDR[]) => {
      if (result) {
        this.NDR = result;
      }
    });
  }

  getErrorMessage(value: string) {
    if (value == 'FullName') {
      if (this.NDRForm.controls['FullName'].errors['required']) {
        return `Поле "ПІБ викладача" - обов'язкове`;
      }
      else if (this.NDRForm.controls['FullName'].errors['minlength']) {
        return `Поле "ПІБ викладача" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['FullName'].errors['maxLength']) {
        return `Поле "ПІБ викладача" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['FullName'].errors['validLetter']) {
        return `Коректно заповніть поле "ПІБ викладача" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Type') {
      if (this.NDRForm.controls['Type'].errors['required']) {
        return `Поле "Тип" - обов'язкове`;
      }
      else if (this.NDRForm.controls['Type'].errors['minlength']) {
        return `Поле "Тип" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Type'].errors['maxLength']) {
        return `Поле "Тип" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Type'].errors['validLetter']) {
        return `Коректно заповніть поле "Тип" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Level') {
      if (this.NDRForm.controls['Level'].errors['required']) {
        return `Поле "Рівень" - обов'язкове`;
      }
      else if (this.NDRForm.controls['Level'].errors['minlength']) {
        return `Поле "Рівень" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Level'].errors['maxLength']) {
        return `Поле "Рівень" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Level'].errors['validLetter']) {
        return `Коректно заповніть поле "Рівень" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Name') {
      if (this.NDRForm.controls['Name'].errors['required']) {
        return `Поле "Назва/Напрям" - обов'язкове`;
      }
      else if (this.NDRForm.controls['Name'].errors['minlength']) {
        return `Поле "Назва/Напрям" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Name'].errors['maxLength']) {
        return `Поле "Назва/Напрям" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Name'].errors['validLetter']) {
        return `Коректно заповніть поле "Назва/Напрям" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Step') {
      if (this.NDRForm.controls['Step'].errors['required']) {
        return `Поле "Етап" - обов'язкове`;
      }
      else if (this.NDRForm.controls['Step'].errors['minlength']) {
        return `Поле "Етап" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Step'].errors['maxLength']) {
        return `Поле "Етап" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Step'].errors['validLetter']) {
        return `Коректно заповніть поле "Етап" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Place') {
      if (this.NDRForm.controls['Place'].errors['required']) {
        return `Поле "Місце та дата проведення" - обов'язкове`;
      }
      else if (this.NDRForm.controls['Place'].errors['minlength']) {
        return `Поле "Місце та дата проведення" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Place'].errors['maxLength']) {
        return `Поле "Місце та дата проведення" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Place'].errors['validLetter']) {
        return `Коректно заповніть поле "Місце та дата проведення" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'StudentName') {
      if (this.NDRForm.controls['StudentName'].errors['required']) {
        return `Поле "ПІБ студента" - обов'язкове`;
      }
      else if (this.NDRForm.controls['StudentName'].errors['minlength']) {
        return `Поле "ПІБ студента" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['StudentName'].errors['maxLength']) {
        return `Поле "ПІБ студента" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['StudentName'].errors['validLetter']) {
        return `Коректно заповніть поле "ПІБ студента" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Awards') {
      if (this.NDRForm.controls['Awards'].errors['required']) {
        return `Поле "Нагороди" - обов'язкове`;
      }
      else if (this.NDRForm.controls['Awards'].errors['minlength']) {
        return `Поле "Нагороди" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Awards'].errors['maxLength']) {
        return `Поле "Нагороди" повинне мати не менше 3-х символів`;
      }
      else if (this.NDRForm.controls['Awards'].errors['validLetter']) {
        return `Коректно заповніть поле "Нагороди" ! Поле не може мати цифорвих значень!`;
      }
    }
  }
}
