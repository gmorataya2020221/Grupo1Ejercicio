import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagPrincipalComponent } from './components/pag-principal/pag-principal.component';
import { AgregarEmpresaComponent } from './components/agregar-empresa/agregar-empresa.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AggEmpresaComponent } from './components/agg-empresa/agg-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    PagPrincipalComponent,
    AgregarEmpresaComponent,
    EmpresasComponent,
    AggEmpresaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
