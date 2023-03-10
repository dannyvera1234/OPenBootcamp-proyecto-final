import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(email:string, password:string):Observable<any>{

    let body ={
      email:email,
      password:password
    }
    //devolvemos la respuesta del observable cuando la peticion http 
    //se ha complete, el compomente suscrito accedera al token de login
   return this.http.post('https://reqres.in/api/login', body);

  }


}

