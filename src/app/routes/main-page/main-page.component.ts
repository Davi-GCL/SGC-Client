import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  connectionForm = new FormGroup({
    sgbd: new FormGroup({
      op1: new FormControl(''),
      op2: new FormControl('')
    }),
    connString: new FormControl('')
  })

  onSubmit(){
    console.log(this.connectionForm.value)
  }
}
