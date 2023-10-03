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
  generateURI(base: string){
    return `data:file/cs;base64,${base}`
  }

  linkURI = this.generateURI("dXNpbmcgU3lzdGVtOw0KdXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7DQoKbmFtZXNwYWNlIHNpc2NvbS50ZXN0ZTsKDQpwdWJsaWMgY2xhc3MgU2V0b3IKewogCWRvdWJsZSBDT0RJR09TRVRPUiB7IGdldDsgc2V0OyB9DQoJc3RyaW5nIE5PTUVTRVRPUiB7IGdldDsgc2V0OyB9DQoJRGF0ZVRpbWUgREFUQUNBREFTVFJPIHsgZ2V0OyBzZXQ7IH0NCglEYXRlVGltZSBEQVRBSU5BVElWTyB7IGdldDsgc2V0OyB9DQogCn0NCg0K");

  tables: Array<GeneratedClass> = [
    {name:'tabela1.cs',download:this.linkURI},
    {name:'tabela2.cs',download:'#'},
    {name:'tabela3.cs',download:'#'},
    {name:'tabela4.cs',download:'#'},
    {name:'tabela5.cs',download:'#'},
    {name:'teste.cs',download:'#'},
]

  
}
