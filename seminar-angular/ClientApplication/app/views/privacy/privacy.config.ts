
export function PrivacyConfiguration(
    $stateProvider: ng.ui.IStateProvider
) {
    $stateProvider
        .state('Privacy', <ng.ui.IState>{
            url: '/',
            controller: 'PrivacyController',
            controllerAs: 'vm',
            templateUrl: '/templates/views/privacy/privacy.html'
        });
}
