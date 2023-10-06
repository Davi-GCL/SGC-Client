import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, take, of } from 'rxjs';
import { FormConnection } from '../Models/FormConnection';
import { Table } from '../Models/Table';

@Injectable({
  providedIn: 'root'
})
export class GetTablesService {
  apiUrl = "https://localhost:7029/connect"; 
  sgbd:any;
  connString:any;
  _tables: any;

  get tables():Observable<Array<Table>>{
     return of(this._tables)
  }

  set tables(value: Array<Table>){
     this._tables  = value;
  }

  constructor(private http: HttpClient) { }

  fetchAll(form:FormConnection): Observable<any> {
    //retorna um observable que não precisara de um unsubscribe ao encerrar
    // let form2={
    //   sgbd: 1,
    //   connString: "Data Source=OPERACIONAL39\\SQLEXPRESS;Initial Catalog=sistema_banco;Persist Security Info=True;User ID=sa;Password=root"
    // }
    let aux = this.http.post(this.apiUrl, form, {headers: {'Content-Type': 'application/json'},}).pipe(take(1));
    this._tables = new Observable((subscriber)=>{
      subscriber.next(aux.subscribe(x=>x))
    })
    return aux;
  }
}
