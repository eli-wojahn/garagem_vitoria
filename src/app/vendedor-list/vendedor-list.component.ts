import { Component, OnInit } from '@angular/core';
import { VendedorApiService } from '../vendedor-api.service';
import { Vendedor } from '../vendedor';

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

  confirmarDeletar(id?: number) {
    if (confirm('Tem certeza que deseja deletar este vendedor?')) {
      this.deletar(id);
    }
  }

  deletar(id?: number) {
    this.vendedorApiService.deletar(id!).subscribe(
      () => {
        alert('Vendedor deletado com sucesso!');
        this.listar();
      }
    );
  }
}
