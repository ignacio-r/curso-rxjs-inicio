import { Observable, Observer } from 'rxjs'

const observer: Observer<string> = {
    next: (v) => console.log(v),
    error: (e) => console.warn(e),
    complete: () => console.info('complete!') 
}

const obs$ = new Observable<string>(subs => {
    subs.next('Hola')
    subs.next('Mundo')

    const a = undefined
    a.nombre = 'ignacio'
    subs.complete();
});

obs$.subscribe(
    observer
)