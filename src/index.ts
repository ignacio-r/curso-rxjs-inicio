import { range, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators'

// range(1,5).pipe(
//     map<number,string>(each => (each * 10).toString())
// ).subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(
    map(event => event.code)
)
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
)

const keyPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)

keyup$.subscribe(val  => console.log(val))
keyupCode$.subscribe(code => console.log('map', code))
keyPluck$.subscribe(code => console.log('pluck', code))


