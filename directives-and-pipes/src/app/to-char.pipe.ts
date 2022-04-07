import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toChar'
})
export class ToCharPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): String {
    return String.fromCharCode(65 +(value % 26));
  }

}
