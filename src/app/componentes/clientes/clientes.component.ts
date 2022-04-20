import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public clientes: any;
  public cliente: Cliente= {id: 0,nombre:"",ncuenta:"ES"};
  
    constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) { }
  
    ngOnInit(){
      this.obtenerClientes();
    }
  
    eliminarCliente(id:number){
        this.servicio.borrarCliente(id).subscribe(_=>{
          this.obtenerClientes()
        });
       
    }
    mostrarVentanaEliminar(c: Cliente) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: `El cliente ${c.nombre} será eliminado `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
      }).then((result: { isConfirmed: any; }) => {
        if(result.isConfirmed) {
          this.eliminarCliente(c.id);
        }
      });
    }

    /**
   * Metodo que permite mostrar un mensaje generico.
   * @param titulo titulo de la ventana.
   * @param mensaje mensaje a mostrar al usuario.
   * @param tipo tipo de mensaje a mostrar (success, info, warning, error, question)
   */
  mostrarMensaje(titulo: string, mensaje: string, tipo: SweetAlertIcon) {
    Swal.fire(titulo, mensaje, tipo);
  }
  
    editarCliente(id:number){
      this.obtenerCliente(id);
      if(this.cliente!=null){
        this.servicio.modificarCliente(this.cliente,id)
      }
    }

    guardarCliente(c:number) {
      if(this.cliente.nombre.length>0 && this.cliente.ncuenta.length==24 && this.cliente.ncuenta.startsWith("ES")){
      if(c!=0) {
        this.servicio.modificarCliente(this.cliente,c).subscribe(
          _ => {this.cliente= {id: 0,nombre:"",ncuenta:"ES"}
        this.obtenerClientes();
       
        }
        )
      } else {
        this.servicio.insertarCliente(this.cliente).subscribe(
          _ => {this.cliente= {id: 0,nombre:"",ncuenta:"ES"}
          this.obtenerClientes();
          }
        )
      }
    }else{
      if(this.cliente.nombre.length==0 && this.cliente.ncuenta.length==2){
        this.alertaService.nuevaAlerta("Todos los datos deben cumplimentarse", 'warning');
      }else if(this.cliente.nombre.length==0 && this.cliente.ncuenta.length<=24){
        this.alertaService.nuevaAlerta("El nombre es obligatorio", 'warning');
      }else if(this.cliente.nombre.length>0 && this.cliente.ncuenta.length!=24){
        this.alertaService.nuevaAlerta("El numero de cuenta debe contener 24 caracteres", 'warning');
      }else if(!this.cliente.ncuenta.startsWith("ES")){
        this.alertaService.nuevaAlerta("El numero de cuenta debe empezar con ES", 'warning');
      }
      
    }
    }
    LimpiarFormulario(){
      this.cliente = {id: 0,nombre:"",ncuenta:"ES"};
    }
  
    private obtenerClientes() {
      this.servicio.getClientes().subscribe(cli =>this.clientes = cli);
    }
    private obtenerCliente(id:number) {
      this.servicio.getCliente(id).subscribe(cli =>this.cliente = cli);
    }
  
    buscar(controlBusqueda: HTMLInputElement){
      if(controlBusqueda.value.length>0)
      this.servicio.getBusquedaCliente(controlBusqueda.value).subscribe(cli=>this.clientes=cli);
      else this.obtenerClientes();
  
    }
  
  }
  