import { Component, OnInit } from '@angular/core';
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

  public single!: any[];
  view: [number, number] = [1200, 150];
  private bancos !:  Banco[]; 
  private clientes !: Cliente[];
  private proveedores !:  Proveedor[];
  private pagos !: Pago[];
  private cobros !:  Cobro[];
  

  ngOnInit(){
    this.single= this.datosGraficosTarjetas();
  }

  colorScheme: string | any = {
    domain: ['#2f4858', '#007189', '#009da5', '#00caa5']
  };
  
  cardColor: string = '#232837';
  
  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) {
    //this.servicio.getBancos().subscribe(cli =>this.bancos = cli);
    //this.servicio.getClientes().subscribe(cli =>this.clientes = cli);
    //this.servicio.getProveedores().subscribe(cli =>this.proveedores = cli);
    //this.servicio.getPagos().subscribe(cli =>this.pagos = cli);
    //this.servicio.getCobros().subscribe(cli =>this.cobros = cli);
    console.log("Numero de Proveedores: " + this.servicio.obtenerProveedores());
    Object.assign(this, { single });
  }

  onSelect(event:any) {
    console.log(event);
  }

  /*********************************Pruebas Graficos*******************************************/
 
 datosGraficosTarjetas():DatosGraficas[] {
  
   var data: DatosGraficas[]=[
     {
       "name": "Clientes",
       "value": 23
     },
     {
       "name": "Proveedores",
       "value": 45
     },
     {
       "name": "Bancos",
       "value": 23
     },
     {
      "name": "Cobros realizados",
      "value": 50
    },
    {
     "name": "Cobros por efectuar",
     "value": 60
    },{
      "name": "Pagos realizados",
      "value": 10
    },
    {
     "name": "Pagos por efectuar",
     "value": 100
    }
   ];
   return data;
 }
 


}