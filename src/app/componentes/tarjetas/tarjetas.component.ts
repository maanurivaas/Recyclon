import { Component, OnInit } from '@angular/core';
import { single } from 'rxjs';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  public single!: any[];
  view: [number, number] = [350, 350];

  ngOnInit(){
   this.single= this.servicio.countryData;
  }

  colorScheme: string | any = {
    domain: ['#2f4858', '#007189', '#009da5', '#00caa5']
  };
  
  cardColor: string = '#232837';
  
  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) {

    Object.assign(this, { single });
  }

  onSelect(event:any) {
    console.log(event);
  }
}