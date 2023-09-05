import { Component, Input } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { GeneratedClass } from 'src/app/Models/GeneratedClass';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent {
  // @Input() databaseName = 'banco de dados';

  tables: Array<GeneratedClass> = [
    {name:'tabela1',download:'#'},
    {name:'tabela2',download:'#'},
    {name:'tabela3',download:'#'},
    {name:'tabela4',download:'#'},
    {name:'tabela5',download:'#'},
    {name:'teste',download:'#'},
]

  
}
