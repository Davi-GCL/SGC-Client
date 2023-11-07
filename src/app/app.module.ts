import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel , ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TableListComponent } from './comps/table-list/table-list.component';
import { FilterPipe } from './filter.pipe';
import { InputConnectionComponent } from './comps/input-connection/input-connection.component';
import { RadioSgbdComponent } from './comps/radio-sgbd/radio-sgbd.component';
import { ClassesListComponent } from './comps/classes-list/classes-list.component';
import { ComponentsPageComponent } from './routes/components-page/components-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './routes/main-page/main-page.component';
import { FormConnectionComponent } from './comps/form-connection/form-connection.component';
import { ClassesListItemComponent } from './comps/classes-list-item/classes-list-item.component';
import { AlertGroupComponent } from './comps/alert-group/alert-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    FilterPipe,
    InputConnectionComponent,
    RadioSgbdComponent,
    ClassesListComponent,
    ComponentsPageComponent,
    MainPageComponent,
    FormConnectionComponent,
    ClassesListItemComponent,
    AlertGroupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
