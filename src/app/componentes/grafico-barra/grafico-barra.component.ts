import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import { single } from 'rxjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent implements OnInit {

  single: any[];
  public multi!: any[];

  view: [number, number] = [900, 400];

  

  ngOnInit(): void {
    this.single= this.servicio.countryData;
  }

  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) { 
    this.single= this.servicio.countryData;
    Object.assign(this, { single });
    
  }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme: string | any = {
    domain: ['#2f4858', '#007189', '#009da5', '#00caa5']
  };


  onSelect(event: any) {
    console.log(event);
  }
}