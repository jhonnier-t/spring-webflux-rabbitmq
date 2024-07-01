import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from '../shared/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  pathAuth: string = "/softka/auth/login" 

  constructor(private http: HttpClient) { }

  loginAuth(email: string, password: string): Observable<string>{
    const user: User = {
      "email": email,
      "password": password
    }
    return this.http.post<string>(`${environment.apiBaseUrl}${this.pathAuth}`, user);
  }

}
