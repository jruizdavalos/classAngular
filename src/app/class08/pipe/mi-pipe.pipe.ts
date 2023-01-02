import { Pipe, PipeTransform } from '@angular/core';

//Decoradores donde nos da el nombre del pipe
@Pipe({
  name: 'miPipe'
})
//Cuando utilizamos la palabra implements quiere decir, que lo que viene despues es una intefaz, es como un contrato que le prometos al codigo(lo cual indica que vamos a respetar eso), nos obliga a tener el metodo transform
export class MiPipePipe implements PipeTransform {


  transform(value: string, ...args: string[]): string {
    /* switch (args[0]) {
      case '?':
        return '¿' + value + '?'
      case '!':
        return '¡' + value + '!'
    } */
    switch (args[0]) {
      case '?':
        value = '¿' + value + '?'
        break;
      case '!':
        value = '¡' + value + '!'
        break;
    }
    switch (args[1]) {
      case 'upper':
        value = value.toUpperCase();
        break;
      case 'lower':
        value = value.toLowerCase();
        break;
    }

    return value
  }

}
