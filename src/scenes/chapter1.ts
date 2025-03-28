import { Scene } from '../types/Scene'

export const nextChapter: Scene = {
    id: 'chapter1',
    background: '/backgrounds/forest.jpg',
    lines: [
        {
            name: 'Kai',
            text: 'Chegamos na cidade. Aqui começa a verdadeira missão.'
        },
        {
          command: 'shakeScreen',
          value: ''
        },
        {
            name: 'Anna',
            text: 'Eu sinto que algo está errado por aqui...'
        }
    ]
}
