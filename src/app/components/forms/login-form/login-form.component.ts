import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  constructor(private AuthService: AuthService){

  }
  ngOnInit(): void {
  this.AuthService.login('eve.holt@reqres.in', 'cityslicka').subscribe((item)=>{
    console.log('respuesta login',item);
  sessionStorage.setItem('token',item.token);
  },
    (error)=> console.log(`ha ocurrido un error en el proceso de login: ${error}`),
  
  ()=> console.info('se ha completado lallamando de login a reqres'))  
  };
}
