import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Prato } from '../shared/models/prato';
import { Restaurante } from '../shared/models/restaurante';
import { RestauranteService } from '../shared/services/restaurantes.service';
import { PratoService } from '../shared/services/pratos.services';

@Component({
    moduleId: module.id,
    selector: 'my-prato-edit',
    templateUrl: 'pratos-edit.component.html',
    styleUrls: ['pratos-edit.component.css']
})
export class PratoEditComponent implements OnInit {
    restaurantes: Restaurante[];
    @Input() prato: Prato;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;

    constructor(
        private pratoService: PratoService,
        private restauranteService: RestauranteService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = + params['id'];
                this.navigated = true;
                this.pratoService.getPrato(id).then(prato => this.prato = prato);
            } else {
                this.navigated = false;
                this.prato = new Prato();
            }
            this.restauranteService.getRestaurantes().then(restaurantes => this.restaurantes = restaurantes);
        });
    }

    save(): void {
        this.pratoService
            .save(this.prato)
            .then(prato => {
                this.prato = prato;
                this.goBack(prato);
            })
            .catch(error => this.error = error);
    }

    goBack(savedPrato: Prato = null): void {
        window.history.back();
    }
}
