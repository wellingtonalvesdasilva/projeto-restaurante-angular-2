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
var pratos_services_1 = require('../shared/services/pratos.services');
var PratosComponent = (function () {
    function PratosComponent(router, pratoService) {
        this.router = router;
        this.pratoService = pratoService;
    }
    PratosComponent.prototype.getPratos = function () {
        var _this = this;
        this.pratoService
            .getPratos()
            .then(function (pratos) {
            return _this.pratos = pratos;
        })
            .catch(function (error) { return _this.error = error; });
    };
    PratosComponent.prototype.add = function () {
        this.router.navigate(['pratos/create']);
    };
    PratosComponent.prototype.remove = function (prato, event) {
        var _this = this;
        event.stopPropagation();
        this.pratoService
            .delete(prato)
            .then(function (res) {
            _this.getPratos();
        })
            .catch(function (error) { return _this.error = error; });
    };
    PratosComponent.prototype.ngOnInit = function () {
        this.getPratos();
    };
    PratosComponent.prototype.edit = function (prato) {
        this.router.navigate(['pratos/edit', prato.id]);
    };
    PratosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pratos',
            templateUrl: 'pratos.component.html',
            styleUrls: ['pratos.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, pratos_services_1.PratoService])
    ], PratosComponent);
    return PratosComponent;
}());
exports.PratosComponent = PratosComponent;
