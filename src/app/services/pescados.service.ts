import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PescadoModel } from '../models/pescado.model';
import { map, delay } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class pescadosService {

  readonly url = 'http://localhost:3000/api/pescados';
  httpOptions : any    = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  };
  prueba:string = sessionStorage.getItem('access_token');

  constructor( private http: HttpClient ) { }


  crearpescado( pescado: PescadoModel ) {

    return this.http.post(this.url+'?token='+this.prueba, pescado);


  }

  actualizarpescado( pescado: PescadoModel ) {

    return this.http.put(this.url + `/${pescado.id}`+'?token='+this.prueba, pescado);


  }

  borrarpescado(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }


  getpescado( id: string ) {

    return this.http.get(this.url+ `/${id}`);

  }


  getpescados() {
    return this.http.get(this.url) 
    .pipe(
      map( this.crearArreglo ),
      delay(0)
    );
  }

  private crearArreglo( pescadosObj: object ) {

    const pescados: PescadoModel[] = [];

    Object.keys( pescadosObj ).forEach( key => {

      const pescado: PescadoModel = pescadosObj[key];

      pescados.push( pescado );
    });


    return pescados;

  }


}

