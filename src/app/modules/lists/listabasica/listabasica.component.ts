import { Component, OnInit } from '@angular/core';

//tipo de base
export type productos = {
  nombre: string;
  precio: number;
  descricion: string;
};
@Component({
  selector: 'app-listabasica',
  templateUrl: './listabasica.component.html',
  styleUrls: ['./listabasica.component.css'],
})
export class ListabasicaComponent implements OnInit {
  
  opcion: number= 0;
  
  cargando: boolean = true;
  
  listaelementos: productos[] = [
    {
      nombre: 'daniel vera',
      precio: 11,
      descricion: '18años',
    },
    {
      nombre: 'mateo vera',
      precio: 10,
      descricion: '18años',
    },
  ];

  ngOnInit(): void {}

  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogeropcion(opcionEscogida: number){

    this.opcion = opcionEscogida // el valor cambia, implicado un cambio en los elementos renderizados
  }
}
