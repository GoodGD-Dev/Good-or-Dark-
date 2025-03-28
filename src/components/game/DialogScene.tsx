import React, { useState, useEffect } from 'react'
import { Scene } from '../../types/Scene'
import DialogBox from './DialogBox'
import { playMusic, playSound } from '../../engine/audioManager'
import { DialogLine } from '../../types/DialogLine'

interface DialogSceneProps {
    scene: Scene
    onEnd?: () => void
}

const DialogScene: React.FC<DialogSceneProps> = ({ scene, onEnd }) => {
    const [index, setIndex] = useState(0)
    const [background, setBackground] = useState(scene.background)
    const [activeCharacters, setActiveCharacters] = useState(scene.characters || [])
    const [isFading, setIsFading] = useState(false)
    const [isWaiting, setIsWaiting] = useState(false)
    const [shakeKey, setShakeKey] = useState(0)

    const currentLine: DialogLine | undefined = scene.lines[index]

    useEffect(() => {
        setIndex(0)
        setBackground(scene.background)
        setActiveCharacters(scene.characters || [])
        setIsFading(false)
        setShakeKey(0)

        if (scene.music) {
            playMusic(scene.music)
        }
    }, [scene])

    useEffect(() => {
        if (!currentLine) return

        if ('command' in currentLine) {
            switch (currentLine.command) {
                case 'playMusic':
                    playMusic(currentLine.value)
                    break
                case 'playSound':
                    playSound(currentLine.value, currentLine.volume ?? 1)
                    break
                case 'changeBackground':
                    setBackground(currentLine.value)
                    break
                case 'showCharacter':
                    setActiveCharacters((prev) => [
                        ...prev,
                        {
                            id: currentLine.value,
                            src: currentLine.value,
                            position: currentLine.position || 'center'
                        }
                    ])
                    break
                case 'hideCharacter':
                    setActiveCharacters((prev) =>
                        prev.filter((char) => char.id !== currentLine.value)
                    )
                    break
                case 'shakeScreen':
                    setShakeKey((prev) => prev + 1)
                    setTimeout(() => setShakeKey(0), 500) // Remove shake após 500ms
                    break
                case 'fadeIn':
                    setIsFading(true)
                    setTimeout(() => setIsFading(false), 1000)
                    break
                case 'wait':
                    setIsWaiting(true)
                    setTimeout(() => {
                        setIsWaiting(false)
                        setIndex((prev) => prev + 1)
                    }, parseInt(currentLine.value))
                    break
            }
        } else {
            if (currentLine.sound) {
                playSound(currentLine.sound, currentLine.soundVolume ?? 1)
            }
        }
    }, [currentLine])

    useEffect(() => {
        if (!scene.lines[index]) {
            onEnd?.()
        }
    }, [index])

    if (!currentLine) return null

    const handleNext = () => {
        if (isWaiting) return
        if ('command' in currentLine && currentLine.command === 'choices') return
        setIndex((prev) => prev + 1)
    }

    return (
        <div
            onClick={handleNext}
            className={`scene-wrapper ${shakeKey > 0 ? 'shake' : ''}`}
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            {/* Fade visual */}
            {isFading && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'black',
                        opacity: 1,
                        animation: 'fadeInOverlay 1s forwards',
                        zIndex: 20
                    }}
                />
            )}

            {/* Personagens */}
            {activeCharacters.map((char) => (
                <img
                    key={char.id + char.position}
                    src={char.src}
                    alt={char.id}
                    className="fade-in"
                    style={{
                        position: 'absolute',
                        bottom: 100,
                        left:
                            char.position === 'left'
                                ? '10%'
                                : char.position === 'center'
                                ? '40%'
                                : '70%',
                        height: 300,
                        zIndex: 5,
                        transition: 'opacity 0.5s ease'
                    }}
                />
            ))}

            {/* Caixa de diálogo */}
            {'name' in currentLine && (
                <DialogBox
                    name={currentLine.name}
                    text={currentLine.text}
                    avatar={currentLine.avatar}
                />
            )}

            {/* Escolhas */}
            {'command' in currentLine && currentLine.command === 'choices' && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '20%',
                        left: '10%',
                        right: '10%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        zIndex: 30
                    }}
                >
                    {currentLine.value.map((choice, i) => (
                        <button
                            key={i}
                            onClick={(e) => {
                                e.stopPropagation()
                                const next = scene.lines.findIndex(
                                    (line) => 'id' in line && line.id === choice.nextId
                                )
                                if (next !== -1) setIndex(next)
                            }}
                            style={{
                                padding: '12px 24px',
                                backgroundColor: '#111',
                                color: 'white',
                                border: '2px solid #fff',
                                borderRadius: '8px',
                                fontSize: '16px',
                                cursor: 'pointer'
                            }}
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DialogScene
