import { fromEvent, interval, merge, mergeMap, switchMap } from "rxjs";


const click$ = fromEvent(document, 'click')
const interval$ = interval(1000)

click$.pipe(
    //mergeMap( () => interval$)
    switchMap( () => interval$)
).subscribe(console.log)