import { Component, OnInit } from '@angular/core';
import { verdurasService } from '../../services/verduras.service';
import { VerduraModel } from '../../models/verdura.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css']
})
export class verdurasComponent implements OnInit {

  verduras: VerduraModel[] = [];
  cargando = false;


  constructor( private verdurasService: verdurasService ) { }

  ngOnInit() {

    
    this.cargando = true;
    this.verdurasService.getverduras()
    
      .subscribe( resp => {
        this.verduras = resp;
        this.cargando = false;
      });
      
  }

  borrarverdura( verdura: VerduraModel, i: number ) {

    Swal.fire(
      '¿Está seguro?',
      `Está seguro que desea borrar a ${ verdura.nombre }`,
      'question',
    ).then( resp => {

      if ( resp.value ) {
        this.verduras.splice(i, 1);
        this.verdurasService.borrarverdura( verdura.id ).subscribe();
      }

    });



  }


}
