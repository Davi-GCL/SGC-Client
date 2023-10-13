import { Component, Input, AfterViewInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { GeneratedClass } from 'src/app/Models/GeneratedClass';
import { GeneratedFilesMapperService } from 'src/app/services/generated-files.mapper.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements AfterViewInit{
  // @Input() databaseName = 'banco de dados';

  classes: Array<GeneratedClass> = []

  constructor(private generatedFiles: GeneratedFilesMapperService){}

  ngAfterViewInit(): void {
    this.classes = this.generatedFiles.filesList;
  }
}
