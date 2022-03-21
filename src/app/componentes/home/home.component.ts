import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import { ChartDataset } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  view: [number, number] = [900, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
 

  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) { }

  ngOnInit(){
   
  }
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
