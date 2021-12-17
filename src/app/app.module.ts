import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


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
import { Ej05DPadreComponent } from './components/ej05-d/ej05-d-padre/ej05-d-padre.component';
import { Ej05DFormComponent } from './components/ej05-d/ej05-d-form/ej05-d-form.component';
import { Ej05DListComponent } from './components/ej05-d/ej05-d-list/ej05-d-list.component';
import { Ej05EPadreComponent } from './components/ej05-e/ej05-e-padre/ej05-e-padre.component';
import { Ej05EFormComponent } from './components/ej05-e/ej05-e-form/ej05-e-form.component';
import { Ej05EListComponent } from './components/ej05-e/ej05-e-list/ej05-e-list.component';

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
    Ej05CArticulosComponent,
    Ej05DPadreComponent,
    Ej05DFormComponent,
    Ej05DListComponent,
    Ej05EPadreComponent,
    Ej05EFormComponent,
    Ej05EListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
