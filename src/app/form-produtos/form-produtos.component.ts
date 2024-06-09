import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  carro = new Carro();
  id?:number;
  botaoAcao = "Cadastrar";
  
  constructor(
    private produtoApiService: ProdutoApiService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.botaoAcao = "Editar";
      this.produtoApiService.buscarPorId(this.id).subscribe(
        (carro) => this.carro = carro
      );
    }
  }
  
  salvar() {
    if(this.id) {
      this.produtoApiService.editar(this.id, this.carro).subscribe(
        (car) => {
          alert(`Produto ${this.carro} editado com sucesso!`);
          this.carro = car;
        } 
      );
    }
    else {
      this.produtoApiService.inserir(this.carro).subscribe(
        (car) => {
          alert(`Produto ${this.carro.nome} cadastrado com sucesso!`);
          this.carro = new Carro();
        }
      );
    }    
  }

  voltar() {
    this.router.navigate(['/tabela']);
  }
}
