angular.module('app.main').controller('AppCntl', function (SIGN_IN_DLG_PATH, $scope, $location, $window, appContext, oaspSecurityService, globalSpinner) {
    'use strict';
    $scope.currentUser = appContext.getCurrentUser();
    $scope.logOff = function () {
        var goToSignInDialogFullyReloadingApp = function () {
            $location.path(SIGN_IN_DLG_PATH);
            $window.location.href = $location.absUrl();
            $window.location.reload();
        };
        globalSpinner.decorateCallOfFunctionReturningPromise(function () {
            return oaspSecurityService.logOff();
        }).then(function () {
            goToSignInDialogFullyReloadingApp();
        });
    };
});