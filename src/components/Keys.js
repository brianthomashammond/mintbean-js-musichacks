import React, { Fragment } from 'react'
import Key from './Key'
import notes from '../notes'

const Keys = () => {
	return (
		<Fragment>
			{notes.map(note => (
				<Key
                    id={note.id}
					note={note.note}
					color={note.color}
					tone={note.tone}
				/>
			))}
		</Fragment>
	)
}

export default Keys
