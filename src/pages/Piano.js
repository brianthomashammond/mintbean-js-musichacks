
import React, { useState } from 'react'
import '../App.css'
import { playTwinkleTwinkle, playTheEntertainer, playDeColores } from '../tone.fn.js'

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
		<div className='pianoPage'>
			<h1>ColorPlunk!</h1>
            <div className='button-wrapper'>
                <button className='temp' onClick={() => playTwinkleTwinkle(instrument)}>
					Twinkle Twinkle
				</button>
				<button className='temp' onClick={() => playTheEntertainer(instrument)}>
					The Entertainer
				</button>
                <button className='temp' onClick={() => playDeColores(instrument)}>
					De Colores
				</button>
            </div>
			<div className='piano'>
				<Keys instrument={instrument}
            />
			</div>
			<div className='button-wrapper'>
                <button className='temp' onClick={()=> setInstrument('piano')}>
					Piano
				</button>
				<button className='temp' onClick={()=> setInstrument('trumpet')}>
					Trumpet
				</button>
                <button className='temp' onClick={()=> setInstrument('spaceship')}>
					Spaceship
				</button>

			</div>
		</Fragment>
	)
}

export default Piano
