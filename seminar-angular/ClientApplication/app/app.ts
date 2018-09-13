import angular from 'angular';

import './views/views';
import { AppConfiguration } from "./app.config";

const module: ng.IModule = angular.module('app', [
    /* Third Party Modules */
    'ngResource',
    'ui.router',

    /* Application Modules */
    'app.view'
]);

module.config(AppConfiguration)