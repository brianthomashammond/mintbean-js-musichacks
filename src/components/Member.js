import React from 'react'

const Member = ({ img, name }) => {
	return (
		<div>
			<img src={img} alt={name} />
			<p className='team-member-name'>{name}</p>
		</div>
	)
}

export default Member
