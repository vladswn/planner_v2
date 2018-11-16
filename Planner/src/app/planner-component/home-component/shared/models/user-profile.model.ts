export class UserProfileModel {
    email: string;
    firstName: string;
    lastName: string;
    thirdName: string;
    scholarLink: string;
    orcidLink: string;
    degreeViewMode: string;
    positionViewMode: string;
    academicTitleViewMode: string;
    degree: number;
    position: number;
    academicTitle: number;

    constructor() {
        this.email = null;
        this.firstName = null;
        this.lastName = null;
        this.thirdName = null;
        this.scholarLink = null;
        this.orcidLink = null;
        this.degreeViewMode = null;
        this.positionViewMode = null;
        this.academicTitleViewMode = null;
        this.degree = null;
        this.position = null;
        this.academicTitle = null;
    }

}
