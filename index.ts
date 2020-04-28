 
import {Observable} from "rxjs"
interface DoneFn extends Function {
    (): void;

    /** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
    fail: (message?: Error | string) => void;
}
interface Events {
    onError?:  (e:Error) => void ,
    onComplete? :  () =>  void 

}
export const testObservable =    <T>(observable : Observable<T> , subscribeFn :  (value: T) => void ,done : DoneFn , events?:Events  ) => {

    observable.subscribe(subscribeFn,(e:Error)=> { 
         
        if(events?.onError) events.onError(e)

        
        done()
    },()=>{
            if(events?.onComplete) events.onComplete()
            done()
    })
}