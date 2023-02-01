import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {
  //@input() conexion de hijo a padres componentes
  /*
  @INPUT
Para indicarle a un componente que puede recibir un valor desde 
el componente padre debemos agregarle el decorador @input a la propiedad que deseamos controlar.
*/
  @Input() nombre: string = 'daniel';

  /*
  @OUTPUT
  Para emitir un valor desde el componente hijo ( home.component)
   que pueda ser escuchado por el componente padre (app.component) 
   utilizamos el decorador @output.
  */
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  /*
ejemplo para gestionar un evento de tipo click en el DOM
*/
  /* funcion */
  alertSaludo(): void {
    // alert(`hola, ${this.nombre}. alerta despachada desde un click de boton`);
  }
/*
ejemplo para gestionar un evento de tipo click en el DOM y enviar un tecto al componente padre
*/
  enviarMensajeAlPadre(): void{
    this.mensajeEmitter.emit(`hola, ${this.nombre}. alerta despachada desde un clinmk de boton `);

  }
}


// Orden del ciclo de vida de los componentes:

 // * 1. ngOnchanges  MODIFICACION DEL COMPONENTE
  // * 2. ngOnInit  CARGA DE DATOS
  // *3.  ngOnDestroy  DESTRUCCION DE INFORMACION DEL COMPOMENTE