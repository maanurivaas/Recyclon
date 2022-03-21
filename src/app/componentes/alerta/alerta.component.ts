import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alerta, Nivel } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  @Input() mensaje!: string;
  @Input() nivel!: Nivel;

  @Input() alerta: Alerta = {
    mensaje: 'Prueba de alerta',
    nivel: 'danger'
  }
  public tiempo:Date=new Date();

  @Output() cierre = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if (this.mensaje && this.nivel) {
      this.alerta = { mensaje: this.mensaje, nivel: this.nivel };
    }
  }

  cerrar() {
    this.cierre.emit();
  }
}
