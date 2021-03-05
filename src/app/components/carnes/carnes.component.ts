import { Component, OnInit } from '@angular/core';
import { carnesService } from '../../services/carnes.service';
import { CarneModel } from '../../models/carne.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.component.html',
  styleUrls: ['./carnes.component.css']
})
export class carnesComponent implements OnInit {

  carnes: CarneModel[] = [];
  cargando = false;


  constructor( private CarnesService: carnesService ) { }

  ngOnInit() {

    this.cargando = true;
    this.CarnesService.getcarnes()
    
      .subscribe( resp => {
        this.carnes = resp;
        this.cargando = false;
      });
      
  }

  borrarcarne( carne: CarneModel, i: number ) {

    Swal.fire(
      '¿Está seguro?',
      `Está seguro que desea borrar a ${ carne.nombre }`,
      'question',
    ).then( resp => {

      if ( resp.value ) {
        this.carnes.splice(i, 1);
        this.CarnesService.borrarcarne( carne.id ).subscribe();
        
      }

    });



  }


}
