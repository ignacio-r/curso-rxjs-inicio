import { catchError, map, of, pluck } from 'rxjs'
import { AjaxError, ajax } from 'rxjs/ajax'


const url = 'https://api.github.com/users?per_page=5'


const handleErrors = (response: Response) => {
    if(!response.ok){
        throw new Error(response.statusText)
    }
    return response
}

const doCatchError = (err: AjaxError) => {
        console.warn('error in:', err.message)
        return of([])
}


const fetchPromise = fetch(url)

// fetchPromise
// .then(res => res.json())
// .then(data => console.log('data:', data))
// .catch(err => console.warn('users errors',err))

// fetchPromise
// .then(handleErrors)
// .then(res => res.json())
// .then(data => console.log('data:', data))
// .catch(err => console.warn('error in users',err))

ajax(url).pipe(
    //map(res => res.response)
    pluck('response'),
    catchError(doCatchError)
).subscribe(users => console.log('users:', users))