import angular from 'angular';
import { HomeConfiguration } from './home.config';
import { HomeController } from './home.controller';

// Create the view.home Module
const module: ng.IModule = angular.module('view.home', []);

// Define a Configuration for this module
module.config(HomeConfiguration);

// Establish the HomeController for this module
module.controller('HomeController', HomeController);
