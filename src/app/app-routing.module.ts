import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { carnesComponent } from './components/carnes/carnes.component';
import { carneComponent } from './components/carne/carne.component';
import { PrincipalComponent } from  './components/principal/principal.component';
import { verduraComponent} from   './components/verdura/verdura.component';
import { verdurasComponent} from  './components/verduras/verduras.component';
import { pescadoComponent} from   './components/pescado/pescado.component';
import { pescadosComponent} from  './components/pescados/pescados.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { pedidoComponent } from './components/pedido/pedido.component';
import { pedidosComponent } from './components/pedidos/pedidos.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'carnes', component: carnesComponent},
  { path: 'carne/:id', component: carneComponent},
  { path: 'verduras', component: verdurasComponent},
  { path: 'verdura/:id', component: verduraComponent },
  { path: 'pescados', component: pescadosComponent  },
  { path: 'pescado/:id', component: pescadoComponent },
  { path: 'pedidos', component: pedidosComponent},
  { path: 'pedido/:id', component: pedidoComponent},
  { path: '', component: LoginComponent},
  { path: 'registro', component: RegistroComponent,},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
