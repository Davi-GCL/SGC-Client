import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableListComponent } from './comps/table-list/table-list.component';
import { FilterPipe } from './filter.pipe';
import { InputConnectionComponent } from './comps/input-connection/input-connection.component';
import { RadioSgbdComponent } from './comps/radio-sgbd/radio-sgbd.component';
import { ClassesListComponent } from './comps/classes-list/classes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    FilterPipe,
    InputConnectionComponent,
    RadioSgbdComponent,
    ClassesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
