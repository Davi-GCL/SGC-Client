import { Injectable } from '@angular/core';
import { GeneratedClass } from '../Models/GeneratedClass';

@Injectable({
  providedIn: 'root'
})
export class GeneratedFilesMapperService {
  filesList = new Array<GeneratedClass>();

  constructor() { }

  map(classes:Array<GeneratedClass>){
    // for(let key in objects){
    //   this.filesList.push({name:key+".cs",download:`data:file/cs;base64,${objects[key]}`});
    // }
    for(let i=0;i<classes.length;i++){
      this.filesList.push({
        name:classes[i].name+".cs",
        download:`data:file/cs;base64,${classes[i].download}`, 
        description: classes[i].description
      });
    }
    console.log(classes[0].description);
    return this.filesList;
  }

  clearFilesList(){
    this.filesList = new Array<GeneratedClass>();
  }
}
