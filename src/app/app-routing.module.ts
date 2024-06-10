import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  { path: 'tabela', component: TabelaProdutosComponent },
  { path: 'novo', component: FormProdutosComponent },
  { path: 'carros', component: CarListComponent },
  { path: 'edit/:id', component: FormProdutosComponent },
  { path: '', redirectTo: '/carros', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
