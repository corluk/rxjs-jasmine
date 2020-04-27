const rx = require("rxjs")
const ops = require("rxjs/operators")
const testObservable = require("../js/index").testObservable
const expect = require("chai").expect
describe("test testobservable with js " , ()=>{


    it("should observable with map run on testobservable",(done)=>{

        let ob$ = rx.of(1)
         ob$=  ob$.pipe(ops.map((v,i) => v + 1 ))
        let subs  = (v) => {

            expect(v).to.be.eq(2)
            
        }
        testObservable(ob$,subs,done)


    })
})