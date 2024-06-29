import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { CarListComponent } from './car-list/car-list.component';
import { VendedorListComponent } from './vendedor-list/vendedor-list.component';
import { VendedorFormComponent } from './vendedor-form/vendedor-form.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'tabela', component: TabelaProdutosComponent, canActivate: [AuthGuard] },
    { path: 'novo-carro', component: FormProdutosComponent, canActivate: [AuthGuard] },
    { path: 'carros', component: CarListComponent },
    { path: 'edit/:id', component: FormProdutosComponent, canActivate: [AuthGuard] },
    { path: 'vendedores', component: VendedorListComponent, canActivate: [AuthGuard] },
    { path: 'edit-vendedor/:id', component: VendedorFormComponent, canActivate: [AuthGuard] },
    { path: 'novo-vendedor', component: VendedorFormComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/carros', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }