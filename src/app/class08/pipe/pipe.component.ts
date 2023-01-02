import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  public miPropiedad = "Curso angular";
  public alumnos: Alumno[];


  constructor() {
    this.alumnos = [{
      nombre: 'Pedro',
      calificacion: 33
    },
    {
      nombre: 'Juan',
      calificacion: 22
    },
    {
      nombre: 'Jeni',
      calificacion: 11
    }
    ]
  }

  ngOnInit(): void {

  }
}
