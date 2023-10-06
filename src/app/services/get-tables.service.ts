import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { FormConnection } from '../Models/FormConnection';

@Injectable({
  providedIn: 'root'
})
export class GetTablesService {

  sgbd:any
  connString:any
  apiUrl = "https://localhost:7029/connect";

  constructor(private http: HttpClient) { }

  fetchAll(form:FormConnection): Observable<any> {
    //retorna um observable que não precisara de um unsubscribe ao encerrar
    let form2={sgbd:1, connString:"Data Source=LUNA-PC\\\\SQLEXPRESS;Initial Catalog=sistema_banco;Persist Security Info=True;User ID=sa;Password=root"}
    return this.http.post(this.apiUrl, form2).pipe(take(1));
  }
}
