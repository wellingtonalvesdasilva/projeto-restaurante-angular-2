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
var prato_1 = require('../shared/models/prato');
var restaurantes_service_1 = require('../shared/services/restaurantes.service');
var pratos_services_1 = require('../shared/services/pratos.services');
var PratoEditComponent = (function () {
    function PratoEditComponent(pratoService, restauranteService, route) {
        this.pratoService = pratoService;
        this.restauranteService = restauranteService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    PratoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.pratoService.getPrato(id).then(function (prato) { return _this.prato = prato; });
            }
            else {
                _this.navigated = false;
                _this.prato = new prato_1.Prato();
            }
            _this.restauranteService.getRestaurantes().then(function (restaurantes) { return _this.restaurantes = restaurantes; });
        });
    };
    PratoEditComponent.prototype.save = function () {
        var _this = this;
        this.pratoService
            .save(this.prato)
            .then(function (prato) {
            _this.prato = prato;
            _this.goBack(prato);
        })
            .catch(function (error) { return _this.error = error; });
    };
    PratoEditComponent.prototype.goBack = function (savedPrato) {
        if (savedPrato === void 0) { savedPrato = null; }
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', prato_1.Prato)
    ], PratoEditComponent.prototype, "prato", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PratoEditComponent.prototype, "close", void 0);
    PratoEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-prato-edit',
            templateUrl: 'pratos-edit.component.html',
            styleUrls: ['pratos-edit.component.css']
        }), 
        __metadata('design:paramtypes', [pratos_services_1.PratoService, restaurantes_service_1.RestauranteService, router_1.ActivatedRoute])
    ], PratoEditComponent);
    return PratoEditComponent;
}());
exports.PratoEditComponent = PratoEditComponent;
