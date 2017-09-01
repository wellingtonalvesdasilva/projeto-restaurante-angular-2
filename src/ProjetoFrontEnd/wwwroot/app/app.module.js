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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var menu_component_1 = require('./menu/menu.component');
var home_component_1 = require('./home/home.component');
var restaurantes_component_1 = require('./restaurantes/restaurantes.component');
var restaurantes_edit_component_1 = require('./restaurantes/restaurantes-edit.component');
var pratos_component_1 = require('./pratos/pratos.component');
var pratos_edit_component_1 = require('./pratos/pratos-edit.component');
var restaurantes_service_1 = require('./shared/services/restaurantes.service');
var pratos_services_1 = require('./shared/services/pratos.services');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                menu_component_1.MenuComponent,
                home_component_1.HomeComponent,
                restaurantes_component_1.RestaurantesComponent,
                restaurantes_edit_component_1.RestauranteEditComponent,
                pratos_component_1.PratosComponent,
                pratos_edit_component_1.PratoEditComponent
            ],
            providers: [
                restaurantes_service_1.RestauranteService,
                pratos_services_1.PratoService
            ],
            bootstrap: [
                menu_component_1.MenuComponent,
                home_component_1.HomeComponent,
                restaurantes_component_1.RestaurantesComponent,
                restaurantes_edit_component_1.RestauranteEditComponent,
                pratos_component_1.PratosComponent,
                pratos_edit_component_1.PratoEditComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
