import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjemploMaterialComponent } from './class07/ejemplo-material/ejemplo-material.component';
import { MaterialModule } from './modulos/material.module';
import { ModalComponent } from './class07/modal/modal.component';
import { PipeComponent } from './class08/pipe/pipe.component';
import { MiPipePipe } from './class08/pipe/mi-pipe.pipe';
import { AlumnoPipe } from './class08/pipe/alumno.pipe';
import { ServicioComponent } from './class09/servicio/servicio.component';
import { ListaAlumnoComponent } from './class09/servicio/lista-alumno/lista-alumno.component';
import { HttpClientModule } from '@angular/common/http';

export const APIURL = new InjectionToken('APIURL');

@NgModule({
  declarations: [
    AppComponent,
    EjemploMaterialComponent,
    ModalComponent,
    PipeComponent,
    MiPipePipe,
    AlumnoPipe,
    ServicioComponent,
    ListaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    { provide: APIURL, useValue: 'http://rickandmortyapi.com/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
