import { Component } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  tables: string[] = [
    'tabela1',
    'tabela2',
    'tabela3',
    'tabela4',
    'tabela5',
    'tabela6',
    'tabela7',
    'tabela8',
  ]

  texto: string = "";

  logger(event:any){
    console.log(event.target.value)
  }

  teste() {
    console.log(this.texto);
  }
  allSelected:boolean = false;

  selectAll(){
    //Pega todos as linhas da lista Tabelas 
    // const items = document.querySelectorAll(".tables-item");
    const checkboxes = document.querySelectorAll(".form-check-input")

    // checkboxes.forEach((box)=>{

    // })
    // items.forEach((item)=>{
    //   let checkbox = item.querySelector(".form-check-input");
    //   if(checkbox){
    //     checkbox.nodeValue = 'on';
    //   }
    // })

    this.allSelected = !this.allSelected;

  }
}
