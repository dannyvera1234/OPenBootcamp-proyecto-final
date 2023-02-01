import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  //creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto  | undefined;
  
  //subcripcion de servicio
  subcription: Subscription | undefined;

  // intectamos en el constructor el srvicio de contactos
  constructor(private contactoService: ContactoService) {}



  ngOnDestroy(): void {
   this.subcription?.unsubscribe();
  }

  ngOnInit(): void {
    //obtener la lista de contactos que nos brinda el servicio

     this.contactoService.obtenerContactos().then((lista: IContacto[])=>
     this.listaContactos = lista)
     .catch((error)=> console.error(`ha habido un error al recuperar la lista de contactos: ${error}`))
      .finally(()=>console.log('preticiones de lista de contactos terminada'));
  }

  obtenerContacto(id:number){
    // console.log(`obertener info del contacto: ${id}`);
   this.subcription = this.contactoService.obetenerContactoPorId(id)?.subscribe((contacto: IContacto)=> this.contactoSeleccionado = contacto)
  
   
}

}
