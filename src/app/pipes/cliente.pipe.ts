import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../modelo/cliente';

@Pipe({
  name: 'cliente'
})
export class ClientePipe implements PipeTransform {

  transform(value: number, clientes: Cliente[]): string|any {
    

    return clientes.find(c=>c.id==value)?.nombre;
  }

}
