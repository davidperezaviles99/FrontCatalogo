import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { carneComponent } from './components/carne/carne.component';
import { carnesComponent } from './components/carnes/carnes.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { verduraComponent} from   './components/verdura/verdura.component';
import { verdurasComponent} from  './components/verduras/verduras.component';
import { pescadoComponent} from   './components/pescado/pescado.component';
import { pescadosComponent} from  './components/pescados/pescados.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { pedidoComponent } from './components/pedido/pedido.component';
import { pedidosComponent } from './components/pedidos/pedidos.component';

import { ReactiveFormsModule } from '@angular/forms';
import { carnesService } from './services/carnes.service';
import { verdurasService } from './services/verduras.service';
import { pescadosService } from './services/pescados.service';
import { pedidosService } from './services/pedidos.service';


@NgModule({
  declarations: [
    AppComponent,
    carneComponent,
    carnesComponent,
    PrincipalComponent,
    verduraComponent,
    verdurasComponent,
    pescadoComponent,
    pescadosComponent,
    RegistroComponent,
    LoginComponent,
    pedidoComponent,
    pedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    carnesService,
    verdurasService,
    pescadosService,
    pedidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
