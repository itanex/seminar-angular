import angular from 'angular';

import './home/home';
import './about/about';
import './contact/contact';
import './privacy/privacy';

const module: ng.IModule = angular.module('app.view', [
    'view.home',
    'view.contact',
    'view.about',
    'view.privacy'
]);
