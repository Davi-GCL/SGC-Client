import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { FormTables } from 'src/app/Models/FormTables';
import { GeneratedClass } from 'src/app/Models/GeneratedClass';
import { ICheckTable } from 'src/app/Models/ICheckTable';
import { Table } from 'src/app/Models/Table';
import { GeneratedFilesMapperService } from 'src/app/services/generated-files.mapper.service';
import { GetTablesService } from 'src/app/services/get-tables.service';
import { PostFormTablesService } from 'src/app/services/post-form-tables.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnChanges{
  texto: string = "";
  all: boolean = false;
  databaseName = "";
  resList = new Array<GeneratedClass>();
  inputNamespace:FormControl = new FormControl('');

  @Input({alias:'inputTable'}) inputTables!: Array<Table>;

  tables: Array<ICheckTable> = []

  // ngOnInit(){
  //   if(this.inputTables){
  //     let result = new Array<ICheckTable>();
  //     this.inputTables.forEach((table:any) => {
  //       result.push({ name: table.name ,isChecked:false });
  //     });
  //     this.tables = result;
  //     this.databaseName = this.inputTables[0].catalog;
  //   }
    
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(this.inputTables){
      let result = new Array<ICheckTable>();
      this.inputTables.forEach((table:any) => {
        result.push({ name: table.name ,isChecked:false });
      });
      this.tables = result;
      this.databaseName = this.inputTables[0].catalog;
    }
  }

  constructor(private getTables : GetTablesService, private postForm : PostFormTablesService, private filesMapper : GeneratedFilesMapperService){
    // this.tables = new Array<ICheckTable>();
    // this.getTables.tables.subscribe((data)=>{
    //   data.forEach((d:any)=>{
    //     this.tables.push({name: d.name, isChecked:false})
    //   })
    //   this.databaseName = data[0].catalog;
    // })
  }

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
    //Pega a string de conexão armazenada no service
    const {sgbd , connString} = this.getTables;
    let formTables: FormTables = new FormTables(this.tables, sgbd, connString ,inputValue);
    //Programar o algoritmo para enviar uma lista com as tabelas marcadas
    this.postForm.postSelection(formTables).subscribe((success)=>{
      this.filesMapper.clearFilesList();
      this.filesMapper.map(success);
    },
    error=>console.error(error));
    
  }

  formChange(event:any){
    // console.log(event.target)
  }

}