import { Injectable } from '@angular/core';
import { Alert } from '../Models/Alert';

@Injectable({
  providedIn: 'root'
})
export class UIHelpersService {
  loading: boolean = false;
  alertList: Alert[] | null = null;

  constructor() {  }

  showErrorMessage(message: string){
    if(this.alertList == null){
      this.alertList = new Array<Alert>();
    }
    this.alertList.push(new Alert("danger", message))
    //Remove o alerta após o intervalo
    setTimeout(()=>{
      this.alertList?.shift();
    },4000)

    this.loading = false;
  }

  showWarningMessage(message: string){
    if(this.alertList == null){
      this.alertList = new Array<Alert>();
    }
    this.alertList.push(new Alert("warning", message))
    //Remove o alerta após o intervalo
    setTimeout(()=>{
      this.alertList?.shift();
    },4000)

    this.loading = false;
  }

  showSuccessMessage(message: string){
    if(this.alertList == null){
      this.alertList = new Array<Alert>();
    }
    this.alertList.push(new Alert("success", message))
    //Remove o alerta após o intervalo
    setTimeout(()=>{
      this.alertList?.shift();
    },3000)

    this.loading = false;
  }
}
