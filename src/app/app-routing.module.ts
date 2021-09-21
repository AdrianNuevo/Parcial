import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultacontratoComponent } from './componentes/consultacontrato/consultacontrato.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { RegistrarinsumoComponent } from './componentes/registrarinsumo/registrarinsumo.component';


const routes: Routes = [
  {path: '', redirectTo: 'registrar', pathMatch: 'full'},
  {path: 'registar', component: RegistrarComponent},
  {path: 'registrarinsumo', component: RegistrarinsumoComponent},
  {path: 'consultacontrato', component: ConsultacontratoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
