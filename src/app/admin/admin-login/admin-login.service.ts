import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../../Models/user';

@Injectable({
    providedIn: 'root'
})
export class AdminLoginService {

    constructor(private http: HttpClient) {

    }

    ADMIN_LOGIN_URL = 'http://localhost:8080/api/Admin/login';

    // get all client details
    checkAdminLoginDetails(user: User): Observable<any> {
        return this.http.post<User>(this.ADMIN_LOGIN_URL, user);
    }


}