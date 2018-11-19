import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserProfileModel } from "src/app/planner-component/home-component/shared/models/user-profile.model";
import { UserInfo } from "src/app/shared/models/user-info.model";


@Injectable()
export class UserDataService {
    constructor(private http: HttpClient) { }


    updateUserInfo(user: UserProfileModel) {
        return this.http.post('/api/Account/UpdateUser', user);
    }


}
