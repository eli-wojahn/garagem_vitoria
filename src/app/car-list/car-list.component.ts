import { Component, OnInit } from '@angular/core';
import { Carro } from '../produto';
import { ProdutoApiService } from '../produto-api.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  listaCarros: Carro[] = [];
  nomePesquisado = "";

  constructor(private produtoApiService: ProdutoApiService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.produtoApiService.listar().subscribe(
      (carros) => {
        this.listaCarros = carros;
      }
    );
  }
}
