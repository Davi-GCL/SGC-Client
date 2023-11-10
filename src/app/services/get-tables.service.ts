import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, take, of, Subject} from 'rxjs';
import { FormConnection } from '../Models/FormConnection';
import { Table } from '../Models/Table';

@Injectable({
  providedIn: 'root'
})
export class GetTablesService {
  apiUrl = "https://localhost:7029/Connection/Connect"; 
  sgbd:any;
  connString:any;
  private _tables:any = new Subject<Array<Table>>();

  get tables():Observable<Array<Table>>{
    return this._tables.asObservable();
  }

  set tables(value: Array<Table>){
    this._tables.next(value);
  }

  constructor(private http: HttpClient) { }

  fetchAll(form:FormConnection): Observable<any> {
    let res = this.http.post(this.apiUrl, form, {headers: {'Content-Type': 'application/json'},}).pipe(take(1));

    // this.clearData();
    res.subscribe((success)=>{
      this.tables = <Array<Table>> success;
    },
      error=>console.error(error)
    );
    return res;
  }

  //Limpa a variavel observable para não ficar acumulando informações atraves das requisições
  clearData(){
    this._tables.complete() ;
    this._tables = new Subject<Array<Table>>();
  }

  filterString(text:string){
    text = text.trim()
    let result = text.replace('\\\\','\\');

    if(result.startsWith("\"") && result.endsWith("\""))
    {
      result = result.substring(1,result.length-1);
    }
    return result;
  }
}
