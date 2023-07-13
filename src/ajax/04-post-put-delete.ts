import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1'


// ajax.post(url, {
//     id: 1, nombre: 'ignacio'
// },{
//     'mi-token': 'ABC123'
// }).subscribe(console.log)

// ajax.put(url, {
//     id: 1, nombre: 'ignacio'
// },{
//     'mi-token': 'ABC123'
// }).subscribe(console.log)

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token':'abc123',

    },
    body: {
        id: 1,
        nombre: 'ignacio'
    }
}).subscribe(console.log)