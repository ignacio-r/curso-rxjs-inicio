import { Observable, Observer } from 'rxjs'

const observer: Observer<any> = {
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

    setTimeout(() => {
      suscriber.complete()
    } ,2500)
    
    return () => {
      clearInterval(interval)
      console.log('intervalo destruido');
    }
})

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2)
subs1.add(subs3)

setTimeout(
    () => {
        subs1.unsubscribe()
        

        console.log('completado timeout');
    }, 3000
)
