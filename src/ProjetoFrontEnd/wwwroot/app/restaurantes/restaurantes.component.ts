import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from '../shared/models/restaurante';
import { RestauranteService } from '../shared/services/restaurantes.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'my-restaurant',
    templateUrl: 'restaurantes.component.html',
    styleUrls: ['restaurantes.component.css']
})

export class RestaurantesComponent implements OnInit {
    restaurantes: Restaurante[];
    private searchTerms = new Subject<string>();

    error: any;

    constructor(
        private router: Router,
        private restauranteService: RestauranteService)
    { }

    getRestaurantes(): void {
        this.restauranteService
            .getRestaurantes()
            .then(restaurantes =>
                this.restaurantes = restaurantes
            )
            .catch(error => this.error = error);
    }
    add(): void {
        this.router.navigate(['restaurantes/create']);
    }
    remove(restaurante: Restaurante, event: any): void {
        event.stopPropagation();
        this.restauranteService
            .delete(restaurante)
            .then(res => {
               this.getRestaurantes()
            })
            .catch(error => this.error = error);
    }
    ngOnInit(): void {
        this.getRestaurantes();
    }
    edit(restaurante: Restaurante): void {
        this.router.navigate(['restaurantes/edit', restaurante.id]);
    }

    search(term: string): void {
        if (term == "")
            this.getRestaurantes();
        else
            this.restauranteService
                .getRestaurantePorNome(term)
                .then(restaurantes =>
                    this.restaurantes = restaurantes
                )
                .catch(error => this.error = error);
    }
}