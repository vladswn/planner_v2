export class PublicationAddEditModel {
    publicationId: string;
    name: string;
    filePath: string;
    pages: number;
    output: string;
    citationNumberNMBD: number;
    impactFactorNMBD: number;
    publishedAt: Date;
    nmdbId: string;
    isOverseas: boolean;
    researchDoneType: number;//ResearchDoneTypeEnum
    storingType: number;//StoringTypeEnum
    publicationType: number;//PublicationTypeEnum

    collaboratorsIds: number[];
    newCollaboratorsIds: number[];

    constructor() {
        this.publicationId = null;
        this.name = null;
        this.filePath = null;
        this.pages = null;
        this.output = null;
        this.citationNumberNMBD = null;
        this.publishedAt = null;
        this.nmdbId = null;
        this.isOverseas = false;
        this.researchDoneType = null;
        this.storingType = null;
        this.publicationType = null;
        this.collaboratorsIds = [];
        this.newCollaboratorsIds = [];
    }
}
