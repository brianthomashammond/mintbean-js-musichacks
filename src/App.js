import './App.css'

import {
	playTwinkleTwinkle,
	playTheEntertainer,
} from './monotone.fn.js'

import {
	playTwinkleTwinkle1,
	playTheEntertainer1,
} from './synthtone.fn'

import {
	playTwinkleTwinkle2,
	playTheEntertainer2,
} from './memtone.fn.js'

import Keys from './components/Keys'
import React, { useState } from 'react'

function App() {

	const [mem, setMem] = useState(false)
	const [synth, setSynth] = useState(false)
	const [mono, setMono] = useState(false)

	function toggleMem() {
		setMem(prevMem => !prevMem)
		console.log(mem)
	}

	function toggleSynth() {
		setSynth(prevSynth => !prevSynth)
		console.log(synth)
	}

	function toggleMono() {
		setMono(prevMono => !prevMono)
		console.log(mono)
	}

	return (
		<div className='pianoPage'>
			
			<h1>Piano</h1>
			<div className='button-wrapper'>
			<button onClick = {toggleMem}>Membrane</button>
			<button onClick = {toggleSynth}>Synth</button>
			<button onClick = {toggleMono}>Mono</button>
			</div>

			<div className='piano'>
				<Keys />
			</div>
			{/* <div className='button-wrapper'>
				<button className='temp' onClick={playTwinkleTwinkle2}>
					Twinkle Twinkle
				</button>
				<button className='temp' onClick={playTheEntertainer2}>
					The Entertainer
				</button>
			</div> */}

			{mem && (
                        		<div className='button-wrapper'>
									<button className='temp' onClick={playTwinkleTwinkle2}>
										Twinkle Twinkle
									</button>
									<button className='temp' onClick={playTheEntertainer2}>
										The Entertainer
									</button>
								</div>
                    )}
			{synth && (
                        		<div className='button-wrapper'>
									<button className='temp' onClick={playTwinkleTwinkle1}>
										Twinkle Twinkle
									</button>
									<button className='temp' onClick={playTheEntertainer1}>
										The Entertainer
									</button>
								</div>
                    )}
			{mono && (
                        		<div className='button-wrapper'>
									<button className='temp' onClick={playTwinkleTwinkle}>
										Twinkle Twinkle
									</button>
									<button className='temp' onClick={playTheEntertainer}>
										The Entertainer
									</button>
								</div>
                    )}
		</div>
	)
}

export default App
