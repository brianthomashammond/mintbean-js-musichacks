import React, { Fragment } from 'react'

const Summary = () => {
	return (
		<Fragment>
			<h3 className='app-summary'>About Baby Bach</h3>
			<p>
				Does your little one love to dance to some tunes? Or maybe even make
				their own? (Thinking about maybe saying is your little one an upcoming
				musical prodigy or something idk)
			</p>
			<p>
				Baby Bach is a React application utilizing Tone.js that features an
				interactive piano that not only plays classical/original songs(Twinkle
				Twinkle, Sukura Sukura, etc) but also allows for young ones to make
				their own music!
			</p>
			<p>
				Making your own original music or following one of the original songs
				may be difficult at first. However the keys in Baby Bach are not your
				standard black and white piano keys. But rather they are colored keys,
				which make it easy to remember what specific key generates which
				distinct note. Making the musical experience visual, fun and awesome!
			</p>
		</Fragment>
	)
}

export default Summary
