"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testObservable = function (observable, events, done) {
    observable.subscribe(function (value) {
        events.onSubscribe.call(null, value);
        done();
    }, function (e) {
        if (events === null || events === void 0 ? void 0 : events.onError)
            events.onError(e);
        done();
    }, function () {
        if (events === null || events === void 0 ? void 0 : events.onComplete)
            events.onComplete();
        done();
    });
};
