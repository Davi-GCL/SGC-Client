import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableListComponent } from './comps/table-list/table-list.component';
import { FilterPipe } from './filter.pipe';
import { InputConnectionComponent } from './comps/input-connection/input-connection.component';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    FilterPipe,
    InputConnectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
