
import { Component, OnInit, Input } from "@angular/core";
import { PublicationAddEditModel } from "src/app/planner-component/publication-component/shared/models/publication-add-edit.model";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/shared/components/authentication-component";
import { PublicationDataService } from "src/app/planner-component/publication-component/shared/service/publication-data.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/components/common/messageservice";
import { ValidateLetter } from "src/app/shared/validators/letter-validator";
import { ApplicationConstants } from "src/app/shared/constants/constants";
import { SelectItem } from "primeng/components/common/selectitem";
import { HttpEventType } from "@angular/common/http";

@Component({
    selector: 'add-edit-publication',
    templateUrl: './add-edit-publication.component',
//    styleUrls: ['./publication.component.css']
    
})
export class PublicationComponent implements OnInit {
    @Input() publication: PublicationAddEditModel;

    researchDoneTypes = ApplicationConstants.RESEARCHDONETYPE;
    storingTypes = ApplicationConstants.STORINGTYPE;
    publicationTypes = ApplicationConstants.PUBLICATION;
    nmbds: SelectItem[];
    file: File;
    publicationFile: string;
    ua: any;
    invalidDates: Array<Date>;
    rangeDates: Date[];
    minDate: Date;
    maxDate: Date;

    //Publication: Publication[] = [];
    publicationForm: FormGroup;

    constructor(private authenticationService: AuthenticationService,
        private publicationDataService: PublicationDataService,
        private router: Router,
        private messageService: MessageService,
        private fb: FormBuilder) {
    }

    ngOnInit() {
        if (!this.publication) {
            this.publication = new PublicationAddEditModel();
        }

        this.initCalendar();
        this.publicationForm = this.fb.group({
            'name': new FormControl(this.publication.name, Validators.compose(
                [Validators.required,
                Validators.maxLength(250),
                Validators.minLength(3),
                    ValidateLetter]
            )),
            'pages': new FormControl(this.publication.pages, Validators.compose(
                [Validators.required])),
            'filePath': new FormControl(this.publication.filePath, []),
            'output': new FormControl(this.publication.output, Validators.compose(
                [Validators.required,
                Validators.maxLength(250),
                Validators.minLength(3),
                    ValidateLetter])),
            'publishedAt': new FormControl(this.publication.publishedAt, Validators.compose(
                [Validators.required])),
            'isOverseas': new FormControl(this.publication.isOverseas, Validators.compose(
                [Validators.required])),
            'citationNumberNMBD': new FormControl(this.publication.citationNumberNMBD, Validators.compose(
                [Validators.required])),
            'impactFactorNMBD': new FormControl(this.publication.impactFactorNMBD, Validators.compose(
                [Validators.required])),
            'nmdbId': new FormControl(this.publication.nmdbId, Validators.compose(
                [Validators.required])),
            'storingType': new FormControl(this.publication.storingType, Validators.compose(
                [Validators.required])),
            'publicationType': new FormControl(this.publication.publicationType, Validators.compose(
                [Validators.required])),
            'researchDoneType': new FormControl(this.publication.researchDoneType, Validators.compose(
                [Validators.required])),
            'newCollaboratorsIds': new FormControl(this.publication.newCollaboratorsIds, [Validators.required]),
            'collaboratorsIds': new FormControl(this.publication.collaboratorsIds, [Validators.required]),
        }
        );
    }

    addPublication() {
        if (this.publicationForm.invalid) return;

        let tempPublication = <PublicationAddEditModel>this.publicationForm.value;

        this.publicationDataService.addPublication(tempPublication).subscribe(data => {
            if (data) {
                this.publicationForm.reset();
                this.messageService.add({ key: 'success', severity: 'error', summary: '', detail: 'Публікацію успішно додано' });
            } else {
                this.messageService.add({ key: 'error', severity: 'error', summary: '', detail: '' });
            }
        });
    }

    //getUserPublication() {
    //    this.PublicationDataService.getUserPublication().subscribe((result: Publication[]) => {
    //        if (result) {
    //            this.Publication = result;
    //        }
    //    });
    //}

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



    async uploadFile(data) {
        this.file = data.files[0];
        await this.publicationDataService.uploadFiles(this.file).subscribe(event => {
            if (event.type === HttpEventType.Response) {
                this.publicationFile = event.body.toString();
            }
        });
    }

    initCalendar() {
        this.ua = {
            firstDayOfWeek: 0,
            dayNames: ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"],
            dayNamesShort: ["пн", "вв", "ср", "чт", "пт", "сб", "нд"],
            dayNamesMin: ["пн", "вв", "ср", "чт", "пт", "сб", "нд"],
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthNamesShort: ["січ", "лют", "берез", "квіт", "трав", "черв", "лип", "серп", "верес", "жовт", "листоп", "груд"],
            today: 'Сьогодні',
            clear: 'Видалити'
        }

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today, invalidDate];
    }

}
