import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { GetTablesService } from 'src/app/services/get-tables.service';
import { FormConnection } from 'src/app/Models/FormConnection';

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

  handleSubmit(){
    if(! this.connectionForm.value.connString){
      this.warn = "Preencha todos formulários!"
      return
    }
    let formConnection: FormConnection = new FormConnection(...[this.connectionForm.value])
    //Fazer aqui o algoritmo para enviar o objeto com os valores do formulario de conexao para a API
  }

  constructor(private getTables: GetTablesService){}
}
