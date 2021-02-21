import './App.css'
import {
    playC4,
    playDb4,
    playD4,
    playEb4,
    playE4,
    playF4,
    playGb4,
    playG4,
    playAb4,
    playA4,
    playBb4,
    playB4,
    playC5,
    playNote,
    playTwinkleTwinkle,
    playPolyphonicExample,
} from './tone.fn.js'

window.addEventListener('keydown', playNote)

function App() {
    return (
        <div className="pianoPage">
            <h1>Piano</h1>
            <div className="piano">
                <div className="white-key C" onClick={playC4}>A</div>
                <div className="black-key Db" onClick={playDb4}>W</div>
                <div className="white-key D" onClick={playD4}>S</div>
                <div className="black-key Eb" onClick={playEb4}>E</div>
                <div className="white-key E" onClick={playE4}>D</div>
                <div className="white-key F" onClick={playF4}>F</div>
                <div className="black-key Gb" onClick={playGb4}>T</div>
                <div className="white-key G" onClick={playG4}>G</div>
                <div className="black-key Ab" onClick={playAb4}>Y</div>
                <div className="white-key A" onClick={playA4}>H</div>
                <div className="black-key Bb" onClick={playBb4}>U</div>
                <div className="white-key B" onClick={playB4}>J</div>
                <div className="white-key C" onClick={playC5}>K</div>
            </div>
            <button onClick={playTwinkleTwinkle}>Twinkle Twinkle</button>
            <button onClick={playPolyphonicExample}>Polyphonic</button>
        </div>
    )
}

export default App