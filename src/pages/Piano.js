import React, { useState, Fragment } from 'react'
import '../App.css'
import {
	playTwinkleTwinkle,
	playTheEntertainer,
	playDeColores,
} from '../tone.fn.js'

import Keys from '../components/Keys'
import colors from '../assets/colors.png'
import ent from '../assets/ent.png'
import stars from '../assets/stars.png'
import piano from '../assets/piano.png'
import trumpet from '../assets/trumpet.png'
import spaceship from '../assets/spaceship.png'
import title from '../assets/title-img.png'

const Piano = () => {
	const [instrument, setInstrument] = useState('piano')

	return (
		<Fragment>
			<div className='pianoPage'>
				<div className='title-wrapper'>
					<img className='title-image' src={title} alt='colorplunk!' />
				</div>

				<div className='button-wrapper'>
					<button className='song-button' onClick={playTwinkleTwinkle}>
						<img src={stars} alt='Three stars in a box' />
					</button>
					<button className='song-button' onClick={playDeColores}>
						<img src={colors} alt='3D circle of colors' />
					</button>
					<button className='song-button' onClick={playTheEntertainer}>
						<img src={ent} alt='Top hat with monocle and mustache' />
					</button>
				</div>
				<div className='piano-wrapper'>
					<div className='piano'>
						<Keys />
					</div>
				</div>

				<div className='voice-wrapper'>
					<button className='voice-button'>
						<img src={piano} alt='keyboard' />
					</button>
					<button className='voice-button'>
						<img src={trumpet} alt='trumpet' />
					</button>
					<button className='voice-button'>
						<img src={spaceship} alt='girl in a spaceship' />
					</button>
				</div>
			</div>
		</Fragment>
	)
}

export default Piano
