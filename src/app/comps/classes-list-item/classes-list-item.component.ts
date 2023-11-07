import { Component, Input } from '@angular/core';
import { GeneratedClass } from 'src/app/Models/GeneratedClass';

@Component({
  selector: 'app-classes-list-item',
  templateUrl: './classes-list-item.component.html',
  styleUrls: ['./classes-list-item.component.css']
})
export class ClassesListItemComponent {
  @Input() class!: GeneratedClass;
  @Input() id!: string|number;

  showDescription(event:any, descriptionEId:any):void{
    let desc = document.getElementById(descriptionEId);
    if(desc){
      if(desc.style.display == "block"){
        desc.style.display = "none";
        event.target.className = "bi bi-chevron-down";
      }else{
        desc.style.display = "block";
        event.target.className = "bi bi-chevron-up";
      }
    }
  }

  copyDescription(event:any,text:string){
    navigator.clipboard.writeText(text)

    let lateTitle = event.target.title;
    event.target.title = "Classe copiada para área de transferência";
    event.target.className = "bi bi-clipboard-check-fill";
    setTimeout(()=>{
      event.target.title = lateTitle;
      event.target.className = "bi bi-clipboard";
    },1000)
  }
}
