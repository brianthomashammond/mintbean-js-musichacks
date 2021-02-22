import React, { Fragment } from 'react'
import Key from './Key'
import notes from '../notes'

const Keys = () => {
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
