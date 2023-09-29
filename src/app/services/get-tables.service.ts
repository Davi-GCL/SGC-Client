import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTablesService {

  sgbd:any
  connString:any

  constructor() { }
}
