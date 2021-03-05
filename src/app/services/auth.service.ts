import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:3000/api/usuarios';
  httpOptions : any    = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  };
  prueba:string = sessionStorage.getItem('AccessToken');
  AccessToken: string;

  constructor( private http: HttpClient ) {
    this.leerToken();
  }

  logout() {
    sessionStorage.removeItem('AccessToken');
  }

  login(email: string, password: string): Observable<any> {
    const url = "http://localhost:3000/api/usuarios/login";
    return this.http
      .post<UsuarioModel>(
        url,
        { email, password },
      )
      .pipe(map(data => data));
  }

  nuevoUsuario( usuario: UsuarioModel ) {

    return this.http.post(this.url, usuario);

  }


  guardarToken( token: string ) {

    this.AccessToken = token;
    localStorage.setItem('AccessToken', token);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );


  }

  leerToken() {

    if ( localStorage.getItem('token') ) {
      this.AccessToken = localStorage.getItem('token');
    } else {
      this.AccessToken = '';
    }

    return this.AccessToken;

  }


  estaAutenticado(): boolean {

    if ( this.AccessToken.length < 2 ) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }


  }

}
