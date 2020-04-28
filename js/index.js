"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testObservable = function (observable, subscribeFn, done, events) {
    observable.subscribe(subscribeFn, function (e) {
        if (events === null || events === void 0 ? void 0 : events.onError)
            events.onError(e);
        done();
    }, function () {
        if (events === null || events === void 0 ? void 0 : events.onComplete)
            events.onComplete();
        done();
    });
};
