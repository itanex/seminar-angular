import angular from 'angular';
import { ContactConfiguration } from './contact.config';
import { ContactController } from './contact.controller';

// Create the view.Contact Module
const module: ng.IModule = angular.module('view.contact', []);

// Define a Configuration for this module
module.config(ContactConfiguration);

// Establish the ContactController for this module
module.controller('ContactController', ContactController);
