import { Injectable } from '@angular/core';
import { Vendedor } from './vendedor';


@Injectable({
    providedIn: 'root'
})
export class VendedorService {
    idGen = 1;
    listaVendedores: Vendedor[] = [];

    constructor() { }

    private generateId() {
        return this.idGen++;
    }

    listar(): Vendedor[] {
        return this.listaVendedores;
    }
    inserir(vendedor: Vendedor) {
        vendedor.id = this.generateId();
        this.listaVendedores.push(vendedor);
    }

    buscarPorId(id: number): Vendedor {
        const vendedor = this.listaVendedores.find(v => v.id === id);
        return vendedor ? Object.assign({}, vendedor) : new Vendedor();
    }

    editar(id: number, vendedor: Vendedor) {
        const indice = this.getIndice(id);
        if (indice >= 0) {
            this.listaVendedores[indice] = vendedor;
        }
    }

    deletar(id: number) {
        const indice = this.getIndice(id);
        if (indice >= 0) {
            this.listaVendedores.splice(indice, 1);
        }
    }

    private getIndice(id: number) {
        return this.listaVendedores.findIndex(v => v.id === id);
    }
}
