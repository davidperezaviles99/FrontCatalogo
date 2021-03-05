import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoModel } from '../models/pedido.model';
import { map, delay } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class pedidosService {

  readonly url = 'http://localhost:3000/api/pedidos';
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


  crearpedido( pedido: PedidoModel ) {

    return this.http.post(this.url+'?token='+this.prueba, pedido);

  }

  actualizarpedido( pedido: PedidoModel ) {

    return this.http.put(this.url + `/${pedido.id}`+'?token='+this.prueba, pedido);


  }

  borrarpedido(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }


  getpedido( id: string ) {

    return this.http.get(this.url+ `/${id}`);

  }


  getpedidos() {
    return this.http.get(this.url) 
    .pipe(
      map( this.crearArreglo ),
      delay(0)
    );
  }

  private crearArreglo( pedidosObj: object ) {

    const pedidos: PedidoModel[] = [];

    Object.keys( pedidosObj ).forEach( key => {

      const pedido: PedidoModel = pedidosObj[key];

      pedidos.push( pedido );
    });


    return pedidos;

  }


}
