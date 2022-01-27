import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { FooterComponent } from './footer/footer.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { FormNuovoClienteComponent } from './form-nuovo-cliente/form-nuovo-cliente.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { TabellaFattureComponent } from './tabella-fatture/tabella-fatture.component';
import { HomeComponent } from './home/home.component';
import { FatturaDetailComponent } from './fattura-detail/fattura-detail.component';
import { ClienteFatturaComponent } from './cliente-fattura/cliente-fattura.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabellaClientiComponent,
    FooterComponent,
    ClienteDetailComponent,
    FormNuovoClienteComponent,
    ClienteEditComponent,
    TabellaFattureComponent,
    HomeComponent,
    FatturaDetailComponent,
    ClienteFatturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
