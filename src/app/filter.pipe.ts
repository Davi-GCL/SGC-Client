import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStatus: string) {

    if(value=="" || filterStatus==""){
      return value
    }else{
      let resultData: Array<string> = [];

      for(let aux of value){
        if(aux.name.toLowerCase().includes(filterStatus.toLowerCase())){
          resultData.push(aux);
        }
      }
      return resultData;
    }
  }

}
