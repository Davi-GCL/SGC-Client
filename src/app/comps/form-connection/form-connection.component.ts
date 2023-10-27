import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { GetTablesService } from 'src/app/services/get-tables.service';
import { FormConnection } from 'src/app/Models/FormConnection';
import { Table } from 'src/app/Models/Table';
import { UIHelpersService } from 'src/app/services/ui-helpers.service';

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

  constructor(private getTables: GetTablesService, public uiHelpers: UIHelpersService){}

  @Output() APIEvent = new EventEmitter();
  loading: boolean = false;

  handleSubmit(){
    if(!this.connectionForm.value.connString){
      this.warn = "Preencha todos formulários!"
      return
    }
    //Armazenando os valores no "contexto" para ser usado depois
    this.getTables.sgbd = parseInt(this.connectionForm.value.sgbdRadio as string);
    this.getTables.connString = this.getTables.filterString(this.connectionForm.value.connString);
    alert(this.getTables.filterString(this.connectionForm.value.connString))

    let formConnection: FormConnection = new FormConnection(this.connectionForm.value.sgbdRadio, this.connectionForm.value.connString)
    
    this.uiHelpers.loading = true;
    //Fazer aqui o algoritmo para enviar o objeto com os valores do formulario de conexao para a API
    this.getTables.fetchAll(formConnection).subscribe((success)=>{
      this.getTables.tables = <Array<Table>> success;
      this.APIEvent.emit((<Array<Table>> success));

      this.uiHelpers.showSuccessMessage("Conectado ao banco de dados com sucesso!");
      console.log(success);
    },
    error=>{
      console.error(error);
      this.uiHelpers.showErrorMessage("Falha ao conectar com o banco de dados")
    })
  }

  
}
