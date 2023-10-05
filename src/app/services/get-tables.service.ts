import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormConnection } from '../Models/FormConnection';

@Injectable({
  providedIn: 'root'
})
export class GetTablesService {

  sgbd:any
  connString:any
  apiUrl = "https://localhost:7029/swagger/index.html";

  constructor(private http: HttpClient) { }

  fetchAll(form:FormConnection): Observable<any> {

    return this.http.post(this.apiUrl,{});
  }
}
