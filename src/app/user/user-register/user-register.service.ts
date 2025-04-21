import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../../Models/user';

@Injectable({
    providedIn: 'root'
})
export class UserRegisterService {

    constructor(private http: HttpClient) {

    }

    USER_REGISTER_URL = 'http://localhost:8080/api/user/register';

    // get all client details
    checkUserRegistrationDetails(user: User): Observable<any> {
        return this.http.post<User>(this.USER_REGISTER_URL, user);
    }


}