import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserInfo } from "src/app/shared/models/user-info.model";
import { HttpRequest } from "@angular/common/http";
import { HttpEventType } from "@angular/common/http";
import { TrainingJobModel } from "src/app/planner-component/indiv-plan-component/shared/models/training-job.model";
import { IndivPlanFieldsValueModel } from "src/app/planner-component/indiv-plan-component/shared/models/indiv-plan-field-value.model";

@Injectable()
export class IndivPlanDataService {
  constructor(private http: HttpClient) { }

  updateTrainingJob(trainingJob: TrainingJobModel) {
    return this.http.post('/api/IndividualPlan/UpdateTrainingJob', trainingJob);
  }

  getTrainingJob() {
    return this.http.get('/api/IndividualPlan/GetTrainingJob');
  }

  getIndivPlanField(indPlanTypeId) {
    return this.http.post('/api/IndividualPlan/GetIndivPlanField', indPlanTypeId);
  }

  getIndivPlanFieldValue() {
    return this.http.get('/api/IndividualPlan/GetIndivPlanFieldValue');
  }

  updateIndivPlanFieldValue(indivPlanFieldsValue: IndivPlanFieldsValueModel) {
    return this.http.post('/api/IndividualPlan/UpdateIndivPlanFieldValue', indivPlanFieldsValue);
  }
}
