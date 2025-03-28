let currentAudio: HTMLAudioElement | null = null
let currentSrc: string | null = null
const audioCache: Record<string, HTMLAudioElement> = {}

export function playMusic(src: string) {
    if (currentSrc === src && currentAudio) return

    stopMusic()

    currentAudio = new Audio(src)
    currentAudio.loop = true
    currentAudio.volume = 0
    currentAudio.play()
        .then(() => fadeVolume(currentAudio!, 0.5, 1000))
        .catch((err) => console.warn('Erro ao tocar música (autoplay bloqueado):', err))

    currentSrc = src
}

export function stopMusic() {
    if (currentAudio) {
        fadeVolume(currentAudio, 0, 500, () => {
            currentAudio?.pause()
            currentAudio = null
            currentSrc = null
        })
    }
}

export function playSound(src: string, volume = 1) {
    let sfx = audioCache[src]
    if (!sfx) {
        sfx = new Audio(src)
        audioCache[src] = sfx
    }
    const clone = sfx.cloneNode(true) as HTMLAudioElement
    clone.volume = volume
    clone.play().catch((err) => console.warn('Erro ao tocar som:', err))
}

function fadeVolume(
    audio: HTMLAudioElement,
    targetVolume: number,
    duration: number,
    onComplete?: () => void
) {
    const stepTime = 50
    const steps = duration / stepTime
    const volumeDiff = targetVolume - audio.volume
    let currentStep = 0

    const fade = setInterval(() => {
        currentStep++
        audio.volume += volumeDiff / steps

        if (currentStep >= steps) {
            audio.volume = targetVolume
            clearInterval(fade)
            onComplete?.()
        }
    }, stepTime)
}
