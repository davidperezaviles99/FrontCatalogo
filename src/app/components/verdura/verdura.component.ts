import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { VerduraModel } from '../../models/verdura.model';
import { verdurasService } from '../../services/verduras.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-verdura',
  templateUrl: './verdura.component.html',
  styleUrls: ['./verdura.component.css']
})
export class verduraComponent implements OnInit {

  verdura: VerduraModel = new VerduraModel();


  constructor( private verdurasService: verdurasService,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.verdurasService.getverdura( id )
        .subscribe( (resp: VerduraModel) => {
          this.verdura = resp;
          this.verdura.id = id;
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

    if ( this.verdura.id ) {
      peticion = this.verdurasService.actualizarverdura( this.verdura );
    } else {
      peticion = this.verdurasService.crearverdura( this.verdura );
    }

    peticion.subscribe( resp => {

      Swal.fire(
        this.verdura.nombre,
        'Se actualizó correctamente',
        'success'
      );

    });



  }

}
