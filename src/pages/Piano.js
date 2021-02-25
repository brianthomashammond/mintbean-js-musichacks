import React from 'react'
import '../App.css'
import { playTwinkleTwinkle, playTheEntertainer, playDeColores } from '../tone.fn.js'
import Keys from '../components/Keys'

const Piano = () => {
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
                <button className='temp' onClick={playDeColores}>
					De Colores
				</button>
			</div>
		</div>
	)
}

export default Piano
