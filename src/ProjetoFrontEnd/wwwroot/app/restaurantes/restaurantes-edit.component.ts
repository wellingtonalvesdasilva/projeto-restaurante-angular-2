import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Restaurante } from '../shared/models/restaurante';
import { RestauranteService } from '../shared/services/restaurantes.service';

@Component({
    moduleId: module.id,
    selector: 'my-restaurante-edit',
    templateUrl: 'restaurantes-edit.component.html',
    styleUrls: ['restaurantes-edit.component.css']
})
export class RestauranteEditComponent implements OnInit {
    @Input() restaurante: Restaurante;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;
    constructor(
        private restauranteService: RestauranteService,
        private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = + params['id'];
                this.navigated = true;
                this.restauranteService.getRestaurante(id)
                    .then(restaurante => this.restaurante = restaurante);
            } else {
                this.navigated = false;
                this.restaurante = new Restaurante();
            }
        });
    }
    save(): void {
        this.restauranteService
            .save(this.restaurante)
            .then(restaurante => {
                this.restaurante = restaurante;
                this.goBack(restaurante);
            })
            .catch(error => this.error = error);
    }
    goBack(savedRestaurante: Restaurante = null): void {
        window.history.back();
    }
}
