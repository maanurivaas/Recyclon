import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancosComponent } from './componentes/bancos/bancos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { CobrosComponent } from './componentes/cobros/cobros.component';
import { HomeComponent } from './componentes/home/home.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'bancos',component: BancosComponent},
  {path: 'clientes',component: ClientesComponent},
  {path: 'pagos',component: PagosComponent},
  {path: 'cobros',component: CobrosComponent},
  {path: 'proveedores',component: ProveedoresComponent},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
