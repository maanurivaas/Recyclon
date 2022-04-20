import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { Proveedor } from 'src/app/modelo/proveedor';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  public proveedores: any;
  public proveedor: Proveedor= {id: 0,nombre:""};
  
    constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) { }
  
    ngOnInit(){
      this.obtenerProveedores();
    }
  
    eliminarProveedor(id:number){
        this.servicio.borrarProveedor(id).subscribe(_=>this.obtenerProveedores());
    }
    mostrarVentanaEliminar(c: Proveedor) {
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
          this.eliminarProveedor(c.id);
        }
      });
    }
  
    editarProveedor(id:number){
      this.obtenerProveedor(id);
      if(this.proveedor!=null){
        this.servicio.modificarProveedor(this.proveedor,id)
      }
    }
    guardarProveedor(id:number) {
      if(this.proveedor.nombre.length>0){
      if(id!=0) {
        this.servicio.modificarProveedor(this.proveedor,id).subscribe(
          _ => {this.proveedor= {id: 0,nombre:""}
        this.obtenerProveedores();
        }
        )
      } else {
        this.servicio.insertarProveedor(this.proveedor).subscribe(
          _ => {this.proveedor= {id: 0,nombre:""}
          this.obtenerProveedores();
          }
        )
      }
    }else{
      this.alertaService.nuevaAlerta("El nombre no puede estar vacio", 'warning');
    }
    }
    LimpiarFormulario(){
      this.proveedor = {id: 0,nombre:""};
    }
  
    private obtenerProveedores() {
      this.servicio.getProveedores().subscribe(cli =>this.proveedores = cli);
    }
    private obtenerProveedor(id:number) {
      this.servicio.getProveedor(id).subscribe(cli =>this.proveedor = cli);
    }
  
    buscar(controlBusqueda: HTMLInputElement){
      if(controlBusqueda.value.length>0)
      this.servicio.getBusquedaProveedor(controlBusqueda.value).subscribe(cli=>this.proveedores=cli);
      else this.obtenerProveedores();
  
    }
  
  }
  