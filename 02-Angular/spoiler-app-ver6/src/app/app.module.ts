import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//@ALGO () //decorator
@NgModule({
  declarations: [
    AppComponent
  ], //definir todos los componentes a usarse
  imports: [
    BrowserModule
  ],// definimos todos los modulos
  providers: [], // los servicios
  bootstrap: [AppComponent] //componente Principal
})
export class AppModule { }
