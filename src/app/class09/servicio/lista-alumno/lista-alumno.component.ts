import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit {

  constructor(
    private servicio: MiServicioService
  ) {

  }


  ngOnInit(): void {

    console.log('Lista de Alumnos: ' + this.servicio.obtenerAlumnos())

  }

  ver() {
    alert(this.servicio.contador)
  }
}
