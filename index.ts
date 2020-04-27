 
import {Observable} from "rxjs"
 
export const testObservable =    <T>(observable : Observable<T> , subscribeFn :  (value: T) => void ,done : () => void ) => {

    observable.subscribe(subscribeFn,(e)=> { 
        console.debug(e)

        console.log(`error occured ${e.message}`)
        done()
    },()=>{
            console.log("completed") 
            done()
    })
}