
export function ContactConfiguration(
    $stateProvider: ng.ui.IStateProvider
) {
    $stateProvider
        .state('Contact', <ng.ui.IState>{
            url: '/',
            controller: 'ContactController',
            controllerAs: 'vm',
            templateUrl: '/templates/views/contact/contact.html'
        });
}
