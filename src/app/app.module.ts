import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HalamanInputComponent } from './halaman-input/halaman-input.component';
import { HalamanListComponent } from './halaman-list/halaman-list.component';
import { HalamanEditComponent } from './halaman-edit/halaman-edit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HalamanInputComponent, HalamanListComponent, HalamanEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
