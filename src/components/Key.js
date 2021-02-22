import React from 'react'

const Key = ({ note, color, tone }) => {
	return <button className={`key ${color} ${note}`} value={tone} />
}

export default Key
