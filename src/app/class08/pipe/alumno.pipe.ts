import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from './alumno';

@Pipe({
  name: 'alumno'
})
export class AlumnoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): string {
    return 'Alumno: ' + value.nombre + 'con calificaacion: ' + value.calificacion;
  }

}
