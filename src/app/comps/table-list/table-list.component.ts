import { Component } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  tables:Array<{name:string,checked:boolean}> = [
    {name:'tabela1', checked:false},
    {name:'tabela2', checked:false},
    {name:'tabela3', checked:false},
    {name:'tabela4', checked:false},
    {name:'tabela5', checked:false},
    {name:'tabela6', checked:false},
  ]

  texto: string = "";

  logger(event:any){
    console.log(event.target.value)
  }

  teste() {
    console.log(this.texto);
  }
  allSelected:boolean = false;

  //Metodo para marcar todas checkbox presentes na lista
  selectAll(){
    //Pega todos as linhas da lista Tabelas 
    const items = document.querySelectorAll(".tables-item");
    const checkboxes = document.querySelectorAll(".form-check-input")

    if(this.allSelected == false){
      items.forEach((item)=>{
        // box.setAttribute('checked','true')
        let box = item.getElementsByTagName('input')
        console.log(box)
        box[0].checked = true;
        this.tables[parseInt(item.id)].checked = true;
      })
    }else{
      items.forEach((item)=>{
        // box.removeAttribute('checked')
        let box = item.getElementsByTagName('input')
        console.log(box)
        box[0].checked = false;
        this.tables[parseInt(item.id)].checked = false;
      })
    }

  }

  saveSelect(event:any){
    //Atribui ao atributo checked do respectivo objeto da tabela, localizado pelo id, o estado do checkbox(true ou false) 
    this.tables[event.target.parentNode.id].checked = event.target.checked;
  }
  getCheckBoxState(){
    
  }
}
