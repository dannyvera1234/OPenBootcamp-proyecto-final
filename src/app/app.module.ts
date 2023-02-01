import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
//modulo personalizado que exporta components de tipo lista
import { LISTSModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SaludoComponent, ListaContactosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //importa nuestro modulo personalizado
    LISTSModule,
    //importamos el modulo HttpClientModule para hace peticiones HTTP
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
