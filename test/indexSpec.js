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
        testObservable(ob$,{onSubscribe:subs},done)


    })
    it("should testobservable receives error ", (done)=>{

        let ob$ = rx.of(1) 
        ob$ = ob$.pipe(ops.map(v=> {
                if(v ==1) throw new Error() 
                    return  v + 1 
                })) 
        let subsFn = (v )=>{

            expect(v).to.be.eq(2)
        }
     testObservable(ob$, {
            onSubscribe : subsFn,
            onError: (e) => {
            
                expect(e).not.to.be.null
 
            }
        },done) 
    })    
        
    it("should testobservable receives error and complete ", (done)=>{

        let scoped = 1 
        let ob$ = rx.of(1) 
        ob$ = ob$.pipe(ops.map(v=> {
                  
                    return  v + 1 
                })) 
        let subsFn = (v )=>{

              
        }
  
        testObservable(ob$, {
             onSubscribe : subsFn , 
            onComplete : ()=>{
                expect(scoped).to.be.eq(1)
            }
        },done )
    })  
})