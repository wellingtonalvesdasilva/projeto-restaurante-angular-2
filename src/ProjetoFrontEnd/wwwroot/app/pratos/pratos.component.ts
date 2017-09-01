import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prato } from '../shared/models/prato';
import { PratoService } from '../shared/services/pratos.services';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'my-pratos',
    templateUrl: 'pratos.component.html',
    styleUrls: ['pratos.component.css']
})

export class PratosComponent implements OnInit {
    pratos: Prato[];
    error: any;

    constructor(
        private router: Router,
        private pratoService: PratoService)
    { }

    getPratos(): void {
        this.pratoService
            .getPratos()
            .then(pratos =>
                this.pratos = pratos
            )
            .catch(error => this.error = error);
    }

    add(): void {
        this.router.navigate(['pratos/create']);
    }

    remove(prato: Prato, event: any): void {
        event.stopPropagation();
        this.pratoService
            .delete(prato)
            .then(res => {
                this.getPratos()
            })
            .catch(error => this.error = error);
    }

    ngOnInit(): void {
        this.getPratos();
    }

    edit(prato: Prato): void {
        this.router.navigate(['pratos/edit', prato.id]);
    }
}