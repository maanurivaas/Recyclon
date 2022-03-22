import { Component, Input, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import { single } from 'rxjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DatosGraficas } from 'src/app/modelo/datos-graficas';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent implements OnInit {

 
  public multi!: any[];

  view: [number, number] = [1000, 300];
  @Input() barra!: DatosGraficas[];
  

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = ' ';
  showYAxisLabel = true;
  yAxisLabel = ' ';

  colorScheme: string | any = {
    domain: ['#2f4858', '#007189', '#009da5', '#00caa5']
  };
  ngOnInit(): void {
  }

  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) { 
    
  }

  

  
 

}