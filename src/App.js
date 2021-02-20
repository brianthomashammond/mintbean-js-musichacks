import './App.css'
import * as Tone from 'tone'

function playC4() {
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease("C4", "8n")
}

function App() {
  return (
    <div>
        <button onClick={playC4}>Play Me</button>
    </div>
  );
}

export default App;
