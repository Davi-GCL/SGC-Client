import { Component, Input } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  texto: string = "";
  all: boolean = false;
  @Input() databaseName:string = 'banco de dados';
  inputNamespace:FormControl = new FormControl('');


  tables: Array<{name:string,isChecked:boolean}> = [
      {name:'tabela1',isChecked:false},
      {name:'tabela2',isChecked:false},
      {name:'tabela3',isChecked:false},
      {name:'tabela4',isChecked:false},
      {name:'tabela5',isChecked:false},
      {name:'teste',isChecked:false},
  ]


  logger(event:any){
    console.log(event.target.value)
  }

  //Metodo para marcar todas checkbox presentes na lista
  selectAll(search:any){
    //Pega todos as linhas da lista Tabelas 
    // let tablesItems = document.querySelectorAll(".tables-item")
    // console.log(this.all)

    this.tables.forEach((table)=>{
      //Marca apenas os itens que fazem parte da pesquisa
      if(table.name.includes(search)){
        table.isChecked = !this.all; 
      }   
    })

    // tablesItems.forEach((item)=>{
    //   let checkbox = item.getElementsByTagName('input')[0];
    //   checkbox.checked = !this.all;

    //   let index = this.tables.findIndex(t=>t.name==checkbox.id)
    //   this.tables[index].isChecked = !this.all;

    // })

    // this.tables.forEach((table)=>{
    //   table.isChecked= !table.isChecked
    // })

  }

  changeCheckBox(event:any){
    let index = this.tables.findIndex((x)=>x.name===event.target.id)
    this.tables[index].isChecked= event.target.checked;
    // console.log(this.tables)

  }
  preenchido: boolean = false;

  handleSubmit(){

    //Validador do formulario
    //Verifica se na lista de checkboxes tem alguma marcada
    let index = this.tables.findIndex((x)=>x.isChecked === true);
    let inputValue = this.inputNamespace.value;
    
    if(index == -1 || inputValue == ''){
      this.preenchido = false;
      return ;
    }
    this.preenchido = true;
  }

  formChange(event:any){
    // console.log(event.target)
  }

}