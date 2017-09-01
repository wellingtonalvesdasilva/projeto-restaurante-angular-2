import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Prato } from '../../shared/models/prato';
import { RequestOptions } from '@angular/http';

@Injectable()
export class PratoService {
    private apiUrl = 'http://localhost:5000/api/prato';

    constructor(private http: Http) { }

    getPratos(): Promise<Prato[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json() as Prato[])
            .catch(this.handleError);
    }

    getPrato(id: number): Promise<Prato> {
        return this.getPratos()
            .then(pratos => pratos.find(prato => prato.id === id));
    }

    save(prato: Prato): Promise<Prato> {
        if (prato.id)
            return this.put(prato);
        return this.post(prato);
    }

    delete(prato: Prato): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.apiUrl}/${prato.id}`;
        return this.http
            .delete(url, new RequestOptions({
                headers: headers,
                body: ""
            }))
            .toPromise()
            .catch(this.handleError);
    }

    private post(prato: Prato): Promise<Prato> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.apiUrl, JSON.stringify(prato), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private put(prato: Prato): Promise<Prato> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.apiUrl}/${prato.id}`;
        return this.http
            .put(url, JSON.stringify(prato), { headers: headers })
            .toPromise()
            .then(() => prato)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu o seguinte erro', error);
        return Promise.reject(error.message || error);
    }
}
