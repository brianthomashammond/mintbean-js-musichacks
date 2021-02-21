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
import Keys from './components/Keys'

window.addEventListener('keydown', playNote)

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
				<button className='temp' onClick={playPolyphonicExample}>
					Polyphonic
				</button>
			</div>
		</div>
	)
}

export default App
