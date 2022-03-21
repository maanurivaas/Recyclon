import { Component, OnInit } from '@angular/core';
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
  single: any[];
  view: [number, number] = [1000,300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
 

  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) { 
    this.single= this.datosGraficosTarta();
    Object.assign(this, { single });
  }

  ngOnInit(){
    
    this.single=this.datosGraficosTarta();
   
  }
  colorScheme: string | any = {
    domain: ['#2f4858', '#007189', '#009da5', '#00caa5']
  };
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  datosGraficosTarta():DatosGraficas[] {
    var data: DatosGraficas[]= [
      {
        "name": "Bancos",
        "value": Math.random() * 1000000
      },
      {
        "name": "Clientes",
        "value": Math.random() * 1000000
      },
      {
        "name": "Proveedores",
        "value": Math.random() * 1000000
      },
        {
        "name": "Pagos",
        "value": Math.random() * 1000000
      },
      {
      "name": "Cobros",
      "value": Math.random() * 1000000
    }
    ];
    return data;
  }
}
