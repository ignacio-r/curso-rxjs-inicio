import { catchError, of } from 'rxjs'
import { AjaxError, ajax } from 'rxjs/ajax'

const url = 'https://httpbinxx.org/delay/1'
//const url = 'https://api.github.com/users?per_page=5'

const handleError = (response: AjaxError) => {
    console.warn('Error:', response.message);
    
    return of({
        ok: false,
        users: []
    })
}

const obs$ = ajax.getJSON(url).pipe(
    catchError(handleError)
)
const obs2$ = ajax(url).pipe(
    catchError(handleError)
)



obs$.pipe(
    catchError(handleError)
).subscribe(
    {
        next: val => console.log('next:', val),
        error: val => console.warn('error in subs:',val),
        complete: () => console.log('complete')
    }
)

// obs2$.subscribe(
//     data => console.log('ajax:', data)
// )


