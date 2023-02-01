import { IContacto } from './../models/contacto';
import { Injectable } from '@angular/core';

//importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';

//importamos obervable de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {}

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }

  obetenerContactoPorId(id: number): Observable<IContacto> | undefined {
    // buscamos el contacto por id dentro de la lista de CONTACTOS mockeados
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );

    //CREAMOS UN OBSERVABLE

      let observable: Observable<IContacto> = new Observable(item =>{
        item.next(contacto); // emitir un valor a todo componente suscrito
        item.complete();// no emitimos mas valores
      })


    if (contacto) {
      return observable;
    } else {
      return;
    }
  }



}
