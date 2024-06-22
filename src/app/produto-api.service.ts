import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from './produto';

const BASE_API = "http://localhost:3000/carros";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Carro[]> {
    return this.http.get<Carro[]>(BASE_API);
  }

  buscarPorId(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${BASE_API}/${id}`);
  }

  inserir(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(BASE_API, carro, httpOptions);
  }

  editar(id: number, carro: Carro): Observable<Carro> {
    return this.http.put<Carro>(`${BASE_API}/${id}`, carro, httpOptions);
  }

  deletar(id: number): Observable<Carro> {
    return this.http.delete<Carro>(`${BASE_API}/${id}`);
  }
}
