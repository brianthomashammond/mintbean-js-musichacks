import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import {
	playNote,
	playTwinkleTwinkle,
	playPolyphonicExample,
} from './tone.fn.js'
import Piano from './pages/Piano'
import Landing from './pages/Landing'

window.addEventListener('keydown', playNote)

function App() {
	return (
		<Router>
			<Route path='/' exact component={Landing} />
			<Route path='/demo' component={Piano} />
		</Router>
	)
}

export default App
