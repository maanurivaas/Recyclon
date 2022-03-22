import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import { Banco } from 'src/app/modelo/banco';
import { Cliente } from 'src/app/modelo/cliente';
import { Cobro } from 'src/app/modelo/cobro';
import { DatosGraficas } from 'src/app/modelo/datos-graficas';
import { Pago } from 'src/app/modelo/pago';
import { Proveedor } from 'src/app/modelo/proveedor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public tarjetas!: any[];
  view: [number, number] = [1200, 150];
  private bancos :  any[]=[]; 
  private clientes !: Cliente[];
  private proveedores !:  Proveedor[];
  private nProveedores !:  number;
  private nBancos !:  number;
  private pagos !: Pago[];
  private cobros !:  Cobro[];

  private obtenerBancos() {
    this.servicio.getBancos().subscribe(cli =>this.bancos = cli);
    this.nBancos=this.bancos.length;
    console.log(this.nBancos);
  }

  async ngOnInit(){
    //this.servicio.getBancos().subscribe(cli =>this.bancos = cli);
    //this.servicio.getClientes().subscribe(cli =>this.clientes = cli);
    //this.servicio.getPagos().subscribe(cli =>this.pagos = cli);
    //this.servicio.getCobros().subscribe(cli =>this.cobros = cli);

    this.obtenerBancos()
    
    this.nProveedores= await this.servicio.getProvee();
    console.log(this.nProveedores);
    
    this.tarjetas= this.datosGraficosTarjetas();
  }

  colorScheme: string | any = {
    domain: ['#2f4858', '#007189', '#009da5', '#00caa5']
  };
  
  cardColor: string = '#232837';
  
  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) {
  
  }

  onSelect(event:any) {
    console.log(event);
    
  }
  seleccion(){
    console.log(this.bancos);
    this.nBancos=this.bancos.length;
    console.log(this.nBancos);
    this.tarjetas= this.datosGraficosTarjetas();
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
       "value": this.nProveedores
     },
     {
       "name": "Bancos",
       "value": this.nBancos
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