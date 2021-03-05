import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarneModel } from '../models/carne.model';
import { map, delay } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class carnesService {

  readonly url = 'http://localhost:3000/api/carnes';
  httpOptions : any    = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  };
  prueba:string = sessionStorage.getItem('access_token');
  carne : CarneModel = new CarneModel();

  constructor( private http: HttpClient ) { }


  crearcarne( carne: CarneModel ) {
    return this.http.post(this.url+'?token='+this.prueba, carne);
  }
  
  actualizarcarne( carne: CarneModel ): Observable<any>{
    return this.http.put(this.url+'?token='+this.prueba, carne);  }

  borrarcarne(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }


  getcarne( id: string ) {
    return this.http.get(this.url+ `/${id}`);
  }


  getcarnes() {
    return this.http.get(this.url) 
    .pipe(
      map( this.crearArreglo ),
      delay(0)
    );
  }

  private crearArreglo( carnesObj: object ) {

    const carnes: CarneModel[] = [];

    Object.keys( carnesObj ).forEach( key => {

      const carne: CarneModel = carnesObj[key];

      carnes.push( carne );
    });
    return carnes;

  }


}
