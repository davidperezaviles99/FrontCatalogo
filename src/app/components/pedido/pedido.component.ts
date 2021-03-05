import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { PedidoModel } from '../../models/pedido.model';
import { pedidosService } from '../../services/pedidos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class pedidoComponent implements OnInit {

  pedido: PedidoModel = new PedidoModel();


  constructor( private pedidosService: pedidosService,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.pedidosService.getpedido( id )
        .subscribe( (resp: PedidoModel) => {
          this.pedido = resp;
          this.pedido.id = id;
        });

    }

  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire(
      'Espere',
      'Guardando información',
      'info',
    );
    Swal.showLoading();


    let peticion: Observable<any>;

    if ( this.pedido.id ) {
      peticion = this.pedidosService.actualizarpedido( this.pedido );
    } else {
      peticion = this.pedidosService.crearpedido( this.pedido );
    }

    peticion.subscribe( resp => {

      Swal.fire(
        this.pedido.nombre,
        'Se actualizó correctamente',
        'success'
      );

    });



  }

}
