import { Component, OnInit } from '@angular/core';
import { Nivel, Alerta } from 'src/app/modelo/alerta';
import { Banco } from 'src/app/modelo/banco';
import { Pago } from 'src/app/modelo/pago';
import { Proveedor } from 'src/app/modelo/proveedor';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})



export class PagosComponent implements OnInit {
  private nivel!: Nivel;
  public pagos!: Pago[];
  public pago: Pago={
    id:0,
    idproveedor:-1,
    idbanco:-1,
    numfactura:0,
    importe:0.0,
    fechavencimiento: new Date,
    formapago:"",
    estado:false
  }; 
  public pagoBusqueda: Pago={
    id:0,
    idproveedor:0,
    idbanco:0,
    numfactura:0,
    importe:0.0,
    fechavencimiento: new Date,
    formapago:"",
    estado:true
  }; 
  public estado2:number=0;
  //public desde: Date= new Date(2000,0,1);
  //private Desde: Date= new Date(2000,0,1);
  public desde!: Date;
  private Desde!: Date;
  private year: Date= new Date();
  //private Hasta: Date= new Date(this.year.getUTCFullYear()+1,0,1); 
  //public hasta: Date= new Date(this.year.getUTCFullYear()+1,0,1);
  private Hasta!: Date; 
  public hasta!: Date;
  
  public formapago: string[]=["Domiciliado","Transferencia","Tarjeta de crédito"];
  public bancos!:Banco[];
  public proveedores!:Proveedor[];
  private pagosf!: Pago[];
  mostrarAlerta: boolean = true;
  constructor(private servicio:ServicioRecyclonService,public alertaService: AlertaService) { }
  
  ngOnInit(){
  this.obtenerBancos();
  this.obtenerProveedores();
  this.obtenerPagos();
  this.servicio.getPagos().subscribe(pag =>this.pagosf = pag);
  this.desde= new Date(2000,0,1);
  this.Desde= new Date(2000,0,1);
  this.Hasta= new Date(this.year.getUTCFullYear()+1,0,1); 
  this.hasta= new Date(this.year.getUTCFullYear()+1,0,1);

  }

  borrar(alerta: Alerta) {
    this.alertaService.borrarAlerta(alerta);
  }

  eliminarPago(id:number){
      this.servicio.borrarPago(id).subscribe(_=>this.obtenerPagos());
  }

  mostrarVentanaEliminar(c: Pago) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `El pago será eliminado `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result: { isConfirmed: any; }) => {
      if(result.isConfirmed) {
        this.eliminarPago(c.id);
      }
    });
  }

  editarPago(id:number){
    this.obtenerPago(id);
    if(this.pago!=null){
      this.servicio.modificarPago(this.pago,id)
    }
  }
  guardarPago(id:number) {
    
    if(id!=0) {
      this.servicio.modificarPago(this.pago,id).subscribe(
        _ => {this.pago;
      this.obtenerPagos();
      }
      
      )
    } else {
      this.servicio.insertarPago(this.pago).subscribe(
        _ => {this.pago;
        this.obtenerPagos();
        }
      )

  }
  this.LimpiarBusqueda()
  this.LimpiarFormulario()
  this.servicio.getPagos().subscribe(pag =>this.pagosf = pag);
}
  
  LimpiarFormulario(){
    this.pago ={
      id:0,
      idproveedor:-1,
      idbanco:-1,
      numfactura:0,
      importe:0.0,
      fechavencimiento: new Date,
      formapago:"",
      estado:false
    }; 
  }
  LimpiarBusqueda(){
    this.pagoBusqueda={
      id:0,
      idproveedor:0,
      idbanco:0,
      numfactura:0,
      importe:0.0,
      fechavencimiento: new Date,
      formapago:"",
      estado:true
    }; 
    this.desde= new Date(2000,0,1);
    this.Desde= new Date(2000,0,1);
    this.Hasta= new Date(this.year.getUTCFullYear()+1,0,1); 
    this.hasta= new Date(this.year.getUTCFullYear()+1,0,1);
    this.estado2=0;
    this.obtenerPagos();
  }

  private obtenerPagos() {
    this.servicio.getPagos().subscribe(pag => this.pagos = pag);
  }
  obtenerBancos() {
    this.servicio.getBancos().subscribe(ban => this.bancos = ban);
  }
  obtenerProveedores() {
    this.servicio.getProveedores().subscribe(pag => this.proveedores = pag);
  }

  private obtenerPago(id:number) {
    this.servicio.getPago(id).subscribe(pag =>this.pago = pag);
  }

  buscar(){
    
    this.servicio.getPagos().subscribe(pag =>this.pagosf = pag);
    
    if(this.pagoBusqueda.idproveedor>0){
      this.pagosf=  this.pagosf.filter(c=>c.idproveedor==this.pagoBusqueda.idproveedor);
    }
    if(this.pagoBusqueda.idbanco>0){
      this.pagosf= this.pagosf.filter(c=>c.idbanco==this.pagoBusqueda.idbanco);
    }
    if(this.pagoBusqueda.formapago.length>0){
      this.pagosf= this.pagosf.filter(c=>c.formapago===this.pagoBusqueda.formapago);
    }
    if(this.estado2!=0){
      if(this.estado2==1){
        this.pagosf= this.pagosf.filter(c=>c.estado===true);
      }else{
        this.pagosf= this.pagosf.filter(c=>c.estado===false);
      }
    }
    if(this.desde.getTime!=this.Desde.getTime){
      this.pagosf= this.pagosf.filter(c=>c.fechavencimiento>=this.desde);
    }
    if(this.hasta.getTime!=this.Hasta.getTime){
      this.pagosf= this.pagosf.filter(c=>c.fechavencimiento<=this.hasta);
    }
   this.pagos= this.pagosf;
  
  }

}
