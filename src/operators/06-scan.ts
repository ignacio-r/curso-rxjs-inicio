import { from, interval, map, reduce, scan, take, tap } from "rxjs";


const numbers = [1, 2, 3, 4, 5]


// const totalAccumulator = (acc, curr) => {
//     return acc + curr
// }

const totalAccumulator = (acc, curr) => acc + curr

//Reduce
from(numbers)
    .pipe(
        reduce(totalAccumulator, 0)
    )
    .subscribe(console.log)

//Scan
from(numbers)
    .pipe(
        scan(totalAccumulator, 0)
    )
    .subscribe(console.log)

//Redux
interface User {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
}

const user: User[] = [
    {
        id: 'joe',
        autenticado: false,
        token: null
    },
    {
        id: 'joe',
        autenticado: true,
        token: 'ABC'
    },
    {
        id: 'joe',
        autenticado: true,
        token: 'ABC123'
    }
]

const state$ = from( user ).pipe(
    scan<User>( (acc, cur) => {
        return { ...acc, ...cur }
    })
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );