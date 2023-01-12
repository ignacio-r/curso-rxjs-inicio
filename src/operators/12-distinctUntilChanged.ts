import { distinct, of, from, distinctUntilChanged } from 'rxjs';

const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1')

numbers$.pipe(
    distinctUntilChanged()
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
        distinctUntilChanged((prev, curr) => prev.nombre === curr.nombre)
    )
    .subscribe(console.log)