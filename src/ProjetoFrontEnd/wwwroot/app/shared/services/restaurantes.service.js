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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var http_2 = require('@angular/http');
var RestauranteService = (function () {
    function RestauranteService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:5000/api/restaurante';
    }
    RestauranteService.prototype.getRestaurantes = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestauranteService.prototype.getRestaurantePorNome = function (term) {
        return this.http.get(this.apiUrl + '/pornome/' + term)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestauranteService.prototype.getRestaurante = function (id) {
        return this.getRestaurantes()
            .then(function (restaurantes) { return restaurantes.find(function (restaurante) { return restaurante.id === id; }); });
    };
    RestauranteService.prototype.save = function (restaurante) {
        if (restaurante.id)
            return this.put(restaurante);
        return this.post(restaurante);
    };
    RestauranteService.prototype.delete = function (restaurante) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.apiUrl + "/" + restaurante.id;
        return this.http
            .delete(url, new http_2.RequestOptions({
            headers: headers,
            body: ""
        }))
            .toPromise()
            .catch(this.handleError);
    };
    RestauranteService.prototype.post = function (restaurante) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.apiUrl, JSON.stringify(restaurante), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RestauranteService.prototype.put = function (restaurante) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.apiUrl + "/" + restaurante.id;
        return this.http
            .put(url, JSON.stringify(restaurante), { headers: headers })
            .toPromise()
            .then(function () { return restaurante; })
            .catch(this.handleError);
    };
    RestauranteService.prototype.handleError = function (error) {
        console.error('Ocorreu o seguinte erro', error);
        return Promise.reject(error.message || error);
    };
    RestauranteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestauranteService);
    return RestauranteService;
}());
exports.RestauranteService = RestauranteService;
