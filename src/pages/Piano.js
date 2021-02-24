import React from 'react'
import '../App.css'
import { playTwinkleTwinkle, playPolyphonicExample } from '../tone.fn.js'
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
				<button className='temp' onClick={playPolyphonicExample}>
					Polyphonic
				</button>
			</div>
		</div>
	)
}

export default Piano
