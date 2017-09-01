"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var restaurantes_service_1 = require('../shared/services/restaurantes.service');
var Subject_1 = require('rxjs/Subject');
var RestaurantesComponent = (function () {
    function RestaurantesComponent(router, restauranteService) {
        this.router = router;
        this.restauranteService = restauranteService;
        this.searchTerms = new Subject_1.Subject();
    }
    RestaurantesComponent.prototype.getRestaurantes = function () {
        var _this = this;
        this.restauranteService
            .getRestaurantes()
            .then(function (restaurantes) {
            return _this.restaurantes = restaurantes;
        })
            .catch(function (error) { return _this.error = error; });
    };
    RestaurantesComponent.prototype.add = function () {
        this.router.navigate(['restaurantes/create']);
    };
    RestaurantesComponent.prototype.remove = function (restaurante, event) {
        var _this = this;
        event.stopPropagation();
        this.restauranteService
            .delete(restaurante)
            .then(function (res) {
            _this.getRestaurantes();
        })
            .catch(function (error) { return _this.error = error; });
    };
    RestaurantesComponent.prototype.ngOnInit = function () {
        this.getRestaurantes();
    };
    RestaurantesComponent.prototype.edit = function (restaurante) {
        this.router.navigate(['restaurantes/edit', restaurante.id]);
    };
    RestaurantesComponent.prototype.search = function (term) {
        var _this = this;
        if (term == "")
            this.getRestaurantes();
        else
            this.restauranteService
                .getRestaurantePorNome(term)
                .then(function (restaurantes) {
                return _this.restaurantes = restaurantes;
            })
                .catch(function (error) { return _this.error = error; });
    };
    RestaurantesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-restaurant',
            templateUrl: 'restaurantes.component.html',
            styleUrls: ['restaurantes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, restaurantes_service_1.RestauranteService])
    ], RestaurantesComponent);
    return RestaurantesComponent;
}());
exports.RestaurantesComponent = RestaurantesComponent;
