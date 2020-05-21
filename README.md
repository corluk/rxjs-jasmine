# rxjs-utils 
Simple function for easier rxjs coding. 


# For test : 
testObservable ( obs$, {
onSubscribe: (value: T) => void ,
onError : (err) => void ,
onComplete : () => void } , done)

# Rxjs merges with Promises so that we can use await 
sink<T>(obs) => Array<T>
