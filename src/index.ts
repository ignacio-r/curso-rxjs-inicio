import { Observable } from 'rxjs'

const obs$ = new Observable<string>(subs => {
    subs.next('Hola')
    subs.next('Mundo')
    subs.complete();
});

obs$.subscribe(console.log)



