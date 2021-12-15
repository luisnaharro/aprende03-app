import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ej01SumaComponent } from './components/ej01-suma/ej01-suma.component';
import { Ej02ConcatenaComponent } from './components/ej02-concatena/ej02-concatena.component';
import { Ej03ConcatenaComponent } from './components/ej03-concatena/ej03-concatena.component';
import { Ej04ConcatenaComponent } from './components/ej04-concatena/ej04-concatena.component';
import { Ej05ArrayComponent } from './components/ej05-array/ej05-array.component';
import { Ej06BPadreComponent } from './components/ej06-b-padre/ej06-b-padre.component';
import { Ej06BFormComponent } from './components/ej06-b-form/ej06-b-form.component';
import { Ej06BListComponent } from './components/ej06-b-list/ej06-b-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Ej01SumaComponent,
    Ej02ConcatenaComponent,
    Ej03ConcatenaComponent,
    Ej04ConcatenaComponent,
    Ej05ArrayComponent,
    Ej06BPadreComponent,
    Ej06BFormComponent,
    Ej06BListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
