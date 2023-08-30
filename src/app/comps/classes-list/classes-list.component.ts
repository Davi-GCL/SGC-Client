import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent {
  tables: Array<{name:string,isChecked:boolean}> = [
    {name:'tabela1',isChecked:false},
    {name:'tabela2',isChecked:false},
    {name:'tabela3',isChecked:false},
    {name:'tabela4',isChecked:false},
    {name:'tabela5',isChecked:false},
    {name:'teste',isChecked:false},
]

  
}
