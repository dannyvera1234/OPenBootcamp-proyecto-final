import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  nombre : string = "mateo";

  /*
  esta funcion  se ejecutas cuando el hijo (saludo component) se pulse un boton...
  */

recibirMensajeDelHijo(evento: string){
  alert(evento);
}
  
}
