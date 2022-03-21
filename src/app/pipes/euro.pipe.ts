import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(valor: number, decimales?: number): string {
    if(decimales) {
      console.log(decimales);
    }
    return new Intl.NumberFormat("es-ES", {style: "currency", currency: "EUR"}).format(valor);
  }

}
