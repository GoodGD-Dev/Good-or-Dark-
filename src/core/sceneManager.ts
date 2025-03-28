import { useState } from 'react'
import { Scene } from '../types/Scene'

interface SceneRegistry {
    [id: string]: Scene
}

export function useSceneManager(initialScene: Scene, registry?: SceneRegistry) {
    const [currentScene, setCurrentScene] = useState<Scene>(initialScene)

    const goToScene = (scene: Scene) => {
        setCurrentScene(scene)
    }

    const goToSceneById = (id: string) => {
        if (!registry) {
            console.warn('Scene registry not provided')
            return
        }
        const found = registry[id]
        if (found) setCurrentScene(found)
        else console.warn(`Scene with id '${id}' not found in registry`)
    }

    return {
        currentScene,
        goToScene,
        goToSceneById
    }
}
