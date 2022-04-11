import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, of, tap } from 'rxjs';
import { Nivel } from '../modelo/alerta';
import { Banco } from '../modelo/banco';
import { Cliente } from '../modelo/cliente';
import { Cobro } from '../modelo/cobro';
import { DatosGraficas } from '../modelo/datos-graficas';
import { Pago } from '../modelo/pago';
import { Proveedor } from '../modelo/proveedor';
import { AlertaService } from './alerta.service';


@Injectable({
  providedIn: 'root'
})

export class ServicioRecyclonService {
 
  private   URLClientes: string = 'http://localhost:8081/clientes/';
  private URLBancos: string = 'http://localhost:8082/bancos/';
  private URLProveedores: string = 'http://localhost:8083/proveedores/';
  private URLCobros: string = 'http://localhost:8084/cobros/';
  private URLPagos: string = 'http://localhost:8085/pagos/';
  

  constructor(private http:HttpClient, private alertaService: AlertaService) { }
/*********************************Servicio de Clientes*******************************************/
getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.URLClientes).pipe(
      tap(_ => this.log('Se han recibido los Clientes', 'success')),
      catchError(this.gestionarError<Cliente[]>('No se han podido recibir los clientes', ))
    );
  }
  
 getCliente(id:number): Observable<Cliente> {
    return this.http.get<Cliente>(this.URLClientes + id).pipe(
      tap(_ => this.log('Se ha recibido el cliente ' + id, 'success')),
      catchError(this.gestionarError<Cliente>('No se ha podido recibir el cliente'))
    );
  }
  insertarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.URLClientes, cliente).pipe(
      tap(_ => {this.log('Se ha insertado el Cliente ' + JSON.stringify(cliente), 'success'); this.alerta('Se ha insertado el Cliente ', 'success')}),
      catchError(this.gestionarError<Cliente>('No se ha podido insertar el cliente'))
    );
  }

  modificarCliente(cliente: Cliente, id: number): Observable<Cliente> {
    return this.http.put<Cliente>(this.URLClientes+ id, cliente).pipe(
      tap(_ =>{ this.log('Se ha modificado el Cliente', 'success');this.alerta('Se ha modificado el Cliente', 'success')}),
      catchError(this.gestionarError<Cliente>('No se ha podido modificar el cliente'))
    );
  }

  borrarCliente(id: number): Observable<any> {
    return this.http.delete<any>(this.URLClientes + id).pipe(
      tap(_ => {this.log('Se ha borrado el Cliente', 'success');this.alerta('Se ha borrado el Cliente', 'success')}),
      catchError(this.gestionarError<Cliente>('No se ha podido borrar el Cliente'))
    );
  }

  getBusquedaCliente(nombre: string) {
    return this.http.get<Cliente[]>(this.URLClientes+"busqueda/"+nombre).pipe(
      tap(_ => this.log('Se han recibido los Clientes', 'success')),
      catchError(this.gestionarError<Cliente[]>('No se han podido recibir los clientes', ))
    );
  }

/*********************************Servicio de Bancos*******************************************/
getBancos(): Observable<Banco[]> {
  return this.http.get<Banco[]>(this.URLBancos).pipe(
    tap(_ => this.log('Se han recibido los bancos', 'success')),
    catchError(this.gestionarError<Banco[]>('No se han podido recibir los bancos', ))
  );
}
 
getBanco(id:number): Observable<Banco> {
  return this.http.get<Banco>(this.URLBancos + id).pipe(
    tap(_ => this.log('Se ha recibido el banco ' + id, 'success')),
    catchError(this.gestionarError<Banco>('No se ha podido recibir el banco'))
  );
}
insertarBanco(banco: Banco): Observable<Banco> {
  return this.http.post<Banco>(this.URLBancos, banco).pipe(
    tap(_ => {this.log('Se ha insertado el banco ' + JSON.stringify(banco), 'success'), this.alerta('Se ha insertado el banco ', 'success')}),
    catchError(this.gestionarError<Banco>('No se ha podido insertar el banco'))
  );
}

modificarBanco(banco: Banco, id: number): Observable<Banco> {
  return this.http.put<Banco>(this.URLBancos+ id, banco).pipe(
    tap(_ => {this.log('Se ha modificado el Banco', 'success');this.alerta('Se ha modificado el Banco', 'success')}),
    catchError(this.gestionarError<Banco>('No se ha podido modificar el banco'))
  );
}

borrarBanco(id: number): Observable<any> {
  return this.http.delete<any>(this.URLBancos + id).pipe(
    tap(_ => {this.log('Se ha borrado el Banco', 'success');this.alerta('Se ha borrado el Banco', 'success')}),
    catchError(this.gestionarError<Banco>('No se ha podido borrar el Banco'))
  );
}

getBusquedaBanco(nombre: string) {
  return this.http.get<Banco[]>(this.URLBancos+"busqueda/"+nombre).pipe(
    tap(_ => this.log('Se han recibido los Bancos', 'success')),
    catchError(this.gestionarError<Banco[]>('No se han podido recibir los Bancos', ))
  );
}

/*********************************Servicio de Proveedores*******************************************/
getProveedores(): Observable<Proveedor[]> {
  return this.http.get<Proveedor[]>(this.URLProveedores).pipe(
    tap(_ => this.log('Se han recibido los Proveedores', 'success')),
    catchError(this.gestionarError<Proveedor[]>('No se han podido recibir los Proveedores', ))
  );
}

getProveedor(id:number): Observable<Proveedor> {
  return this.http.get<Proveedor>(this.URLProveedores + id).pipe(
    tap(_ => this.log('Se ha recibido el Proveedor ' + id, 'success')),
    catchError(this.gestionarError<Proveedor>('No se ha podido recibir el Proveedor'))
  );
}
insertarProveedor(pro: Proveedor): Observable<Proveedor> {
  return this.http.post<Proveedor>(this.URLProveedores, pro).pipe(
    tap(_ => {this.log('Se ha insertado el Proveedor' + JSON.stringify(pro), 'success');this.alerta('Se ha insertado el Proveedor', 'success')}),
    catchError(this.gestionarError<Proveedor>('No se ha podido insertar el Proveedor'))
  );
}

modificarProveedor(pro: Proveedor, id: number): Observable<Proveedor> {
  return this.http.put<Proveedor>(this.URLProveedores+ id, pro).pipe(
    tap(_ => {this.log('Se ha modificado el Proveedor', 'success');this.alerta('Se ha modificado el Proveedor', 'success') }),
    catchError(this.gestionarError<Proveedor>('No se ha podido modificar el Proveedor'))
  );
}

borrarProveedor(id: number): Observable<any> {
  return this.http.delete<any>(this.URLProveedores + id).pipe(
    tap(_ => {this.log('Se ha borrado el Proveedor', 'success');this.alerta('Se ha borrado el Proveedor', 'success') }),
    catchError(this.gestionarError<Proveedor>('No se ha podido borrar el Proveedor'))
  );
}

getBusquedaProveedor(nombre: string) {
  return this.http.get<Proveedor[]>(this.URLProveedores+"busqueda/"+nombre).pipe(
    tap(_ =>{ this.log('Se han recibido los Proveedores', 'success')}),
    catchError(this.gestionarError<Proveedor[]>('No se han podido recibir los Proveedores', ))
  );
}
/*********************************Servicio de Cobros*******************************************/


getCobros(): Observable<Cobro[]> {
  return this.http.get<Cobro[]>(this.URLCobros).pipe(
    tap(_ => this.log('Se han recibido los Cobros', 'success')),
    catchError(this.gestionarError<Cobro[]>('No se han podido recibir los Cobros', ))
  );
}

getCobro(id:number):  Observable<Cobro> {
 
  return this.http.get<Cobro>(this.URLCobros + id).pipe(
    tap(_ => this.log('Se ha recibido el Cobro ' + id, 'success')),
    catchError(this.gestionarError<Cobro>('No se ha podido recibir el Cobro'))
  );
}
insertarCobro(c: Cobro): Observable<Cobro> {
  return this.http.post<Cobro>(this.URLCobros, c).pipe(
    tap(_ => {this.log('Se ha insertado el Cobro' + JSON.stringify(c), 'success');this.alerta('Se ha insertado el Cobro', 'success')}),
    catchError(this.gestionarError<Cobro>('No se ha podido insertar el Cobro'))
  );
}

modificarCobro(c: Cobro, id: number): Observable<Cobro> {
  return this.http.put<Cobro>(this.URLCobros+ id, c).pipe(
    tap(_ => {this.log('Se ha modificado el Cobro', 'success');this.alerta('Se ha modificado el Cobro', 'success') }),
    catchError(this.gestionarError<Cobro>('No se ha podido modificar el Cobro'))
  );
}

borrarCobro(id: number): Observable<any> {
  return this.http.delete<any>(this.URLCobros + id).pipe(
    tap(_ => {this.log('Se ha borrado el Cobro', 'success');this.alerta('Se ha borrado el Cobro', 'success') }),
    catchError(this.gestionarError<Cobro>('No se ha podido borrar el Cobro'))
  );
}

getCobrosCliente(id: number) {
  return this.http.get<Cobro[]>(this.URLCobros+"cliente/"+id).pipe(
    tap(_ =>{ this.log('Se han recibido los Cobros', 'success')}),
    catchError(this.gestionarError<Cobro[]>('No se han podido recibir los Cobros', ))
  );
}
getCobrosBanco(id: number) {
  return this.http.get<Cobro[]>(this.URLCobros+"banco/"+id).pipe(
    tap(_ =>{ this.log('Se han recibido los Cobros', 'success')}),
    catchError(this.gestionarError<Cobro[]>('No se han podido recibir los Cobros', ))
  );
}
getCobrosEstado(estado: number) {
  return this.http.get<Cobro[]>(this.URLCobros+"estado/"+estado).pipe(
    tap(_ =>{ this.log('Se han recibido los Cobros', 'success')}),
    catchError(this.gestionarError<Cobro[]>('No se han podido recibir los Cobros', ))
  );
}
getCobrosFormaPago(fp: string) {
  return this.http.get<Cobro[]>(this.URLCobros+"formapago/"+fp).pipe(
    tap(_ =>{ this.log('Se han recibido los Cobros', 'success')}),
    catchError(this.gestionarError<Cobro[]>('No se han podido recibir los Cobros', ))
  );
}
/*********************************Servicio de Pagos*******************************************/
getPagos(): Observable<Pago[]> {
  return this.http.get<Pago[]>(this.URLPagos).pipe(
    tap(_ => this.log('Se han recibido los Pagos', 'success')),
    catchError(this.gestionarError<Pago[]>('No se han podido recibir los Pagos', ))
  );
}

getPago(id:number): Observable<Pago> {
  return this.http.get<Pago>(this.URLPagos + id).pipe(
    tap(_ => this.log('Se ha recibido el Pago' + id, 'success')),
    catchError(this.gestionarError<Pago>('No se ha podido recibir el Pago'))
  );
}
insertarPago(c: Pago): Observable<Pago> {
  return this.http.post<Pago>(this.URLPagos, c).pipe(
    tap(_ => {this.log('Se ha insertado el Pago' + JSON.stringify(c), 'success');this.alerta('Se ha insertado el Pago', 'success')}),
    catchError(this.gestionarError<Pago>('No se ha podido insertar el Pago'))
  );
}

modificarPago(c: Pago, id: number): Observable<Pago> {
  return this.http.put<Pago>(this.URLPagos+ id, c).pipe(
    tap(_ => {this.log('Se ha modificado el Pago', 'success');this.alerta('Se ha modificado el Pago', 'success') }),
    catchError(this.gestionarError<Pago>('No se ha podido modificar el Pago'))
  );
}

borrarPago(id: number): Observable<any> {
  return this.http.delete<any>(this.URLPagos + id).pipe(
    tap(_ => {this.log('Se ha borrado el Pago', 'success');this.alerta('Se ha borrado el Pago', 'success') }),
    catchError(this.gestionarError<Pago>('No se ha podido borrar el Pago'))
  );
}

getPagosCliente(id: number) {
  return this.http.get<Pago[]>(this.URLPagos+"cliente/"+id).pipe(
    tap(_ =>{ this.log('Se han recibido los Pagos', 'success')}),
    catchError(this.gestionarError<Pago[]>('No se han podido recibir los Pagos', ))
  );
}
getPagosBanco(id: number) {
  return this.http.get<Pago[]>(this.URLPagos+"banco/"+id).pipe(
    tap(_ =>{ this.log('Se han recibido los Pagos', 'success')}),
    catchError(this.gestionarError<Pago[]>('No se han podido recibir los Pagos', ))
  );
}
getPagosEstado(estado: number) {
  return this.http.get<Pago[]>(this.URLPagos+"estado/"+estado).pipe(
    tap(_ =>{ this.log('Se han recibido los Pagos', 'success')}),
    catchError(this.gestionarError<Pago[]>('No se han podido recibir los Pagos', ))
  );
}
getPagosFormaPago(fp: string) {
  return this.http.get<Pago[]>(this.URLPagos+"formapago/"+fp).pipe(
    tap(_ =>{ this.log('Se han recibido los Pagos', 'success')}),
    catchError(this.gestionarError<Pago[]>('No se han podido recibir los Pagos', ))
  );
}
/*********************************Errores y Alertas*******************************************/
  private gestionarError<T>(mensaje: string, respuesta?: T) {
    return ((err: any): Observable<T> => {
      this.alertaService.nuevaAlerta(mensaje + " porque no puede existir cobros o pagos asociados a el.", 'danger');
      return of(respuesta as T);
    });
  }
  private log(mensaje: string, nivel: Nivel) {

    switch(nivel) {
      case 'info': console.info(mensaje); break;
      case 'success': console.log(mensaje); break;
      case 'warning': console.warn(mensaje); break;
      case 'danger': console.error(mensaje); break;
      default: throw 'No me esperaba ese tipo de mensaje, contactar con el servicio tecnico.';
    }
  }
  public alerta(mensaje: string, nivel: Nivel) {
    this.alertaService.nuevaAlerta(mensaje, nivel);
  }

  
  async getProvee(): Promise<number> {
    let promesa: Promise<Proveedor[]> = lastValueFrom<Proveedor[]>(this.http.get<Proveedor[]>(this.URLProveedores));
    var x= await promesa;
    return x.length;
  }
}