import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { CarneModel } from '../../models/carne.model';
import { carnesService } from '../../services/carnes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-carne',
  templateUrl: './carne.component.html',
  styleUrls: ['./carne.component.css']
})
export class carneComponent implements OnInit {

  carne: CarneModel = new CarneModel();


  constructor( private carnesService: carnesService,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.carnesService.getcarne( id )
        .subscribe( (resp: CarneModel) => {
          this.carne = resp;
          this.carne.id = id;
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

    if ( this.carne.id ) {
      peticion = this.carnesService.actualizarcarne( this.carne );
    } else {
      peticion = this.carnesService.crearcarne( this.carne );
    }

    peticion.subscribe( resp => {

      Swal.fire(
        this.carne.id,
        'Se actualizó correctamente',
        'success'
      );

    })


  }

}
