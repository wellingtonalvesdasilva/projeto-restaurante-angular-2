import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Restaurante } from '../../shared/models/restaurante';
import { RequestOptions } from '@angular/http';

@Injectable()
export class RestauranteService {
    private apiUrl = 'http://localhost:5000/api/restaurante';

    constructor(private http: Http) { }

    getRestaurantes(): Promise<Restaurante[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json() as Restaurante[])
            .catch(this.handleError);
    }

    getRestaurantePorNome(term: string): Promise<Restaurante[]> {
        return this.http.get(this.apiUrl + '/pornome/' + term)
            .toPromise()
            .then(response => response.json() as Restaurante[])
            .catch(this.handleError);
    }

    getRestaurante(id: number): Promise<Restaurante> {
        return this.getRestaurantes()
            .then(restaurantes => restaurantes.find(restaurante => restaurante.id === id));
    }

    save(restaurante: Restaurante): Promise<Restaurante> {
        if (restaurante.id)
            return this.put(restaurante);
        return this.post(restaurante);
    }

    delete(restaurante: Restaurante): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.apiUrl}/${restaurante.id}`;
        return this.http
            //.delete(url, { headers: headers })
            .delete(url, new RequestOptions({
                headers: headers,
                body: ""
            }))
            .toPromise()
            .catch(this.handleError);
    }

    private post(restaurante: Restaurante): Promise<Restaurante> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.apiUrl, JSON.stringify(restaurante), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private put(restaurante: Restaurante): Promise<Restaurante> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.apiUrl}/${restaurante.id}`;
        return this.http
            .put(url, JSON.stringify(restaurante), { headers: headers })
            .toPromise()
            .then(() => restaurante)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu o seguinte erro', error);
        return Promise.reject(error.message || error);
    }
}
