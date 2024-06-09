import { Injectable } from '@angular/core';
import { Carro } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  idGen = 6;
  listaProdutos: Carro[] = [
    { id: 1, nome:"Produto 1", preco: 100, marca: "Marca 1", dataValidade: new Date()},
    { id: 2, nome:"Produto 2", preco: 200, marca: "Marca 1", dataValidade: new Date()},
    { id: 3, nome:"Produto 3", preco: 300, marca: "Marca 1", dataValidade: new Date()},
    { id: 4, nome:"Produto 4", preco: 400, marca: "Marca 2", dataValidade: new Date()},
    { id: 5, nome:"Produto 5", preco: 500, marca: "Marca 2", dataValidade: new Date()},
  ];

  constructor() { }

  private generateId() {
    return this.idGen++;
  }

  listar(): Carro[] {
    return this.listaProdutos;
  }
  
  inserir(produto: Carro) {
    produto.id = this.generateId();
    this.listaProdutos.push(produto);
  }

  buscarPorId(id: number): Carro {
    const produto = this.listaProdutos.find(produto => produto.id == id);
    return produto
      ? Object.assign({}, produto)
      : new Carro();
  }

  editar(id:number, produto: Carro) {
    const indice = this.getIndice(id);
    if(indice >=0){
      this.listaProdutos[indice] = produto;
    }    
  }

  deletar(id?:number) {
    const indice = this.getIndice(id);
    if(indice >=0){
      this.listaProdutos.splice(indice, 1);
    }
  }

  private getIndice(id?:number) {
    return this.listaProdutos.findIndex(produto => produto.id==id);
  }

}
