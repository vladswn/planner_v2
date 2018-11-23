export class Publication {
  Name: string;
  FilePath: string;
  Pages: number;
  Output: string;
  CreatedAt: Date;
  PublishedAt: Date;
  IsPublished: number;
  IsOverseas: string;
  OwnerId: string;
  CitationNumberNMBD: number;
  ImpactFactorNMBD: number;

  constructor() {
    this.Name = null;
    this.FilePath = null;
    this.Pages = null;
    this.Output = null;
    this.CreatedAt = null;
    this.PublishedAt = null;
    this.IsPublished = null;
    this.IsOverseas = null;
    this.OwnerId = null;
    this.CitationNumberNMBD = null;
    this.ImpactFactorNMBD = null;
  }
}
