import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { GetTablesService } from 'src/app/services/get-tables.service';

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
  
  onSubmit(){
    
    console.log(this.connectionForm.value)
  }

  constructor(private getTables: GetTablesService){}
}
