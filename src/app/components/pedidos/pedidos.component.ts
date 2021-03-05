import { Component, OnInit } from '@angular/core';
import { pedidosService } from '../../services/pedidos.service';
import { PedidoModel } from '../../models/pedido.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class pedidosComponent implements OnInit {

  pedidos: PedidoModel[] = [];
  cargando = false;


  constructor( private pedidosService: pedidosService ) { }

  ngOnInit() {

    
    this.cargando = true;
    this.pedidosService.getpedidos()
    
      .subscribe( resp => {
        this.pedidos = resp;
        this.cargando = false;
      });
      
  }

  borrarpedido( pedido: PedidoModel, i: number ) {

    Swal.fire(
      '¿Está seguro?',
      `Está seguro que desea borrar a ${ pedido.nombre }`,
      'question',
    ).then( resp => {

      if ( resp.value ) {
        this.pedidos.splice(i, 1);
        this.pedidosService.borrarpedido( pedido.id ).subscribe();
      }

    });



  }


}
