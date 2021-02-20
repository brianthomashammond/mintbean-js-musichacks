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
} from './tone.fn.js'


function App() {
    return (
        <div classname="pianoPage">
            <h1>Piano</h1>
            <div className="piano">
                <div className="white-key">{playC4}</div>
                <div className="black-key">{playDb4}</div>
                <div className="white-key">{playD4}</div>
                <div className="black-key">{playEb4}</div>
                <div className="white-key">{playE4}</div>
                <div className="white-key">{playF4}</div>
                <div className="black-key">{playGb4}</div>
                <div className="white-key">{playG4}</div>
                <div className="black-key">{playAb4}</div>
                <div className="white-key">{playA4}</div>
                <div className="black-key">{playBb4}</div>
                <div className="white-key">{playB4}</div>
                <div className="white-key">{playC5}</div>
            </div>
        </div>
    )
}

export default App;
