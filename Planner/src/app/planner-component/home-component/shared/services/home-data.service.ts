import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserProfileModel } from "src/app/planner-component/home-component/shared/models/user-profile.model";


@Injectable()
export class HomeDataService {
    constructor(private http: HttpClient) { }


    updateUserInfo(user: UserProfileModel) {
        return this.http.post('/api/Home/UpdatePartner', user);
    }


}
