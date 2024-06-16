import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../vendedor';
import { VendedorApiService } from '../vendedor-api.service';

@Component({
    selector: 'app-vendedor-list',
    templateUrl: './vendedor-list.component.html',
    styleUrls: ['./vendedor-list.component.css']
})
export class VendedorListComponent implements OnInit {
    listaVendedores: Vendedor[] = [];
    nomePesquisado = "";

    constructor(private vendedorApiService: VendedorApiService) { }

    ngOnInit(): void {
        this.listar();
    }

    listar() {
        this.vendedorApiService.listar().subscribe(
            (vendedores) => {
                this.listaVendedores = vendedores;
            }
        );
    }

    deletar(id: number) {
        this.vendedorApiService.deletar(id).subscribe(
            () => {
                alert('Vendedor deletado com sucesso!');
                this.listar();
            }
        );
    }
}
