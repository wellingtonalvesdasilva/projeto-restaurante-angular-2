"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var restaurantes_component_1 = require('./restaurantes/restaurantes.component');
var restaurantes_edit_component_1 = require('./restaurantes/restaurantes-edit.component');
var pratos_component_1 = require('./pratos/pratos.component');
var pratos_edit_component_1 = require('./pratos/pratos-edit.component');
var appRoutes = [
    {
        path: 'restaurantes',
        component: restaurantes_component_1.RestaurantesComponent
    },
    {
        path: 'restaurantes/edit/:id',
        component: restaurantes_edit_component_1.RestauranteEditComponent
    },
    {
        path: 'restaurantes/create',
        component: restaurantes_edit_component_1.RestauranteEditComponent
    },
    {
        path: 'pratos',
        component: pratos_component_1.PratosComponent
    },
    {
        path: 'pratos/edit/:id',
        component: pratos_edit_component_1.PratoEditComponent
    },
    {
        path: 'pratos/create',
        component: pratos_edit_component_1.PratoEditComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
