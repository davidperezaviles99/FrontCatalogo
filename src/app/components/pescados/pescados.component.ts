import { Component, OnInit } from '@angular/core';
import { pescadosService } from '../../services/pescados.service';
import { PescadoModel } from '../../models/pescado.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pescados',
  templateUrl: './pescados.component.html',
  styleUrls: ['./pescados.component.css']
})
export class pescadosComponent implements OnInit {

  pescados: PescadoModel[] = [];
  cargando = false;


  constructor( private pescadosService: pescadosService ) { }

  ngOnInit() {

    
    this.cargando = true;
    this.pescadosService.getpescados()
    
      .subscribe( resp => {
        this.pescados = resp;
        this.cargando = false;
      });
      
  }

  borrarpescado( pescado: PescadoModel, i: number ) {

    Swal.fire(
      '¿Está seguro?',
      `Está seguro que desea borrar a ${ pescado.nombre }`,
      'question',
    ).then( resp => {

      if ( resp.value ) {
        this.pescados.splice(i, 1);
        this.pescadosService.borrarpescado( pescado.id ).subscribe();
      }

    });



  }


}
