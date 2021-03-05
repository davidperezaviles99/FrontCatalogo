import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VerduraModel } from '../models/verdura.model';
import { map, delay } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class verdurasService {

  readonly url = 'http://localhost:3000/api/verduras';
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


  crearverdura( verdura: VerduraModel ) {

    return this.http.post(this.url+'?token='+this.prueba, verdura);


  }

  actualizarverdura( verdura: VerduraModel ) {

    return this.http.put(this.url + `/${verdura.id}`+'?token='+this.prueba, verdura);

  }

  borrarverdura(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }


  getverdura( id: string ) {

    return this.http.get(this.url+ `/${id}`);

  }


  getverduras() {
    return this.http.get(this.url) 
    .pipe(
      map( this.crearArreglo ),
      delay(0)
    );
  }

  private crearArreglo( verdurasObj: object ) {

    const verduras: VerduraModel[] = [];

    Object.keys( verdurasObj ).forEach( key => {

      const verdura: VerduraModel = verdurasObj[key];

      verduras.push( verdura );
    });


    return verduras;

  }


}
