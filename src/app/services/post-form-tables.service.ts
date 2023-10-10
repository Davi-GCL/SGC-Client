import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Table } from '../Models/Table';
import { HttpClient } from '@angular/common/http';
import { FormTables } from '../Models/FormTables';
import { GeneratedClass } from '../Models/GeneratedClass';

@Injectable({
  providedIn: 'root'
})
export class PostFormTablesService {

  apiUrl = "https://localhost:7029/Connection/BuildClass"; 
  sgbd:any;
  connString:any;
  _classes: any;

  get classes():Observable<Array<GeneratedClass>>{
     return of(this._classes)
  }
  set classes(value: Array<GeneratedClass>){
     this._classes  = value;
  }

  constructor(private http: HttpClient) { }

  postSelection(form:FormTables): Observable<any> {
    let aux = this.http.post(this.apiUrl, form, {headers: {'Content-Type': 'application/json'},}).pipe(take(1));
    this._classes = new Observable((subscriber)=>{
      subscriber.next(aux.subscribe(x=>x))
    })
    return aux;
  }
}
