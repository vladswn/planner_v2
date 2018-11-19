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


@Component({
    selector: 'add-update-user',
    templateUrl: './add-update-user.component.html',
})
export class AddUpdateUserComponent implements OnInit {
    @Input() userProfile: UserProfileModel;
    //@Output() back = new EventEmitter();
    userform: FormGroup;
    roles = ApplicationConstants.ROLES;
    academicTitles = ApplicationConstants.ACADEMIC_TITLE;
    degrees = ApplicationConstants.DEGREE;
    positions = ApplicationConstants.POSITION;

    constructor(private authenticationService: AuthenticationService,
        private userDataService: UserDataService,
        private router: Router,
        private messageService: MessageService,
        private fb: FormBuilder) {
    }

    ngOnInit() {
        if (!this.userProfile) {
            this.userProfile = new UserProfileModel();
        }

        this.userform = this.fb.group({
            'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
            'firstName': new FormControl('', Validators.compose(
                [Validators.required,
                Validators.maxLength(25),
                Validators.minLength(3),
                    ValidateLetter]
            )),
            'lastName': new FormControl('', Validators.compose(
                [Validators.required,
                Validators.maxLength(25),
                Validators.minLength(3),
                    ValidateLetter]
            )),
            'thirdName': new FormControl('', Validators.compose(
                [Validators.required,
                Validators.maxLength(25),
                Validators.minLength(3),
                    ValidateLetter])),
            'password': new FormControl('', Validators.compose(
                [Validators.required,
                Validators.minLength(4)])),
            'confirmPassword': new FormControl('', Validators.compose(
                [Validators.required,
                Validators.minLength(4)])),
            'orcidLink': new FormControl('', Validators.compose([ValidateURL])),
            'scholarLink': new FormControl('', Validators.compose([ValidateURL])),
            'role': new FormControl('', []),
        }
        );

    }

    updateUser() {
        console.log(this.userform);
        //this.userDataService.updateUserInfo(this.userProfile).subscribe(data => {
        //    if (data) {
        //    }
        //});
        //this.back.emit(null);
    }

    getErrorMessage(value: string) {
        if (value == 'password') {
            //let error;
            if (this.userform.controls['password'].errors['required']) {
                return `Пароль - обов'язковий`;
            }
            else if (this.userform.controls['password'].errors['minlength']) {
                return 'Пароль повинен мати не менше 4-х символів';
            }
        }
        if (value == 'email') {
            if (this.userform.controls['email'].errors['required']) {
                return `Електронна пошта - обов'язкова`;
            }
            else if (this.userform.controls['email'].errors['email']) {
                return `Некоректний формат електронної пошти`;
            }
        }
        if (value == 'firstName') {
            if (this.userform.controls['firstName'].errors['required']) {
                return `Ім'я - обов'язкове`;
            }
            else if (this.userform.controls['firstName'].errors['minlength']) {
                return `Ім'я повинне мати не менше 4-х символів`;
            }
            else if (this.userform.controls['firstName'].errors['maxLength']) {
                return `Ім'я повинне мати не менше 4-х символів`;
            }
            else if (this.userform.controls['firstName'].errors['validLetter']) {
                return `Введіть коректне ім'я! Поле не може мати цифорвих значень!`;
            }
        }
        if (value == 'lastName') {
            if (this.userform.controls['lastName'].errors['required']) {
                return `Прізвище - обов'язкове`;
            }
            else if (this.userform.controls['lastName'].errors['minlength']) {
                return `Прізвище повинне мати не менше 4-х символів`;
            }
            else if (this.userform.controls['lastName'].errors['maxLength'] ) {
                return `Прізвище повинне мати не більше 25-ти символів`;
            }
            else if (this.userform.controls['lastName'].errors['validLetter']) {
                return `Введіть коректне прізвище! Поле не може мати цифорвих значень!`;
            }
        }
        if (value == 'thirdName') {
            if (this.userform.controls['thirdName'].errors['required']) {
                return `По-батькові  - обов'язкове`;
            }
            else if (this.userform.controls['thirdName'].errors['minlength']) {
                return `По-батькові  повинне мати не менше 4-х символів`;
            }
            else if (this.userform.controls['thirdName'].errors['maxLength']) {
                return `По-батькові  повинне мати не більше 25-ти символів`;
            }
            else if (this.userform.controls['thirdName'].errors['validLetter']) {
                return `Заповніть поле по-батькові коректно! Поле не може мати цифорвих значень!`;
            }
        }
        if (value == 'password') {
            if (this.userform.controls['password'].errors['required']) {
                return `Пароль - обов'язковий`;
            }
            else if (this.userform.controls['password'].errors['minlength']) {
                return `Пароль повинне мати не менше 4-х символів`;
            }
            else if (this.userform.controls['password'].errors['notEqual']) {
                return `Парололі не співпадають`;
            }
        }
        if (value == 'confirmPassword') {
            if (this.userform.controls['confirmPassword'].errors['required']) {
                return `Пароль - обов'язковий`;
            }
            else if (this.userform.controls['confirmPassword'].errors['minlength']) {
                return `Пароль повинне мати не менше 4-х символів`;
            }
            else if (this.userform.controls['confirmPassword'].errors['notEqual']) {
                return `Парололі не співпадають`;
            }
        }
        if (value == 'orcidLink') {
            if (this.userform.controls['orcidLink'].errors['validURL']) {
                return `Не валідний url`;
            }
        }
        if (value == 'scholarLink') {
            if (this.userform.controls['scholarLink'].errors['validURL']) {
                return `Не валідний url`;
            }
        }
        if (value == 'role') {
            if (this.userform.controls['role'].errors['required']) {
                return `Роль - обов'язкова`;
            }
        }
        
    }

    checkConfirmPassword() {
        let pass = this.userform.controls.password.value;
        let confirmPassword = this.userform.controls.confirmPassword.value;

        //return pass === confirmPassword ? null : { notEqual: true }
        if (pass !== confirmPassword) {
            this.userform.controls['password'].setErrors({ 'notEqual': true });
            this.userform.controls['confirmPassword'].setErrors({ 'notEqual': true });
        } else {
            this.userform.controls['password'].setErrors(null);
            this.userform.controls['confirmPassword'].setErrors(null);
        }
        
    }

    private checkUser() {

    }
}
