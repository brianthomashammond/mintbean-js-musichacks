import React, { Fragment } from 'react'
import Key from './Key'
import notes from '../notes'

const Keys = () => {
	return (
		<Fragment>
			{notes.map(note => (
				<Key
					className={note.className}
					onClick={note.onClick}
					value={note.value}
				/>
			))}
		</Fragment>
	)
}

export default Keys
