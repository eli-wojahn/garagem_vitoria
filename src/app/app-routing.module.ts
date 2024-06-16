import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { CarListComponent } from './car-list/car-list.component';
import { VendedorListComponent } from './vendedor-list/vendedor-list.component';
import { VendedorFormComponent } from './vendedor-form/vendedor-form.component';

const routes: Routes = [
 { path: 'tabela', component: TabelaProdutosComponent },
 { path: 'novo', component: FormProdutosComponent },
 { path: 'carros', component: CarListComponent },
 { path: 'edit/:id', component: FormProdutosComponent },
 { path: 'vendedores', component: VendedorListComponent },
 { path: 'edit-vendedor/:id', component: VendedorFormComponent },
 { path: 'novo-vendedor', component: VendedorFormComponent },
 { path: '', redirectTo: '/carros', pathMatch: 'full'},
 { path: '**', component: PageNotFoundComponent}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
