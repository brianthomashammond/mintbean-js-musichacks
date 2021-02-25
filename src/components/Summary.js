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
					ColorPlunk! is a React application utilizing Tone.js that features an
					interactive piano that not only plays classic songs (Twinkle
					Twinkle, De Colores, etc.) but also allows for young ones to make
					their own music!
				</p>
				<br />
				<p>
					Making your own music or following one of the original songs
					may seem daunting at first. But the ColorPlunk! keyboard's real time color matching shows your eyes where the music is being made!
                </p>
                <br />
                <p>    
                    The musical experience is visual, awesome and fun!
				</p>
			</div>
		</Fragment>
	)
}

export default Summary
