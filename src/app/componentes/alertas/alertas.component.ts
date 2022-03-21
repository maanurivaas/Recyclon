import { Component, OnInit } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { AlertaService } from 'src/app/servicio/alerta.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  title = 'Recyclon';
  mostrarAlerta: boolean = true;
  constructor(public alertaService: AlertaService) { }

  ngOnInit(): void {
  }

  borrar(alerta: Alerta) {
    this.alertaService.borrarAlerta(alerta);
  }
}
