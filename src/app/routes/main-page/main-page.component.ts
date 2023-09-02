import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  databaseName:any = "A"
  classesList: any = "A"

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
