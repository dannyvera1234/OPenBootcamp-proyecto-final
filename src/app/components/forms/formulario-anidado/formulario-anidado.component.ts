import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.css'],
})
export class FormularioAnidadoComponent implements OnInit {
  miFOrmularioAnidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const telefonofijo = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });
    const telefono = this.formBuilder.group({
      prefijo: '',
      numero: '',
    })

    //agrupacion del formulario que contiene dos agruipaciones

    this.miFOrmularioAnidado = this.formBuilder.group({
     
      fijo: telefonofijo,
      movil: telefono,
    });
  }
}
