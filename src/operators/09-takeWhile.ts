import { fromEvent, map, takeWhile } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    map(({x,y}) => ({x,y})),
    // inclusive toma el ultimo valor tambien
    takeWhile(({y}) => y <= 150, true)
)
.subscribe(
    {
        next: val => console.log('next: ', val),
        complete: () => console.log('complete'),
    }
)