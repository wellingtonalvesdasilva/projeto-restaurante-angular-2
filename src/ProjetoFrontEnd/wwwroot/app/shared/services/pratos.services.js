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
var PratoService = (function () {
    function PratoService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:5000/api/prato';
    }
    PratoService.prototype.getPratos = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PratoService.prototype.getPrato = function (id) {
        return this.getPratos()
            .then(function (pratos) { return pratos.find(function (prato) { return prato.id === id; }); });
    };
    PratoService.prototype.save = function (prato) {
        if (prato.id)
            return this.put(prato);
        return this.post(prato);
    };
    PratoService.prototype.delete = function (prato) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.apiUrl + "/" + prato.id;
        return this.http
            .delete(url, new http_2.RequestOptions({
            headers: headers,
            body: ""
        }))
            .toPromise()
            .catch(this.handleError);
    };
    PratoService.prototype.post = function (prato) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.apiUrl, JSON.stringify(prato), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PratoService.prototype.put = function (prato) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.apiUrl + "/" + prato.id;
        return this.http
            .put(url, JSON.stringify(prato), { headers: headers })
            .toPromise()
            .then(function () { return prato; })
            .catch(this.handleError);
    };
    PratoService.prototype.handleError = function (error) {
        console.error('Ocorreu o seguinte erro', error);
        return Promise.reject(error.message || error);
    };
    PratoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PratoService);
    return PratoService;
}());
exports.PratoService = PratoService;
