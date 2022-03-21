import { Pipe, PipeTransform } from '@angular/core';
import { Proveedor } from '../modelo/proveedor';

@Pipe({
  name: 'proveedor'
})
export class ProveedorPipe implements PipeTransform {
  transform(value: number, p: Proveedor[]): string|any {
    

    return p.find(c=>c.id==value)?.nombre;
  }

}
