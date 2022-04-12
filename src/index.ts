import { Observable, Observer } from 'rxjs'

const observer: Observer<string> = {
    next: (v) => console.log(v),
    error: (e) => console.warn(e),
    complete: () => console.info('complete!') 
}

const intervalo$ = new Observable<number>( suscriber => {
    let i = 0

    const interval = setInterval(()=>{
        i++;
        suscriber.next(i)
        console.log(i);
        
    },1000)
    
    return () => {
      clearInterval(interval)
      console.log('intervalo destruido');
      
    }
})

const subs1 = intervalo$.subscribe();
const subs2 = intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

setTimeout(
    () => {
        subs1.unsubscribe()
        subs2.unsubscribe()
        subs3.unsubscribe()

    }, 3000
)
