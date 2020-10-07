import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartsComponent } from './parts-list/parts/parts.component';
import { PartsListComponent } from './parts-list/parts-list.component';
import { AddPartComponent } from './add-part/add-part.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PartsComponent,
    PartsListComponent,
    AddPartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
