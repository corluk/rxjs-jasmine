 
import {Observable} from "rxjs"
interface DoneFn extends Function {
    (): void;

    /** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
    fail: (message?: Error | string) => void;
}
interface Events<T> {
    onError?:  (e:Error) => void ,
    onComplete? :  () =>  void 
    onSubscribe : (value:T) => void 
}
export const testObservable =    <T>(observable : Observable<T> , events:Events<T> ,done : DoneFn) => {

    observable.subscribe((value :T)=>{
        
        events.onSubscribe.call(null,value)
        done()

    },(e:Error)=> { 
         
        if(events?.onError) events.onError(e)

        
        done()
    },()=>{
            if(events?.onComplete) events.onComplete()
            done()
    })
}