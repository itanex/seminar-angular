import angular from 'angular';
import { AboutConfiguration } from './about.config';
import { AboutController } from './about.controller';

// Create the view.home Module
const module: ng.IModule = angular.module('view.about', []);

// Define a Configuration for this module
module.config(AboutConfiguration);

// Establish the HomeController for this module
module.controller('AboutController', AboutController);
