import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { GetTablesService } from 'src/app/services/get-tables.service';
import { FormConnection } from 'src/app/Models/FormConnection';
import { Table } from 'src/app/Models/Table';

@Component({
  selector: 'app-form-connection',
  templateUrl: './form-connection.component.html',
  styleUrls: ['./form-connection.component.css']
})
export class FormConnectionComponent {
  connectionForm = new FormGroup({
    sgbdRadio: new FormControl('1'),
    connString: new FormControl('')
  })
  warn: string = " ";

  constructor(private getTables: GetTablesService){}

  @Output() APIEvent = new EventEmitter();

  handleSubmit(){
    if(! this.connectionForm.value.connString){
      this.warn = "Preencha todos formulários!"
      return
    }
    //Armazenando os valores no "contexto" para ser usado depois
    this.getTables.sgbd = parseInt(this.connectionForm.value.sgbdRadio as string);
    this.getTables.connString = this.connectionForm.value.connString;
    
    let formConnection: FormConnection = new FormConnection(this.connectionForm.value.sgbdRadio, this.connectionForm.value.connString)
    //Fazer aqui o algoritmo para enviar o objeto com os valores do formulario de conexao para a API
    this.getTables.fetchAll(formConnection).subscribe((success)=>{
      this.getTables.tables = <Array<Table>> success;
      this.APIEvent.emit((<Array<Table>> success));
      console.log(success);
    },
    error=>console.error(error))
  }

  
}
