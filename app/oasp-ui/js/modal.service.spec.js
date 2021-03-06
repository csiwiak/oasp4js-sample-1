describe('Module: \'oasp-ui\', service: \'$modal\'', function () {
    'use strict';

    var deferredOpening, openedPromise, globalSpinner;

    beforeEach(function () {
        module('ui.bootstrap', function ($provide) {
            $provide.value('$modal', {
                open: function () {
                    return {
                        opened: openedPromise
                    };
                }
            });
        });
        module('oasp-ui');
    });

    /*jslint nomen: true */
    beforeEach(inject(function ($q, _globalSpinner_) {
        deferredOpening = $q.defer();
        openedPromise = deferredOpening.promise;
        globalSpinner = _globalSpinner_;
        spyOn(globalSpinner, 'show').andCallThrough();
        spyOn(globalSpinner, 'hide').andCallThrough();
    }));
    /*jslint nomen: false */

    it('shows a spinner while opening and hides it on success', inject(function ($modal, $rootScope) {
        // when
        $modal.open();
        // then
        expect(globalSpinner.show).toHaveBeenCalled();
        // and when
        deferredOpening.resolve();
        $rootScope.$digest();
        // then
        expect(globalSpinner.hide).toHaveBeenCalled();
    }));

    it('shows a spinner while opening and hides it on failure', inject(function ($modal, $rootScope) {
        // when
        $modal.open();
        // then
        expect(globalSpinner.show).toHaveBeenCalled();
        // and when
        deferredOpening.reject();
        $rootScope.$digest();
        // then
        expect(globalSpinner.hide).toHaveBeenCalled();
    }));
});
