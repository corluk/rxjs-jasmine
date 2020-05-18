"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoneManager = /** @class */ (function () {
    function DoneManager(done) {
        this.isCalled = false;
        this.done = done;
    }
    DoneManager.prototype.callDone = function () {
        if (!this.isCalled) {
            this.done.call(null);
            this.isCalled = true;
        }
    };
    return DoneManager;
}());
exports.testObservable = function (observable, events, done) {
    var doneManager = new DoneManager(done);
    observable.subscribe(function (value) {
        events.onSubscribe.call(null, value);
        doneManager.callDone();
    }, function (e) {
        if (events === null || events === void 0 ? void 0 : events.onError)
            events.onError(e);
        doneManager.callDone();
    }, function () {
        if (events === null || events === void 0 ? void 0 : events.onComplete)
            events.onComplete();
        doneManager.callDone();
    });
};
