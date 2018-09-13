import angular from 'angular';
import { PrivacyConfiguration } from './privacy.config';
import { PrivacyController } from './privacy.controller';

// Create the view.home Module
let module: ng.IModule = angular.module('view.privacy', []);

// Define a Configuration for this module
module.config(PrivacyConfiguration);

// Establish the HomeController for this module
module.controller('PrivacyController', PrivacyController);
