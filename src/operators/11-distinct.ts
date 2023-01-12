import { distinct, of, from } from 'rxjs';

const numbers$ = of(1,1,1,3,3,2,2,4,4,5,3,1)

numbers$.pipe(
    distinct() // usa ===
)
.subscribe(console.log)

interface Character {
    nombre: string
}

const characters: Character[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
]

from(characters)
.pipe(
    distinct(c => c.nombre)
)
.subscribe(console.log)