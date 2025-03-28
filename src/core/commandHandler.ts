import { DialogLine } from '../types/DialogLine'
import { Scene } from '../types/Scene'
import { playMusic, playSound } from '../engine/audioManager'

export enum CommandType {
    PlayMusic = 'playMusic',
    PlaySound = 'playSound',
    ChangeBackground = 'changeBackground',
    ShowCharacter = 'showCharacter',
    HideCharacter = 'hideCharacter',
    ShakeScreen = 'shakeScreen',
    FadeIn = 'fadeIn',
    Wait = 'wait',
    Choices = 'choices'
}

interface CommandContext {
    setBackground: (bg: string) => void
    setActiveCharacters: (fn: (prev: Scene['characters']) => Scene['characters']) => void
    setIsFading: (value: boolean) => void
    setIsWaiting: (value: boolean) => void
    setShakeKey: (fn: (prev: number) => number) => void
    setIndex: (fn: (prev: number) => number) => void
    playMusic: typeof playMusic
    playSound: typeof playSound
    scene: Scene
}

export function handleCommand(line: DialogLine, context: CommandContext): void {
    if (!('command' in line)) return

    switch (line.command) {
        case CommandType.PlayMusic:
            context.playMusic(line.value)
            break

        case CommandType.PlaySound:
            context.playSound(line.value, line.volume ?? 1)
            break

        case CommandType.ChangeBackground:
            context.setBackground(line.value)
            break

        case CommandType.ShowCharacter:
            context.setActiveCharacters((prev) => [
                ...(prev || []),
                {
                    id: line.value,
                    src: line.value,
                    position: line.position || 'center'
                }
            ])
            break

        case CommandType.HideCharacter:
            context.setActiveCharacters((prev) =>
                (prev || []).filter((char) => char.id !== line.value)
            )
            break

        case CommandType.ShakeScreen:
            context.setShakeKey((prev) => prev + 1)
            setTimeout(() => context.setShakeKey(() => 0), 500)
            break

        case CommandType.FadeIn:
            context.setIsFading(true)
            setTimeout(() => context.setIsFading(false), 1000)
            break

        case CommandType.Wait:
            context.setIsWaiting(true)
            setTimeout(() => {
                context.setIsWaiting(false)
                context.setIndex((prev) => prev + 1)
            }, parseInt(line.value))
            break

        default:
            console.warn(`Comando desconhecido: ${line.command}`)
    }
}
