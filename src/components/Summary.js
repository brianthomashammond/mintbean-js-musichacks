import React, { Fragment } from 'react'

const Summary = () => {
	return (
		<Fragment>
			<div className='summary-content'>
				<h3>About the ColorPlunk! App</h3>
				<br />
				<p>
					Does your little one love to dance to some tunes? Or maybe even make
					their own? Then ColorPlunk! is here! ColorPlunk! was created for
					little ones between 3-6 years old with fun graphics and interactions.
					No need to read!
				</p>
				<br />
				<p>
					ColorPlunk! is a React application utilizing Tone.js that features an
					interactive piano that not only plays classic songs (Twinkle
					Twinkle, The Entertainer and De Colores) but also allows for young
					ones to make their own music! ColorPlunk! has incorporated not only
					the synthesizer tones but trumpet and even spaceship tones.
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
