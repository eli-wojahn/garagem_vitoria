import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from './produto';

const BASE_API = "http://localhost:3000/carros";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {

  constructor(private http:HttpClient) { }

  listar(): Observable<Carro[]> {
    return this.http.get<Carro[]>(BASE_API);
  }

  buscarPorId(id: number): Observable<Carro> {
    //const uri = BASE_API+"/"+id;
    const uri = `${BASE_API}/${id}`;
    return this.http.get<Carro>(uri);
  }

  inserir(produto:Carro): Observable<Carro> {
    return this.http.post<Carro>(BASE_API,produto,httpOptions);
  }

  editar(id: number, produto:Carro): Observable<Carro> {
    const uri = `${BASE_API}/${id}`;
    return this.http.put<Carro>(uri,produto,httpOptions);
  }

  deletar(id: number): Observable<Carro> {
    const uri = `${BASE_API}/${id}`;
    return this.http.delete<Carro>(uri);
  }
}
