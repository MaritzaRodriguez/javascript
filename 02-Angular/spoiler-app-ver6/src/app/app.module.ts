import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
//@ALGO () //decorator
@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent
  ], //definir todos los componentes a usarse
  imports: [
    BrowserModule,
    FormsModule
  ],// definimos todos los modulos
  providers: [], // los servicios
  bootstrap: [AppComponent] //componente Principal
})
export class AppModule { }
