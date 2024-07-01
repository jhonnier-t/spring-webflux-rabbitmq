import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModelDto } from '../interfaces/user';
import { environment } from '../shared/environments/environments';
import { Audit } from '../interfaces/audit';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  pathAuth: string = "/softka/audit" 

  constructor(private http: HttpClient) { }

  listAudit(): Observable<ResponseModelDto<Audit[]>>{
    return this.http.get<ResponseModelDto<Audit[]>>(`${environment.apiBaseUrl}${this.pathAuth}/list`);
  }

}
