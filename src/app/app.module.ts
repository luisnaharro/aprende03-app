import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ej01SumaComponent } from './components/ej01-suma/ej01-suma.component';
import { Ej02ConcatenaComponent } from './components/ej02-concatena/ej02-concatena.component';
import { Ej03ConcatenaComponent } from './components/ej03-concatena/ej03-concatena.component';
import { Ej04ConcatenaComponent } from './components/ej04-concatena/ej04-concatena.component';
import { Ej05ArrayComponent } from './components/ej05-array/ej05-array.component';
import { Ej05BPadreComponent } from './components/ej05-b-padre/ej05-b-padre.component';
import { Ej05BFormComponent } from './components/ej05-b-form/ej05-b-form.component';
import { Ej05BListComponent } from './components/ej05-b-list/ej05-b-list.component';
import { Ej05CArticulosComponent } from './ej05-c-articulos/ej05-c-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    Ej01SumaComponent,
    Ej02ConcatenaComponent,
    Ej03ConcatenaComponent,
    Ej04ConcatenaComponent,
    Ej05ArrayComponent,
    Ej05BPadreComponent,
    Ej05BFormComponent,
    Ej05BListComponent,
    Ej05CArticulosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
