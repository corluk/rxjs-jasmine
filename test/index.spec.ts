import { testObservable } from '../index';
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

        testObservable(ob$,{onSubscribe:subsFn},done)
    })
    
    it("should testobservable receives error ", (done)=>{

        let ob$ = of(1) 
        ob$ = ob$.pipe(map(v=> {
                if(v ==1) throw new Error() 
                    return  v + 1 
                })) 
        let subsFn = (v : number)=>{

            expect(v).to.be.eq(2)
        }
  
        testObservable(ob$, {
            onSubscribe : subsFn,
            onError: (e) => {
            
                expect(e).not.to.be.null
 
            }
        },done )
    })    
        
    it("should testobservable receives error and complete ", (done)=>{

        let scoped = 1 
        let ob$ = of(1) 
        ob$ = ob$.pipe(map(v=> {
                  
                    return  v + 1 
                })) 
        let subsFn = (v : number)=>{

              
        }
  
        testObservable(ob$,  {
            onSubscribe : subsFn, 
            onComplete : ()=>{
                expect(scoped).to.be.eq(1)
            }
        },done)
    })  
    

})