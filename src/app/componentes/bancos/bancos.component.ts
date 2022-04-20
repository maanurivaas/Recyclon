import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banco } from 'src/app/modelo/banco';
import { Cliente } from 'src/app/modelo/cliente';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ServicioRecyclonService } from 'src/app/servicio/servicio-recyclon.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit {
  public bancos!: Banco[];
  public banco: Banco= {id: 0,nombre:""};
  
    constructor(private servicio:ServicioRecyclonService,private alertaService: AlertaService) {
      
     }
  
    ngOnInit(){
      this.obtenerBancos();
    }
  
    eliminarBanco(id:number){
        this.servicio.borrarBanco(id).subscribe(_=>this.obtenerBancos());
    }
    mostrarVentanaEliminar(c: Banco) {
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
          this.eliminarBanco(c.id);
        }
      });
    }

  
    editarBanco(id:number){
      this.obtenerBanco(id);
      if(this.banco!=null){
        this.servicio.modificarBanco(this.banco,id)
      }
    }
    guardarCliente(id:number) {
      if(this.banco.nombre.length>0){
      if(id!=0) {
        this.servicio.modificarBanco(this.banco,id).subscribe(
          _ => {this.banco= {id: 0,nombre:""}
        this.obtenerBancos();
        }
        )
      } else {
        this.servicio.insertarBanco(this.banco).subscribe(
          _ => {this.banco= {id: 0,nombre:""}
          this.obtenerBancos();
          }
        )
      }
    }else{
      this.alertaService.nuevaAlerta("El nombre no debe estar vacio", 'warning');
    }
    }
    LimpiarFormulario(){
      this.banco = {id: 0,nombre:""};
    }
  
    private obtenerBancos() {
      this.servicio.getBancos().subscribe(cli =>this.bancos = cli);
    }
    private obtenerBanco(id:number) {
      this.servicio.getBanco(id).subscribe(cli =>this.banco = cli);
    }
  
    buscar(controlBusqueda: HTMLInputElement){
      if(controlBusqueda.value.length>0)
      this.servicio.getBusquedaBanco(controlBusqueda.value).subscribe(cli=>this.bancos=cli);
      else this.obtenerBancos();
  
    }
  
  }
  