import { Scene } from '../types/Scene'

export const prologue: Scene = {
    id: 'prologue',
    background: '/backgrounds/forest.jpg',
    music: '/music/MONO NO AWARE.mp3',
    characters: [
        {
            id: 'anna_right',
            src: '/characters/anna_happy.png',
            position: 'right'
        },
        {
            id: 'anna_left',
            src: '/characters/anna_happy.png',
            position: 'left'
        }
    ],
    objects: [
        {
            id: 'stone',
            src: '/objects/stone.png',
            x: 300,
            y: 400
        }
    ],
    lines: [
      {
          id: 'intro',
          name: 'Anna',
          text: 'Você quer começar a aventura?',
          avatar: '/characters/anna_happy.png'
      },
      {
          command: 'choices',
          id: 'start_choice',
          value: [
              { text: 'Sim!', nextId: 'yes_path' },
              { text: 'Ainda não.', nextId: 'no_path' }
          ]
      },
      {
          id: 'yes_path',
          name: 'Anna',
          text: 'Ótimo! Vamos em frente!'
      },
      {
          id: 'no_path',
          name: 'Anna',
          text: 'Tudo bem, te espero aqui.'
      }
  ]
}
