import { Component, Input, OnInit } from '@angular/core';
import { Carro } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { VendedorApiService } from '../vendedor-api.service';
import { Vendedor } from '../vendedor';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  @Input() title= "Tabela de Carros";
  listaCarros: Carro[] = [];
  vendedores: Vendedor[] = [];
  nomePesquisado= "";

  constructor(
    private produtoApiService: ProdutoApiService,
    private vendedorApiService: VendedorApiService
  ) { }

  ngOnInit(): void {
    this.listar();
    this.vendedorApiService.listar().subscribe(
      (vendedores) => this.vendedores = vendedores
    );
  }

  listar() {
    this.produtoApiService.listar().subscribe(
      (carros) => {
        this.listaCarros = carros;
      }
    );
  }

  confirmarDeletar(id?: number) {
    if (confirm('Tem certeza que deseja deletar este carro?')) {
      this.deletar(id);
    }
  }

  deletar(id?: number) {
    this.produtoApiService.deletar(id!).subscribe(
      () => {
        alert(`Produto deletado com sucesso!`);   
        this.listar();     
      }
    );
  }

  getVendedorNome(vendedorId: number): string {
    const vendedor = this.vendedores.find(v => v.id === vendedorId);
    return vendedor ? vendedor.nome : 'Sem vendedor responsável';
  }
}
