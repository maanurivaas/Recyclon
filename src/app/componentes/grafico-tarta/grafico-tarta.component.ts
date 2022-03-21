import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';

@Component({
  selector: 'app-grafico-tarta',
  templateUrl: './grafico-tarta.component.html',
  styleUrls: ['./grafico-tarta.component.css']
})
export class GraficoTartaComponent implements OnInit {

  view: [number, number] = [900,200];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
 

  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) { }

  ngOnInit(){
  }
  colorScheme: string | any = {
    domain: ['#2f4858', '#007189', '#009da5', '#00caa5']
  };
  get single() {
    return this.servicio.countryData;
  }

  onRandomData() {
    this.servicio.randomData();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  
}
