import { Component, Input, OnInit } from '@angular/core';
import { single } from 'rxjs';
import { DatosGraficas } from 'src/app/modelo/datos-graficas';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';

@Component({
  selector: 'app-grafico-tarta',
  templateUrl: './grafico-tarta.component.html',
  styleUrls: ['./grafico-tarta.component.css']
})
export class GraficoTartaComponent implements OnInit {

  view: [number, number] = [400,200];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
 
  @Input() tarta!: DatosGraficas[];

  colorScheme: string | any = {
    domain: ['#2f4858', '#007189', '#009da5', '#00caa5','#32cf89']
  };

  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) { 
  
  }

  ngOnInit(){
  
  }
  
  
}
