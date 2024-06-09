import { Pipe, PipeTransform } from '@angular/core';
import { Carro } from './produto';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Carro[], nomePesq: string): Carro [] {
    return listaProdutos.filter ( (produto:Carro) => {
      return produto.nome?.toLowerCase().includes(nomePesq.toLowerCase())
    })
  }
}
