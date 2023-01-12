import { from, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs';

interface Character {
    nombre: string
}

const characters: Character[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
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
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    }
]

from(characters)
.pipe(
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)