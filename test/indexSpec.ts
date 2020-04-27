import { testObservable } from './../index';
import { Observable , of  } from "rxjs" 
import {map} from "rxjs/operators"
import {expect} from "chai"

describe("test observable test in typescript" , ()=>{

    it("should testobservable receives observable of 1 piped to 2", (done)=>{

        let ob$ = of(1) 
        ob$ = ob$.pipe(map(v=> v + 1 )) 
        let subsFn = (v : number)=>{

            expect(v).to.be.eq(2)
        }

        testObservable(ob$,subsFn,done)
    })
})