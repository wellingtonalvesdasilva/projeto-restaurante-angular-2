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
var restaurante_1 = require('../shared/models/restaurante');
var restaurantes_service_1 = require('../shared/services/restaurantes.service');
var RestauranteEditComponent = (function () {
    function RestauranteEditComponent(restauranteService, route) {
        this.restauranteService = restauranteService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    RestauranteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.restauranteService.getRestaurante(id)
                    .then(function (restaurante) { return _this.restaurante = restaurante; });
            }
            else {
                _this.navigated = false;
                _this.restaurante = new restaurante_1.Restaurante();
            }
        });
    };
    RestauranteEditComponent.prototype.save = function () {
        var _this = this;
        this.restauranteService
            .save(this.restaurante)
            .then(function (restaurante) {
            _this.restaurante = restaurante;
            _this.goBack(restaurante);
        })
            .catch(function (error) { return _this.error = error; });
    };
    RestauranteEditComponent.prototype.goBack = function (savedRestaurante) {
        if (savedRestaurante === void 0) { savedRestaurante = null; }
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', restaurante_1.Restaurante)
    ], RestauranteEditComponent.prototype, "restaurante", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RestauranteEditComponent.prototype, "close", void 0);
    RestauranteEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-restaurante-edit',
            templateUrl: 'restaurantes-edit.component.html',
            styleUrls: ['restaurantes-edit.component.css']
        }), 
        __metadata('design:paramtypes', [restaurantes_service_1.RestauranteService, router_1.ActivatedRoute])
    ], RestauranteEditComponent);
    return RestauranteEditComponent;
}());
exports.RestauranteEditComponent = RestauranteEditComponent;
