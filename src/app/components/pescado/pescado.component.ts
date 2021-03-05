import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { PescadoModel } from '../../models/pescado.model';
import { pescadosService } from '../../services/pescados.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pescado',
  templateUrl: './pescado.component.html',
  styleUrls: ['./pescado.component.css']
})
export class pescadoComponent implements OnInit {

  pescado: PescadoModel = new PescadoModel();


  constructor( private pescadosService: pescadosService,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.pescadosService.getpescado( id )
        .subscribe( (resp: PescadoModel) => {
          this.pescado = resp;
          this.pescado.id = id;
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

    if ( this.pescado.id ) {
      peticion = this.pescadosService.actualizarpescado( this.pescado );
    } else {
      peticion = this.pescadosService.crearpescado( this.pescado );
    }

    peticion.subscribe( resp => {

      Swal.fire(
        this.pescado.nombre,
        'Se actualizó correctamente',
        'success'
      );

    });



  }

}
