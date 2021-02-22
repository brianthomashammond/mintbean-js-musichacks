import './App.css'
import {
	playTwinkleTwinkle,
	playTheEntertainer,
} from './tone.fn.js'
import Keys from './components/Keys'
import * as Tone from 'tone'

document.querySelectorAll('button.key').forEach(function(button){
    const synth = new Tone.Synth().toDestination()
    button.addEventListener('mousedown', function(e){
        const now = Tone.now()
        console.log("valu: ", e.target.value)
        synth.triggerAttack(e.target.value, now)
    })
    button.addEventListener('mouseup', function(e){
        synth.triggerRelease()
    })
})

function App() {
	return (
		<div className='pianoPage'>
			<h1>Piano</h1>
			<div className='piano'>
				<Keys />
			</div>
			<div className='button-wrapper'>
				<button className='temp' onClick={playTwinkleTwinkle}>
					Twinkle Twinkle
				</button>
				<button className='temp' onClick={playTheEntertainer}>
					The Entertainer
				</button>
			</div>
		</div>
	)
}

export default App
