import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { decorarSelectorFecha } from 'src/vanillajs-datepicker';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent {
  @Input() campo: any;
  @Output() campoChange = new EventEmitter<any>();

  @Input() id!: string;
  @Input() etiqueta!: string;
  @Input() tipo: string = 'text';
  @Input() soloLectura: boolean = false;
  @Input() requerido: boolean = true;

  ngAfterViewInit() {
    if (this.tipo === 'date') {
      console.log('FECHA');
      decorarSelectorFecha();
    }
  }

  onChange(dato?: any) {
    console.log(this.campo, dato);

    if (dato) {
      this.campo = dato;
    }

    this.campoChange.emit(this.campo);
  }

}
