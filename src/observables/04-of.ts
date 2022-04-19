import { of } from 'rxjs'

// const obs$ = of(1,2,3,4,5)
const obs$ = of(...[1,2,3,4,5,6],2,3,4,5)
// const obs$ = of([1,2], {a:1,b:2}, function(){})

console.log('inicio del obs$');

obs$.subscribe(
    {
        next: (nxt) => console.log(nxt),
        complete: () => console.log('fin de la secuencia')
    }
)

console.log('fin del obs$');



