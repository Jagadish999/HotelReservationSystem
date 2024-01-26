import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "https://localhost:7158/api/Reservation/";
  userStatus: Subject<string> = new Subject();

  constructor(private http: HttpClient, private jwt: JwtHelperService) {

  }
  register(user: any) {

    return this.http.post(this.baseUrl + "Register", user, {
      responseType: 'text',
    })
  }

  login(info: any){

    let params = new HttpParams().append("email", info.email).append('password', info.password).append('accountType', info.userType);

    return this.http.get(this.baseUrl + 'Login', {
      params: params,
      responseType: 'text',
    })
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem('access_token') !== null && !this.jwt.isTokenExpired()){
      return true;
    }

    return false;
  }

}
