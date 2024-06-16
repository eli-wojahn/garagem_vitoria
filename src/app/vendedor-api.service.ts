import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedor } from './vendedor'; // Certifique-se de que o caminho está correto

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
        const uri = `${BASE_API}/${id}`;
        return this.http.get<Vendedor>(uri);
    }

    inserir(vendedor: Vendedor): Observable<Vendedor> {
        return this.http.post<Vendedor>(BASE_API, vendedor, httpOptions);
    }

    editar(id: number, vendedor: Vendedor): Observable<Vendedor> {
        const uri = `${BASE_API}/${id}`;
        return this.http.put<Vendedor>(uri, vendedor, httpOptions);
    }

    deletar(id: number): Observable<Vendedor> {
        const uri = `${BASE_API}/${id}`;
        return this.http.delete<Vendedor>(uri);
    }
}
