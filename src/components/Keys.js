import React, { Fragment } from 'react'
import Key from './Key'
import notes from '../notes'

const Keys = ({instrument}) => {
	return (
		<Fragment>
			{notes.map(note => (

				<Key
                    instrument={instrument}
                    id={note.tone}
					color={note.color}
					tone={note.tone}
				/>

			))}
		</Fragment>
	)
}

export default Keys
