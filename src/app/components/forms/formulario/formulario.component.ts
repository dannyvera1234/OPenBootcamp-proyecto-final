import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


//* ejemplo basico de dormuklario reactivos



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  //defimos nuyestro formulario 
  miFormulario: FormGroup = new FormGroup({});

// inyectamos la clases FormBuilder para construir el formgroup
  constructor(private formBuilde: FormBuilder){}

  ngOnInit(): void {
    //iniciamos los campos del formulario y sus valores por defecto
    this.miFormulario= this.formBuilde.group(
      {
        nombre:'',
        apellido:'',
        email:'',
        telefono:'',
        direccion:''
      }
    );
      //nps suscribimos a los cambios que ocurra en el formulario y los mostramos por consola

      this.miFormulario.valueChanges.subscribe(
        console.log
      )

     
    
  }

}
