import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

checked : string="../../../assets/img/checked.png";
unchecked : string="../../../assets/img/unchecked.png";

  transform(value: boolean): string {
    if(value) return this.checked
    else return this.unchecked
  }

}
