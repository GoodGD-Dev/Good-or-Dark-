import { useSceneManager } from './core/sceneManager'
import { prologue } from './scenes/prologue'
import { nextChapter } from './scenes/chapter1'
import DialogScene from './components/game/DialogScene'

function App() {
    const { currentScene, goToScene } = useSceneManager(prologue)

    return (
        <DialogScene
            scene={currentScene}
            onEnd={() => goToScene(nextChapter)}
        />
    )
}

export default App
