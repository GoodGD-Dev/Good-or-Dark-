import { Scene } from '../types'

const prologue: Scene = {
    id: 'prologue',
    background: 'forest.jpg',
    music: 'intro.mp3',
    lines: [
        { character: 'Anna', text: 'Olá, mundo!' },
        { character: 'Kai', text: 'Estamos começando a aventura.' },
        { command: 'changeBackground', value: 'village.jpg' },
        // etc...
    ]
}

export default prologue
