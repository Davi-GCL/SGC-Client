import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrimConnectionService {
  constructor() { }

  replace(text:string){
    text = text.trim()
    text = text.replaceAll("\\\\",'\\');
    let aux = text;
    if(text.startsWith("\"") && text.endsWith("\""))
    {
      aux = text.substring(1,-1);
    }
    return aux;
  }

}
