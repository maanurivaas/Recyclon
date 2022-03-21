import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { AlertaComponent } from './componentes/alerta/alerta.component';
import { AlertasComponent } from './componentes/alertas/alertas.component';
import { LabelInputComponent } from './componentes/label-input/label-input.component';
import { EuroPipe } from './pipes/euro.pipe';
import { CajaDirective } from './directivas/caja.directive';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { BancosComponent } from './componentes/bancos/bancos.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';
import { CobrosComponent } from './componentes/cobros/cobros.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { EstadoPipe } from './pipes/estado.pipe';
import { BancoPipe } from './pipes/banco.pipe';
import { ClientePipe } from './pipes/cliente.pipe';
import { ProveedorPipe } from './pipes/proveedor.pipe';
import { NgChartsModule } from 'ng2-charts';
import { ColorPickerModule } from 'ngx-color-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    FooterComponent,
    HomeComponent,
    AlertaComponent,
    AlertasComponent,
    EuroPipe,
    LabelInputComponent,
    CajaDirective,
    ClientesComponent,
    BancosComponent,
    ProveedoresComponent,
    CobrosComponent,
    PagosComponent,
    FechaPipe,
    EstadoPipe,
    BancoPipe,
    ClientePipe,
    ProveedorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ColorPickerModule,
    NgChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }