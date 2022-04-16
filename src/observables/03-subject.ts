import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<any> = {
    next: (v) => console.log(v),
    error: (e) => console.warn(e),
    complete: () => console.info('complete!')
}

const intervalo$ = new Observable<number>(subs => {
    const intervalId =setInterval(() => subs.next(Math.random()), 3000)

    return () => { 
            clearInterval(intervalId)
            console.log('intervalo destruido');
    }
                
})

// - Multicasting
// - También es un observer
// - Next, error y compelte
const subject$ = new Subject()
const suscription = intervalo$.subscribe(subject$)

// const subs1 = intervalo$.subscribe(rnd => console.log('s1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('s2', rnd));

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(()=>{
    subject$.next(10)
    subject$.complete()
    suscription.unsubscribe()
},3500)

