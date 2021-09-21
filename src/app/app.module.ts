import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { RegistrarinsumoComponent } from './componentes/registrarinsumo/registrarinsumo.component';
import { ContratoservicioService } from './servicios/contratoservicio.service';
import { ConsultacontratoComponent } from './componentes/consultacontrato/consultacontrato.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrarComponent,
    RegistrarinsumoComponent,
    ConsultacontratoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ContratoservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
