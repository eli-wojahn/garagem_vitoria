import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { FormsModule } from '@angular/forms';
import { MoedaPipe } from './moeda.pipe';
import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarListComponent } from './car-list/car-list.component';
import { VendedorFormComponent } from './vendedor-form/vendedor-form.component';
import { VendedorListComponent } from './vendedor-list/vendedor-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';


@NgModule({
 declarations: [
   AppComponent,
   TabelaProdutosComponent,
   FormProdutosComponent,
   MoedaPipe,
   FiltroPesquisaPipe,
   PageNotFoundComponent,
   NavbarComponent,
   CarCardComponent,
   CarListComponent,
   VendedorFormComponent,
   VendedorListComponent,
   LoginComponent,
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   HttpClientModule,
   FontAwesomeModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
