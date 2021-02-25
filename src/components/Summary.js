import React, { Fragment } from 'react'

const Summary = () => {
	return (
		<Fragment>
			<div className='summary-content'>
				<h3>About the ColorPlunk! App</h3>
				<br />
				<p>
					Does your little one love to dance to some tunes? Or maybe even make
					their own? Then ColorPlunk! is here!
				</p>
				<br />
				<p>
					ColorPlunk! is a React application utilizing Tone.js that features an interactive piano that not only plays classic songs (Twinkle Twinkle, De Colores, etc.) but also allows for young ones to plunk out their own!
				</p>
				<br />
				<p>
					Making your own music or following one of the original songs
					may seem daunting at first. But the ColorPlunk! keyboard's real time color matching shows your eyes where the music is being made!
                </p>
                <br />
                <p>    
                    Press an instrument to hear that voice, push a picture to hear that song, or play the keys yourself - the musical experience is visual, awesome and fun!
                </p>
                <br />
                <p>     
                    Thank you to the <a href='https://mintbean.io'>Mintbean</a> family for the hackathon that inspired this creation!
				</p>
			</div>
		</Fragment>
	)
}

export default Summary
