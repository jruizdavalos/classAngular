import { Component, Inject, OnInit } from '@angular/core';
import { MiServicioService } from './mi-servicio.service';
import { APIURL } from '../../app.module';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  constructor(
    private servicio: MiServicioService,
    @Inject(APIURL) private api: string
  ) {

  }
  ngOnInit(): void {
    console.log('Servicios: ' + this.servicio.obtenerAlumnos());
    console.log(this.api)

    this.servicio.obtenerPersonajes().subscribe((valores) => {
      console.log(valores)
    });

    /* 
    this.servicio.obtenerPersonajes().subscribe({
      next: ()=>{},
      error: ()=>{},
      complete: ()=>{}
    })
    
    
    */
  }
  click() {
    this.servicio.contador = this.servicio.contador + 1
  }
}
