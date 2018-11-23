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
import { PublicationDataService } from "src/app/planner-component/publication-component/shared/service/publication-data.service";
import { Publication } from "src/app/planner-component/publication-component/shared/models/publication.model";


@Component({
  selector: 'publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  @Input() PublicationInfo: Publication;

  Publication: Publication[] = [];

  PublicationForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
    private PublicationDataService: PublicationDataService,
    private router: Router,
    private messageService: MessageService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    if (!this.PublicationInfo) {
      this.PublicationInfo = new Publication();
      this.getUserPublication();
    }

    this.PublicationForm = this.fb.group({
      'Name': new FormControl(this.PublicationInfo.Name, Validators.compose(
        [Validators.required,
        Validators.maxLength(250),
        Validators.minLength(3),
          ValidateLetter]
      )),
      'Pages': new FormControl(this.PublicationInfo.Pages, Validators.compose(
        [Validators.required])),
      'FilePath': new FormControl(this.PublicationInfo.FilePath, Validators.compose(
        [Validators.required,
        Validators.maxLength(250),
        Validators.minLength(3),
          ValidateLetter]
      )),
      'Output': new FormControl(this.PublicationInfo.Output, Validators.compose(
        [Validators.required,
        Validators.maxLength(250),
        Validators.minLength(3),
          ValidateLetter])),
      'CreatedAt': new FormControl(this.PublicationInfo.CreatedAt, Validators.compose(
        [Validators.required])),
      'PublishedAt': new FormControl(this.PublicationInfo.PublishedAt, Validators.compose(
        [Validators.required])),
      'IsPublished': new FormControl(this.PublicationInfo.IsPublished, Validators.compose(
        [Validators.required])),
      'IsOverseas': new FormControl(this.PublicationInfo.IsOverseas, Validators.compose(
        [Validators.required])),
      'OwnerId': new FormControl(this.PublicationInfo.OwnerId, Validators.compose(
        [Validators.required,
        Validators.maxLength(250),
        Validators.minLength(3),
          ValidateLetter])),
      'CitationNumberNMBD': new FormControl(this.PublicationInfo.CitationNumberNMBD, Validators.compose(
        [Validators.required])),
      'ImpactFactorNMBD': new FormControl(this.PublicationInfo.ImpactFactorNMBD, Validators.compose(
        [Validators.required]))
    }
    );
  }

  addPublication() {
    if (this.PublicationForm.invalid) return;

    let tempPublication = <Publication>this.PublicationForm.value;

    this.PublicationDataService.addPublication(tempPublication).subscribe(data => {
      if (data) {
        this.PublicationForm.reset();
        this.messageService.add({ key: 'success', severity: 'error', summary: '', detail: 'Публікацію успішно додано' });
      } else {
        this.messageService.add({ key: 'error', severity: 'error', summary: '', detail: '' });
      }
    });
  }

  getUserPublication() {
    this.PublicationDataService.getUserPublication().subscribe((result: Publication[]) => {
      if (result) {
        this.Publication = result;
      }
    });
  }

  getErrorMessage(value: string) {
    if (value == 'Name') {
      if (this.PublicationForm.controls['Name'].errors['required']) {
        return `Поле "Назва" - обов'язкове`;
      }
      else if (this.PublicationForm.controls['Name'].errors['minlength']) {
        return `Поле "Назва" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Name'].errors['maxLength']) {
        return `Поле "Назва" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Name'].errors['validLetter']) {
        return `Коректно заповніть поле "Назва" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Type') {
      if (this.PublicationForm.controls['Type'].errors['required']) {
        return `Поле "Тип" - обов'язкове`;
      }
      else if (this.PublicationForm.controls['Type'].errors['minlength']) {
        return `Поле "Тип" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Type'].errors['maxLength']) {
        return `Поле "Тип" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Type'].errors['validLetter']) {
        return `Коректно заповніть поле "Тип" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Level') {
      if (this.PublicationForm.controls['Level'].errors['required']) {
        return `Поле "Рівень" - обов'язкове`;
      }
      else if (this.PublicationForm.controls['Level'].errors['minlength']) {
        return `Поле "Рівень" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Level'].errors['maxLength']) {
        return `Поле "Рівень" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Level'].errors['validLetter']) {
        return `Коректно заповніть поле "Рівень" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Name') {
      if (this.PublicationForm.controls['Name'].errors['required']) {
        return `Поле "Назва/Напрям" - обов'язкове`;
      }
      else if (this.PublicationForm.controls['Name'].errors['minlength']) {
        return `Поле "Назва/Напрям" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Name'].errors['maxLength']) {
        return `Поле "Назва/Напрям" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Name'].errors['validLetter']) {
        return `Коректно заповніть поле "Назва/Напрям" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Step') {
      if (this.PublicationForm.controls['Step'].errors['required']) {
        return `Поле "Етап" - обов'язкове`;
      }
      else if (this.PublicationForm.controls['Step'].errors['minlength']) {
        return `Поле "Етап" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Step'].errors['maxLength']) {
        return `Поле "Етап" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Step'].errors['validLetter']) {
        return `Коректно заповніть поле "Етап" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Place') {
      if (this.PublicationForm.controls['Place'].errors['required']) {
        return `Поле "Місце та дата проведення" - обов'язкове`;
      }
      else if (this.PublicationForm.controls['Place'].errors['minlength']) {
        return `Поле "Місце та дата проведення" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Place'].errors['maxLength']) {
        return `Поле "Місце та дата проведення" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Place'].errors['validLetter']) {
        return `Коректно заповніть поле "Місце та дата проведення" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'StudentName') {
      if (this.PublicationForm.controls['StudentName'].errors['required']) {
        return `Поле "ПІБ студента" - обов'язкове`;
      }
      else if (this.PublicationForm.controls['StudentName'].errors['minlength']) {
        return `Поле "ПІБ студента" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['StudentName'].errors['maxLength']) {
        return `Поле "ПІБ студента" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['StudentName'].errors['validLetter']) {
        return `Коректно заповніть поле "ПІБ студента" ! Поле не може мати цифорвих значень!`;
      }
    }
    if (value == 'Awards') {
      if (this.PublicationForm.controls['Awards'].errors['required']) {
        return `Поле "Нагороди" - обов'язкове`;
      }
      else if (this.PublicationForm.controls['Awards'].errors['minlength']) {
        return `Поле "Нагороди" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Awards'].errors['maxLength']) {
        return `Поле "Нагороди" повинне мати не менше 3-х символів`;
      }
      else if (this.PublicationForm.controls['Awards'].errors['validLetter']) {
        return `Коректно заповніть поле "Нагороди" ! Поле не може мати цифорвих значень!`;
      }
    }
  }
}
