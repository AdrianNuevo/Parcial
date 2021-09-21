import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenunavComponent } from './menunav/menunav.component';
import { TablaComponent } from './tabla/tabla.component';
import { CalculoComponent } from './calculo/calculo.component';
import { IngresarComponent } from './ingresar/ingresar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenunavComponent,
    TablaComponent,
    CalculoComponent,
    IngresarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
