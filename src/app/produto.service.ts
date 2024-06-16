import { Injectable } from '@angular/core';
import { Carro } from './produto';


@Injectable({
 providedIn: 'root'
})
export class ProdutoService {
 idGen = 6;
 listaCarros: Carro[] = [
];

 constructor() { }


 private generateId() {
   return this.idGen++;
 }


 listar(): Carro[] {
   return this.listaCarros;
 }
  inserir(produto: Carro) {
   produto.id = this.generateId();
   this.listaCarros.push(produto);
 }

 buscarPorId(id: number): Carro {
   const produto = this.listaCarros.find(produto => produto.id == id);
   return produto
     ? Object.assign({}, produto)
     : new Carro();
 }

 editar(id:number, produto: Carro) {
   const indice = this.getIndice(id);
   if(indice >=0){
     this.listaCarros[indice] = produto;
   }   
 }

 deletar(id?:number) {
   const indice = this.getIndice(id);
   if(indice >=0){
     this.listaCarros.splice(indice, 1);
   }
 }

 private getIndice(id?:number) {
   return this.listaCarros.findIndex(produto => produto.id==id);
 }

}