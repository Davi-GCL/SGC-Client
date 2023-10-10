import { Injectable } from '@angular/core';
import { GeneratedClass } from '../Models/GeneratedClass';

@Injectable({
  providedIn: 'root'
})
export class GeneratedFilesMapperService {
  filesList = new Array<GeneratedClass>();

  constructor() { }

  map(objects:Array<Object>){
    for(let key in objects){
      this.filesList.push({name:key+".cs",download:`data:file/cs;base64,${objects[key]}`});
    }
    return this.filesList;
  }
}
