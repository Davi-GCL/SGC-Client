import { Injectable } from '@angular/core';
import { Observable, Subject, of, take } from 'rxjs';
import { Table } from '../Models/Table';
import { HttpClient } from '@angular/common/http';
import { FormTables } from '../Models/FormTables';
import { GeneratedClass } from '../Models/GeneratedClass';
import { GeneratedFilesMapperService } from './generated-files.mapper.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostFormTablesService {

  apiUrl = `${environment.api}Connection/Class`; 
  sgbd:any;
  connString:any;
  _classes: any = new Subject<Array<Table>>();

  get classes():Observable<Array<GeneratedClass>>{
     return this._classes.asObservable()
  }
  set classes(value: Array<GeneratedClass>){
    this._classes = value;
  }

  constructor(private http: HttpClient, private filesMapper: GeneratedFilesMapperService) { }

  postSelection(form:FormTables): Observable<any> {
    
    let aux = this.http.post(this.apiUrl, form, {headers: {'Content-Type': 'application/json'},}).pipe(take(1));
    // this._classes = new Observable((subscriber)=>{
    //   subscriber.next(aux.subscribe(x=>x))
    // })
    console.log("fazendo post das seleções")
    aux.subscribe((success)=>{
      this.classes = <Array<GeneratedClass>> success;
    },
      error=>console.error(error)
    );
    return aux;
  }
}

