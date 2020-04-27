"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testObservable = function (observable, subscribeFn, done) {
    observable.subscribe(subscribeFn, function (e) {
        console.debug(e);
        console.log("error occured " + e.message);
        done();
    }, function () {
        console.log("completed");
        done();
    });
};
