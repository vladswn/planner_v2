import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DistributionFilterModel } from "src/app/planner-component/distribution-component/shared/models/distribution-filter.model";



@Injectable()
export class DistributionDataService {
  constructor(private http: HttpClient) { }

  getDayDistribution(filter: DistributionFilterModel) {
    return this.http.post('/api/Distribution/GetDayDistribution', filter);
  }

}
