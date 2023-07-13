import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from '../interfaces/github-user-interface';
import { GithubUsersResp } from "../interfaces/github-users-interface";


const body = document.querySelector('body');
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput, orderList)

//Helpers
const displayUsers = (users: GithubUser[])=>{
    console.log(users);
    orderList.innerHTML = '';
    for(const user of users){
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = user.avatar_url

        const anchor = document.createElement('a')
        anchor.href = user.html_url
        anchor.text = 'Show page'
        anchor.target = '_blank'

        li.append(img)
        li.append(user.login + ' ')
        li.append(anchor)

        orderList.append(li)
    }
}




//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck('target','value'),
    mergeMap(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    pluck('items')
)//.subscribe(users => displayUsers(users as GithubUser[]))


const url = 'https://httpbin.org/delay/1?arg='

input$.pipe(
    pluck('target', 'value'),
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log)






