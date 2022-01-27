import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteFatturaComponent } from './cliente-fattura/cliente-fattura.component';
import { FatturaDetailComponent } from './fattura-detail/fattura-detail.component';
import { FormNuovoClienteComponent } from './form-nuovo-cliente/form-nuovo-cliente.component';

import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { TabellaFattureComponent } from './tabella-fatture/tabella-fatture.component';

const routes: Routes = [

  {path: '', component:TabellaClientiComponent},
  {path:'cliente/:id', component: ClienteDetailComponent},
  {path:'nuovocliente', component:FormNuovoClienteComponent},
  {path:'clienteEdit/:id', component:ClienteEditComponent},
  {path:'fatture', component:TabellaFattureComponent},
  {path:'fattura/:id', component:FatturaDetailComponent},
  {path:'cliente-fattura/:id', component:ClienteFatturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
