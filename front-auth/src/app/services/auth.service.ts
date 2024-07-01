import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModelDto, User } from '../interfaces/user';
import { environment } from '../shared/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  pathAuth: string = "/softka/auth" 

  constructor(private http: HttpClient) { }

  loginAuth(email: string, password: string): Observable<ResponseModelDto<User>>{
    const user: User = {
      "email": email,
      "password": password
    }
    return this.http.post<ResponseModelDto<User>>(`${environment.apiBaseUrl}${this.pathAuth}/login`, user);
  }

  logoutAuth(email: string): Observable<ResponseModelDto<string>>{
    const user: User = {
      "email": email,
    }
    return this.http.post<ResponseModelDto<string>>(`${environment.apiBaseUrl}${this.pathAuth}/logout`, user);
  }

}
