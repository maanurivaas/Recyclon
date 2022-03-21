import { Component, OnInit } from '@angular/core';
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

  single: any[];
  public multi!: any[];

  view: [number, number] = [1000, 300];

  

  ngOnInit(): void {
    this.single=this.datosGraficosBarras();
  }

  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) { 
    this.single= this.datosGraficosBarras();
    Object.assign(this, { single });
    
  }

  // options
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


  onSelect(event: any) {
    console.log(event);
  }
  onActivate(event: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(event)));
  }

  onDeactivate(event: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(event)));
  }

  
 datosGraficosBarras():DatosGraficas[] {
  var data: DatosGraficas[]= [
    {
      "name": "Por Cobrar",
      "value": Math.random() * 1000000
    },
    {
      "name": "Por Pagar",
      "value": Math.random() * 1000000
    },
    {
      "name": "Cobrados",
      "value": Math.random() * 1000000
    },
      {
      "name": "Pagados",
      "value": Math.random() * 1000000
    }
  ];
  return data;
}

}