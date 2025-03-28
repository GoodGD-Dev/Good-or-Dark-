import { DialogLine } from './DialogLine'

export interface Scene {
  id: string
  background: string
  music?: string
  characters?: CharacterOnScene[]
  objects?: SceneObject[]
  lines: DialogLine[]
}

export interface CharacterOnScene {
    id: string
    src: string
    position: 'left' | 'center' | 'right'
}

export interface SceneObject {
    id: string
    src: string
    x: number
    y: number
    width?: number
    height?: number
}
