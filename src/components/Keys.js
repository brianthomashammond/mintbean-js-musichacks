import React, { Fragment } from 'react'
import Key from './Key'
import notes from '../notes'
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
} from '../tone.fn.js'

const Keys = () => {
	// handleNote = tone => {}

	return (
		<Fragment>
			{notes.map(note => (
				<Key
					note={note.note}
					color={note.color}
					qwerty={note.qwerty}
					tone={note.tone}
				/>
			))}
		</Fragment>
	)
}

export default Keys
