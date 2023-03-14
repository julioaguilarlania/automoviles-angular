import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Automoviles } from './Automoviles/Automoviles.component';
import { EjemploBasico } from './EjemploBasico/EjemploBasico.component';

@NgModule({
  declarations: [
    AppComponent,EjemploBasico, Automoviles
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
