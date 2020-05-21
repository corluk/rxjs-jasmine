 
import {Observable, observable} from "rxjs"
import { Done } from "mocha"

 
interface Events<T> {
    onError?:  (e:Error) => void ,
    onComplete? :  () =>  void 
    onSubscribe : (value:T) => void 
}

class DoneManager {
     isCalled = false 
    done : Done   
    constructor(done:Done) {
            this.done = done
    }
    public callDone ( ){

        if(!this.isCalled){
            this.done.call(null)
            this.isCalled = true 
        }
    }
}
 

export const testObservable =    <T>(observable : Observable<T> , events:Events<T> ,done : Done) => {
    let doneManager = new DoneManager(done)
    observable.subscribe((value :T)=>{
        
        events.onSubscribe.call(null,value)
        doneManager.callDone()

    },(e:Error)=> { 
         
        if(events?.onError) events.onError(e)

        
        doneManager.callDone()

    },()=>{
            if(events?.onComplete) events.onComplete()
            doneManager.callDone()

    })
}


export const  sink = async <E>(observable  : Observable<E>) : Promise<E[]> => {
    let ref : E[] = []
   
 
        return new Promise((resolve,reject)=>{
            observable.subscribe(result =>{
                
                ref.push(result)}, err  => console.debug(`error ${err.message }`), ()=> resolve(ref) )
        })

        
    
        
        
}