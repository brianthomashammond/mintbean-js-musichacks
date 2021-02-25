import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Member = ({ img, name, linkedin, github }) => {
	return (
		<div>
			<img src={img} alt={name} />
			<p className='team-member-name'>{name}</p>
			<Link className="icon" target="_blank" to={github}> <FaGithub /> </Link>
			<Link className="icon" target="_blank" to={linkedin}> <FaLinkedin /> </Link>
		</div>
	)
}

export default Member
