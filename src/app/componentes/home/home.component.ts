import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import { Banco } from 'src/app/modelo/banco';
import { Cliente } from 'src/app/modelo/cliente';
import { Cobro } from 'src/app/modelo/cobro';
import { DatosGraficas } from 'src/app/modelo/datos-graficas';
import { Pago } from 'src/app/modelo/pago';
import { Proveedor } from 'src/app/modelo/proveedor';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public tarjetas!: any[];
  public tartap!: any[];
  public tartac!: any[];
  public barra!: any[];
  private bancos!:  Banco[]; 
  private clientes !: Cliente[];
  private proveedores !:  Proveedor[];
  private pagos !: Pago[];
  private cobros !:  Cobro[];

  private totalc1:number=0;
  private totalc2:number=0;
  private totalp1:number=0;
  private totalp2:number=0;
 

 ngOnInit(){
  this.spinner.show();
    this.obtenerBancos()
    this.obtenerProveedores()
    this.obtenerCobros()
    this.obtenerClientes()
    this.obtenerPagos()
    
    
    setTimeout(() => {
      this.tartap= this.datosGraficosTartap();
      this.tartac= this.datosGraficosTartac();
      this.barra= this.datosGraficosBarras();
      this.tarjetas= this.datosGraficosTarjetas();
      this.spinner.hide();
    }, 1000);
    
  }

  private obtenerBancos() {
    this.servicio.getBancos().subscribe(cli =>this.bancos = cli);
  }

  private obtenerProveedores(){
    this.servicio.getProveedores().subscribe(p =>this.proveedores = p);
  }

  private obtenerCobros() {
    this.servicio.getCobros().subscribe(cli =>this.cobros = cli);
  }

  private obtenerClientes(){
    this.servicio.getClientes().subscribe(cli =>this.clientes = cli);
  }
  private obtenerPagos() {
    this.servicio.getPagos().subscribe(cli =>this.pagos = cli);
  }
  
  constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService, private spinner: NgxSpinnerService) {
  
  }

  /*********************************Pruebas Graficos*******************************************/
 
 datosGraficosTarjetas():DatosGraficas[] {
  
   var data: DatosGraficas[]=[
     {
       "name": "Clientes",
       "value": this.clientes.length
     },
     {
       "name": "Proveedores",
       "value": this.proveedores.length
     },
     {
       "name": "Bancos",
       "value": this.bancos.length
     },
     {
      "name": "Cobros realizados",
      "value": this.cobros.slice().filter(x=>x.estado).length
    },
    {
     "name": "Cobros por efectuar",
     "value": this.cobros.slice().filter(x=>!x.estado).length
    },{
      "name": "Pagos realizados",
      "value": this.pagos.slice().filter(x=>x.estado).length
    },
    {
     "name": "Pagos por efectuar",
     "value": this.pagos.slice().filter(x=>!x.estado).length
    }
   ];
   return data;
 }
 

 datosGraficosTartap():DatosGraficas[] {
 
  this.pagos.slice().filter(x=>x.estado).forEach(p=>{
    this.totalp1+=p.importe
  });
  this.pagos.slice().filter(x=>!x.estado).forEach(p=>{
    this.totalp2+=p.importe
  });
  
  var data: DatosGraficas[]=[{
    "name": "Pagado",
    "value": this.totalp1
  },{
    "name": "Por pagar",
    "value": this.totalp2
  }];
  return data;
}
datosGraficosTartac():DatosGraficas[] {
  
  this.cobros.slice().filter(x=>x.estado).forEach(p=>{
    this.totalc1+=p.importe
  });
  this.cobros.slice().filter(x=>!x.estado).forEach(p=>{
    this.totalc2+=p.importe
  });
  
  var data: DatosGraficas[]=[{
    "name": "Cobrado",
    "value": this.totalc1
  },{
    "name": "Por cobrar",
    "value": this.totalc2
  }];
  return data;
}

datosGraficosBarras():DatosGraficas[] {
  var data: DatosGraficas[]= [
    {
      "name": "Por Cobrar",
      "value": this.totalc2
    },
    {
      "name": "Por Pagar",
      "value": this.totalp2
    },
    {
      "name": "Cobrados",
      "value": this.totalc1
    },
      {
      "name": "Pagados",
      "value": this.totalp1
    }
  ];
  return data;
}
}