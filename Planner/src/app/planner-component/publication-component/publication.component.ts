import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { LoginModel } from "src/app/account-component/shared/models/login.model";
import { AuthenticationService } from "src/app/shared/components/authentication-component";
import { Router } from "@angular/router";
import { MessageService } from "primeng/components/common/messageservice";
import { UserProfileModel } from "src/app/planner-component/home-component/shared/models/user-profile.model";
import { UserInfo } from "src/app/shared/models/user-info.model";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "events";
import { UserDataService } from "src/app/planner-component/shared/service/user-data.service";
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

  publicationForm: FormGroup;

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

    this.publicationForm = this.fb.group({
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
        [Validators.required])),
      'NMBDId': new FormControl(this.PublicationInfo.CitationNumberNMBD, Validators.compose(
        [Validators.required])),
      'StoringType': new FormControl(this.PublicationInfo.CitationNumberNMBD, Validators.compose(
        [Validators.required])),
      'PublicationType': new FormControl(this.PublicationInfo.CitationNumberNMBD, Validators.compose(
        [Validators.required])),
      'ResearchDoneType': new FormControl(this.PublicationInfo.CitationNumberNMBD, Validators.compose(
        [Validators.required])),
      'NewCollaboratorsNames': new FormControl(this.PublicationInfo.CitationNumberNMBD, Validators.compose(
        [Validators.required]))
    }
    );
  }

  addPublication() {
    if (this.publicationForm.invalid) return;

    let tempPublication = <Publication>this.publicationForm.value;

    this.PublicationDataService.addPublication(tempPublication).subscribe(data => {
      if (data) {
        this.publicationForm.reset();
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
      if (this.publicationForm.controls['Name'].errors['required']) {
        return `Поле "Назва" - обов'язкове`;
      }
      else if (this.publicationForm.controls['Name'].errors['minlength']) {
        return `Поле "Назва" повинне мати не менше 3-х символів`;
      }
      else if (this.publicationForm.controls['Name'].errors['maxLength']) {
        return `Поле "Назва" повинне мати не менше 3-х символів`;
      }
      else if (this.publicationForm.controls['Name'].errors['validLetter']) {
        return `Коректно заповніть поле "Назва" ! Поле не може мати цифорвих значень!`;
      }
    }
  }
}
