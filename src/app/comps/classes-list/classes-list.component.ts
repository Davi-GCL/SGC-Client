import { Component, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { GeneratedClass } from 'src/app/Models/GeneratedClass';
import { GeneratedFilesMapperService } from 'src/app/services/generated-files.mapper.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements AfterViewInit, OnChanges{
  @Input({alias:'changes'}) classTable!: Array<GeneratedClass>;

  classes: Array<GeneratedClass> = []
  linksList: any;

  constructor(private generatedFiles: GeneratedFilesMapperService){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes: ",changes);
    if(changes){
      this.classes = this.generatedFiles.filesList
    }
  }

  ngAfterViewInit(): void {
    this.classes = this.generatedFiles.filesList;
    this.linksList = Array.from(document.querySelectorAll(".download-link"));
  }

  downloadAll():void{
    this.linksList.forEach((e:HTMLAnchorElement)=>e.click())
  }

  showDescription(event:any, descriptionEId:any):void{
    let desc = document.getElementById(descriptionEId);
    if(desc){
      if(desc.style.display == "block"){
        desc.style.display = "none";
        event.target.className = "bi bi-chevron-down";
      }else{
        desc.style.display = "block";
        event.target.className = "bi bi-chevron-up";
      }
    }
  }
}
