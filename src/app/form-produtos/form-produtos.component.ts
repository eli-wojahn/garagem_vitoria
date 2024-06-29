import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { VendedorApiService } from '../vendedor-api.service';
import { Vendedor } from '../vendedor';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  carro = new Carro();
  vendedores: Vendedor[] = [];
  id?: number;
  botaoAcao = "Cadastrar";

  constructor(
    private produtoApiService: ProdutoApiService,
    private vendedorApiService: VendedorApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.botaoAcao = "Editar";
      this.produtoApiService.buscarPorId(this.id).subscribe(
        (carro) => this.carro = carro
      );
    }
  }

  ngOnInit(): void {
    this.vendedorApiService.listar().subscribe(
      (vendedores) => this.vendedores = vendedores
    );
  }

  salvar() {
    if (!this.carro.marca || !this.carro.nome || !this.carro.quilometragem || !this.carro.ano || !this.carro.preco || !this.carro.dataValidade || !this.carro.imagemUrl || !this.carro.vendedorId) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (this.id) {
      this.produtoApiService.editar(this.id, this.carro).subscribe(
        () => {
          alert(`Produto ${this.carro.nome} editado com sucesso!`);
          this.router.navigate(['/tabela']);
        }
      );
    } else {
      this.produtoApiService.inserir(this.carro).subscribe(
        () => {
          alert(`Produto ${this.carro.nome} cadastrado com sucesso!`);
          this.router.navigate(['/tabela']);
        }
      );
    }
  }

  voltar() {
    this.router.navigate(['/tabela']);
  }
}
