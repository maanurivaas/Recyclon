import { Injectable } from '@angular/core';
import { Alerta, Nivel } from '../modelo/alerta';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  alertas: Alerta[] = [];

  nuevaAlerta(mensaje: string, nivel: Nivel) {
    this.alertas.push({ mensaje, nivel });
  }

  borrarAlerta(alerta: Alerta){
    this.alertas = this.alertas.filter(a => a !== alerta);
  }

  limpiarAlertas() {
    this.alertas.splice(0);
  }
}
