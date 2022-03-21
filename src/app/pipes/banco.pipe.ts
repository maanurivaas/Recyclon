import { Pipe, PipeTransform } from '@angular/core';
import { Banco } from '../modelo/banco';

@Pipe({
  name: 'banco'
})
export class BancoPipe implements PipeTransform {

  transform(value: number, bancos: Banco[]): string|any {
    

    return bancos.find(b=>b.id==value)?.nombre;
  }

}
