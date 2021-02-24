import React, { Fragment } from 'react'
import '../App.css'
import Member from './Member'
import team from '../team'

const Team = () => {
	return (
		<Fragment>
			<div className='team-member'>
				{team.map(member => (
					<Member name={member.name} img={member.img} />
				))}
			</div>
		</Fragment>
	)
}

export default Team
