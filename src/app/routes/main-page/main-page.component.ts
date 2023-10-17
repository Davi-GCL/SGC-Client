import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Table } from 'src/app/Models/Table';
import { GeneratedFilesMapperService } from 'src/app/services/generated-files.mapper.service';
import { GetTablesService } from 'src/app/services/get-tables.service';
import { UIHelpersService } from 'src/app/services/ui-helpers.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  tables!: Table[];
  constructor(private getTables: GetTablesService, public generatedFiles: GeneratedFilesMapperService, public uiHelper: UIHelpersService)
  {
    
  }

  ngOnInit(): void {  }

  EventRes(x:any){
    // this.tables = x;
    this.getTables.tables.subscribe((data)=>{
      this.tables = data;
    })
    this.ScrollTo('tables-section')
  }

  ScrollTo(destination:string){
    let end = document.getElementById(destination);
    if(end){
      // Scroll to the destination using
      // scrollIntoView method

      end.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
