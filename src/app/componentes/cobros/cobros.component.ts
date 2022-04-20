import { Component, OnInit } from '@angular/core';
import { Alerta, Nivel } from 'src/app/modelo/alerta';
import { Banco } from 'src/app/modelo/banco';
import { Cliente } from 'src/app/modelo/cliente';
import { Cobro } from 'src/app/modelo/cobro';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cobros',
  templateUrl: './cobros.component.html',
  styleUrls: ['./cobros.component.css']
})
export class CobrosComponent implements OnInit {
  private nivel!: Nivel;
  public cobros!: Cobro[];
  public cobro: Cobro={
    id:0,
    idcliente:-1,
    idbanco:-1,
    numfactura:0,
    importe:0.0,
    fecha: new Date,
    formapago:"",
    estado:false
  }; 
  public cobroBusqueda: Cobro={
    id:0,
    idcliente:0,
    idbanco:0,
    numfactura:0,
    importe:0.0,
    fecha: new Date,
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
  public clientes!:Cliente[];
  private cobrosf!: Cobro[];
  mostrarAlerta: boolean = true;
  
    constructor(private servicio:ServicioRecyclonService,public alertaService: AlertaService) { }
  
    ngOnInit(){
    this.obtenerBancos();
    this.obtenerClientes();
    this.obtenerCobros();
    this.servicio.getCobros().subscribe(cli =>this.cobrosf = cli);
    this.desde= new Date(2000,0,1);
  this.Desde= new Date(2000,0,1);
  this.Hasta= new Date(this.year.getUTCFullYear()+1,0,1); 
  this.hasta= new Date(this.year.getUTCFullYear()+1,0,1);
    
    }

    borrar(alerta: Alerta) {
      this.alertaService.borrarAlerta(alerta);
    }
  
    eliminarCobro(id:number){
        this.servicio.borrarCobro(id).subscribe(_=>this.obtenerCobros());
    }
    mostrarVentanaEliminar(c: Cobro) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: `El cobro será eliminado `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
      }).then((result: { isConfirmed: any; }) => {
        if(result.isConfirmed) {
          this.eliminarCobro(c.id);
        }
      });
    }
  
    editarCobro(id:number){
      this.obtenerCobro(id);
      if(this.cobro!=null){
        this.servicio.modificarCobro(this.cobro,id)
      }
    }
    guardarCobro(id:number) {
      
      if(id!=0) {
        this.servicio.modificarCobro(this.cobro,id).subscribe(
          _ => {this.cobro;
        this.obtenerCobros();
        }
        )

      } else {
        this.servicio.insertarCobro(this.cobro).subscribe(
          _ => {this.cobro;
          this.obtenerCobros();
          }
        )
    }
    this.servicio.getCobros().subscribe(cli =>this.cobrosf = cli);
    this.LimpiarBusqueda()
    this.LimpiarFormulario()
  }
    
    LimpiarFormulario(){
      this.cobro ={
        id:0,
        idcliente:-1,
        idbanco:-1,
        numfactura:0,
        importe:0.0,
        fecha: new Date,
        formapago:"",
        estado:false
      }; 
    }
    LimpiarBusqueda(){
      this.cobroBusqueda={
        id:0,
        idcliente:0,
        idbanco:0,
        numfactura:0,
        importe:0.0,
        fecha: new Date,
        formapago:"",
        estado:true
      }; 
      this.desde= new Date(2000,0,1);
      this.Desde= new Date(2000,0,1);
      this.Hasta= new Date(this.year.getUTCFullYear()+1,0,1); 
      this.hasta= new Date(this.year.getUTCFullYear()+1,0,1);
      this.estado2=0;
      this.obtenerCobros();
    }
  
    private obtenerCobros() {
      this.servicio.getCobros().subscribe(cli => this.cobros = cli);
    }
    obtenerBancos() {
      this.servicio.getBancos().subscribe(ban => this.bancos = ban);
    }
    obtenerClientes() {
      this.servicio.getClientes().subscribe(cli => this.clientes = cli);
    }

    private obtenerCobro(id:number) {
      this.servicio.getCobro(id).subscribe(cli =>this.cobro = cli);
    }
  
    buscar(){
      
     
      this.servicio.getCobros().subscribe(cli =>this.cobrosf = cli);
      
      if(this.cobroBusqueda.idcliente>0){
        this.cobrosf=  this.cobrosf.filter(c=>c.idcliente==this.cobroBusqueda.idcliente);
    
      }
      if(this.cobroBusqueda.idbanco>0){
        this.cobrosf= this.cobrosf.filter(c=>c.idbanco==this.cobroBusqueda.idbanco);
      }
      if(this.cobroBusqueda.formapago.length>0){
        this.cobrosf= this.cobrosf.filter(c=>c.formapago===this.cobroBusqueda.formapago);
      }
      if(this.estado2!=0){
        if(this.estado2==1){
          this.cobrosf= this.cobrosf.filter(c=>c.estado===true);
        }else{
          this.cobrosf= this.cobrosf.filter(c=>c.estado===false);
        }
      }
      if(this.desde.getTime!=this.Desde.getTime){
        this.cobrosf= this.cobrosf.filter(c=>c.fecha>=this.desde);
      }
      if(this.hasta.getTime!=this.Hasta.getTime){
        this.cobrosf= this.cobrosf.filter(c=>c.fecha<=this.hasta);
      }
     this.cobros= this.cobrosf;
    }
  
  }
  