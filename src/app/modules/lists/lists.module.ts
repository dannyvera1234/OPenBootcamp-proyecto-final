import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListabasicaComponent } from './listabasica/listabasica.component';



@NgModule({
  declarations: [
    ListabasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[

    // EXPORTAMOS AQUELLAS CLASES (COMPONENTES/PIPES/SERVICES. ETC..) QUE QUERAMOS COMPARTIR A QUIENE 
    //IMPORTE ESTE MODULO
    ListabasicaComponent
  ]
})
export class LISTSModule { }
