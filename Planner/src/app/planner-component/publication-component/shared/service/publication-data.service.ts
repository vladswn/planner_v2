import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Publication } from "src/app/planner-component/publication-component/shared/models/publication.model";
import { UserInfo } from "src/app/shared/models/user-info.model";
import { HttpRequest } from "@angular/common/http";
import { HttpEventType } from "@angular/common/http";

@Injectable()
export class PublicationDataService {
  constructor(private http: HttpClient) { }

  addPublication(ndr: Publication) {
    return this.http.post('/api/Ndr/AddPublication', ndr);
  }

  getUserPublication() {
    return this.http.get('/api/Ndr/GetUserPublication');
  }
}
