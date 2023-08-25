import { Component } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  tables: Array<{name:string,isChecked:boolean}> = [
      {name:'tabela1',isChecked:false},
      {name:'tabela2',isChecked:false},
      {name:'tabela3',isChecked:false},
      {name:'tabela4',isChecked:false},
      {name:'tabela5',isChecked:false},
      {name:'teste',isChecked:false},
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
    let tablesItems = document.querySelectorAll(".tables-item")

    tablesItems.forEach((item)=>{
      let checkbox = item.getElementsByTagName('input')[0];
      checkbox.checked = this.allSelected? false : true;

      let index = this.tables.findIndex(t=>t.name==checkbox.id)
      this.tables[index].isChecked = this.allSelected? false : true;

    })

    // this.tables.forEach((table)=>{
    //   table.isChecked= !table.isChecked
    // })

    this.allSelected = !this.allSelected;

  }

  changeCheckBox(event:any){
    let index = this.tables.findIndex((x)=>x.name===event.target.id)
    this.tables[index].isChecked= event.target.checked;
    console.log(this.tables)

  }
}
