import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModelDto, User } from '../interfaces/user';
import { environment } from '../shared/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  pathAuth: string = "/softka/user" 

  constructor(private http: HttpClient) { }

  listUsers(): Observable<ResponseModelDto<User[]>>{
    return this.http.get<ResponseModelDto<User[]>>(`${environment.apiBaseUrl}${this.pathAuth}/list`);
  }

}
