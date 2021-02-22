import React from 'react'

const Key = ({ note, color, qwerty, tone }) => {
	return <button className={`${color} ${note}`} onMouseDown={tone} value={qwerty} />
}

export default Key
