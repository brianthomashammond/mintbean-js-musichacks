import React from 'react'
import {
	playC4,
	playDb4,
	playD4,
	playEb4,
	playE4,
	playF4,
	playGb4,
	playG4,
	playAb4,
	playA4,
	playBb4,
	playB4,
	playC5,
	playNote,
	playTwinkleTwinkle,
	playPolyphonicExample,
} from '../tone.fn.js'

const Key = ({ note, color, qwerty, tone }) => {
	console.log(tone)
	return <button className={`${color} ${note}`} onClick={tone} value={qwerty} />
}

export default Key
