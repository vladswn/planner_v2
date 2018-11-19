import { SelectItem } from 'primeng/api';

export class ApplicationConstants {
    public static readonly ROLES: SelectItem[] = [
        { label: 'Адміністратор', value: 'Admin' },
        { label: 'Голова методичного відділу', value: 'HeadOfMethodologyDepartment' },
        { label: 'Голова наукового сектора', value: 'HeadOfScientificSector' },
        { label: 'Голова навчальної частини', value: 'HeadOfStudies' },
        { label: 'Викладач', value: 'Teacher' },
        { label: 'Викладач-модератор', value: 'TeacherModerator' },
        { label: 'Користувач', value: 'User' }
    ];


    public static readonly ACADEMIC_TITLE: SelectItem[] = [
        { label: 'Кандидат наук', value: '1' },
        { label: 'Доктор наук', value: '2' },
    ];

    public static readonly DEGREE: SelectItem[] = [
        { label: 'Доцент', value: '1' },
        { label: 'Старший науковий співробітник', value: '2' },
        { label: 'Професор', value: '3' },
    ];

    public static readonly POSITION: SelectItem[] = [
        { label: 'Завідуючий кафедрою', value: '1' },
        { label: 'Доцент кафедрою', value: '2' },
        { label: 'Старший викладач кафедри', value: '3' },
        { label: 'Викладач кафедри', value: '4' },
        { label: 'Асистент', value: '5' }
    ];

}

