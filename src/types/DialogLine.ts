export const commandNames = [
  'playMusic',
  'playSound',
  'changeBackground',
  'showCharacter',
  'hideCharacter',
  'shakeScreen',
  'fadeIn',
  'wait',
  'choices'
] as const

export type CommandName = typeof commandNames[number]

export type DialogLine =
  | {
      id?: string
      name: string
      text: string
      avatar?: string
      sound?: string
      soundVolume?: number
    }
  | {
      command: Exclude<CommandName, 'choices'>
      value: string
      id?: string
      volume?: number
      position?: 'left' | 'center' | 'right'
    }
  | {
      command: 'choices'
      value: {
        text: string
        nextId: string
      }[]
      id?: string
    }
