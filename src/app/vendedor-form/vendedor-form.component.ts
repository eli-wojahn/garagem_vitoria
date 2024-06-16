import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendedor } from '../vendedor'; // Certifique-se de importar o tipo Vendedor
import { VendedorApiService } from '../vendedor-api.service'; // Certifique-se de importar o serviço correto

@Component({
    selector: 'app-vendedor-form',
    templateUrl: './vendedor-form.component.html',
    styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent {
    vendedor = new Vendedor();
    id?: number;
    botaoAcao = 'Cadastrar';

    constructor(
        private vendedorApiService: VendedorApiService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.id = this.route.snapshot.params['id'];
        if (this.id) {
            this.botaoAcao = 'Editar';
            this.vendedorApiService.buscarPorId(this.id).subscribe(
                (vendedor) => this.vendedor = vendedor
            );
        }
    }

    salvar() {
        if (this.id) {
            this.vendedorApiService.editar(this.id, this.vendedor).subscribe(
                () => {
                    alert('Vendedor editado com sucesso!');
                    this.router.navigate(['/vendedores']);
                }
            );
        } else {
            this.vendedorApiService.inserir(this.vendedor).subscribe(
                () => {
                    alert('Vendedor cadastrado com sucesso!');
                    this.router.navigate(['/vendedores']);
                }
            );
        }
    }

    voltar() {
        this.router.navigate(['/vendedores']);
    }
}
