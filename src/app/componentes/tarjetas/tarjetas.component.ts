import { Component, Input, OnInit } from '@angular/core';
import { single } from 'rxjs';
import { Banco } from 'src/app/modelo/banco';
import { Cliente } from 'src/app/modelo/cliente';
import { Cobro } from 'src/app/modelo/cobro';
import { DatosGraficas } from 'src/app/modelo/datos-graficas';
import { Pago } from 'src/app/modelo/pago';
import { Proveedor } from 'src/app/modelo/proveedor';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() tarjetas!: DatosGraficas[];
  colorScheme: string | any = {
    domain: ['#2f4858', '#007189', '#009da5', '#00caa5']
  };
  
  cardColor: string = '#232837';
  view: [number, number] = [1200, 150];
  
  ngOnInit(){
    
  }

  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) {
  
  }

  onSelect(event:any) {
    console.log(event);
  }

}