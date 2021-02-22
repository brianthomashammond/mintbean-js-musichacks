import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import music from '../assets/music.png'
import Team from '../components/Team'
import Summary from '../components/Summary'
import Screenshot from '../components/Screenshot'

const Landing = () => {
	return (
		<Fragment>
			<div className='landing-container'>
				<div className='head-wrapper'>
					<div className='image-wrapper'>
						<img src={music} alt='music notes' />
					</div>

					<div className='title-wrapper'>
						<h1 className='app-title'>Baby Bach</h1>
						<h3>by Band-O-Three</h3>
					</div>
				</div>
				<div className='team-wrapper'>
					<div className='member-wrapper'>
						<Team />
					</div>
				</div>
				<div className='bottom-wrapper'>
					<div className='screenshot-wrapper'>
						<Screenshot />
					</div>
					<div className='summary-wrapper'>
						<Summary />
					</div>
				</div>
				<Link to='/demo'>
					<button className='demo'>Demo</button>
				</Link>
			</div>
		</Fragment>
	)
}

export default Landing
