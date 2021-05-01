import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Member = ({ img, name, linkedin, github }) => {
	return (
		<div>
			<img src={img} alt={name} />
			<p className='team-member-name'>{name}</p>
			<a className="icon" target="_blank" rel ="noreferrer" href={github}> <FaGithub /> </a>
			<a className="icon" target="_blank" rel ="noreferrer" href={linkedin}> <FaLinkedin /> </a>
		</div>
	)
}

export default Member
