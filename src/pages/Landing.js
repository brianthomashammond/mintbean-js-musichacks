import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import hero from '../assets/hero.png'
import Team from '../components/Team'
import Summary from '../components/Summary'
import Screenshot from '../components/Screenshot'

const Landing = () => {
	return (
		<Fragment>
			<div className='landing-container'>
				<div className='hero-wrapper'>
					<img className='hero-img' src={hero} alt='Baby Bach Title Image' />
				</div>
				<div className='team-wrapper'>
					<h3 className='team-title'>Our Team</h3>
					<Team />
				</div>
				<div className='bottom-wrapper'>
					<div className='screenshot-wrapper'>
						<Screenshot />
					</div>
					<div className='summary-wrapper'>
						<Summary />
					</div>
				</div>
				<div className='demo-wrapper'>
					<Link to='/demo'>
						<button className='demo'>Demo</button>
					</Link>
				</div>
			</div>
		</Fragment>
	)
}

export default Landing
