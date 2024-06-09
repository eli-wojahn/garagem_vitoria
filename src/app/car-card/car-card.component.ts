import { Component } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  carros = [
    { 
      id: "1",
      marca: "Chevrolet",
      nome: "Onix",
      preco: 76000,
      ano: 2022,
      quilometragem: 29000,
      dataValidade: "2023-10-01",
      imagemCarro: "https://www.veiculoaqui.com.br/fotopop/veiculoaqui20240209211735053_365915865.jpg"
    },
    { 
      id: "2",
      marca: "Ford",
      nome: "Ka",
      preco: 55000,
      ano: 2019,
      quilometragem: 65000,
      dataValidade: "2024-11-12",
      imagemCarro: "https://www.veiculoaqui.com.br/fotopop/veiculoaqui20231028102811602_183966531.jpg"
    },
    {
      id: "3",
      marca: "Toyota",
      nome: "Etios",
      preco: 69000,
      ano: 2021,
      quilometragem: 25000,
      dataValidade: "2024-01-09",
      imagemCarro: "https://www.veiculoaqui.com.br/fotopop/veiculoaqui20240217210530045_5353321.jpg"
    },
    {
      id: "4",
      marca: "Ford",
      nome: "Ranger",
      preco: 120000,
      ano: 2022,
      quilometragem: 4000,
      dataValidade: "2023-05-15",
      imagemCarro: "https://www.veiculoaqui.com.br/fotopop/veiculoaqui20240215110448628_358735280.jpg"
    },
    {
      id: "5",
      marca: "Hyundai",
      nome: "Hb20",
      preco: 82000,
      ano: 2023,
      quilometragem: 16000,
      dataValidade: "2023-06-27",
      imagemCarro: "https://www.veiculoaqui.com.br/fotopop/veiculoaqui20231101111042632_43431537.jpg"
    },
    {
      "id": "6",
      marca: "Mistubishi",
      nome: "L200",
      preco: 43000,
      ano: 2003,
      quilometragem: 123000,
      dataValidade: "2024-04-25",
      imagemCarro: "https://www.veiculoaqui.com.br/fotopop/veiculoaqui20240215110448628_358735280.jpg"
    },
    {
      id: "7",
      marca: "Tesla",
      nome: "T1",
      quilometragem: "2000",
      ano: "2024",
      preco: 254000,
      dataValidade: "2024-04-26",
      imagemCarro: "https://www.veiculoaqui.com.br/fotopop/veiculoaqui20240215110448628_358735280.jpg"
    },
    {
      id: "8",
      marca: "Fiat",
      nome: "Palio",
      quilometragem: "145000",
      ano: "2001",
      preco: 13000,
      dataValidade: "2024-04-03",
      imagemCarro: "https://www.veiculoaqui.com.br/fotopop/veiculoaqui20240115164225862_637166384.jpg"
    }
  ];
}