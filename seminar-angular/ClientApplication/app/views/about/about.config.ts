
export function AboutConfiguration(
    $stateProvider: ng.ui.IStateProvider
) {
    $stateProvider
        .state('About', <ng.ui.IState>{
            url: '/',
            controller: 'AboutController',
            controllerAs: 'vm',
            templateUrl: '/templates/views/about/about.html'
        });
}
