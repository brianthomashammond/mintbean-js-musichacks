import React from 'react'

const Key = ({ note, color, qwerty, tone }) => {
	console.log(tone)
	return <button className={`${color} ${note}`} onClick={tone} value={qwerty} />
}

export default Key
