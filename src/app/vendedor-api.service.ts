import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedor } from './vendedor';

const BASE_API = "http://localhost:3000/vendedores";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class VendedorApiService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(BASE_API);
  }

  buscarPorId(id: number): Observable<Vendedor> {
    return this.http.get<Vendedor>(`${BASE_API}/${id}`);
  }

  inserir(vendedor: Vendedor): Observable<Vendedor> {
    const { id, ...vendedorSemId } = vendedor;  // Remove o campo 'id'
    return this.http.post<Vendedor>(BASE_API, vendedorSemId, httpOptions);
  }

  editar(id: number, vendedor: Vendedor): Observable<Vendedor> {
    return this.http.put<Vendedor>(`${BASE_API}/${id}`, vendedor, httpOptions);
  }

  deletar(id: number): Observable<Vendedor> {
    return this.http.delete<Vendedor>(`${BASE_API}/${id}`);
  }
}
