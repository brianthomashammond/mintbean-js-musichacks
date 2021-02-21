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
} from './tone.fn.js'

export const notes = [
	{
		note: 'C',
		color: 'white',
		qwerty: 'A',
		tone: playC4,
	},
	{
		note: 'Db',
		color: 'black',
		qwerty: 'W',
		tone: playDb4,
	},
	{
		note: 'D',
		color: 'white',
		qwerty: 'S',
		tone: playD4,
	},
	{
		note: 'Eb',
		color: 'black',
		qwerty: 'E',
		tone: playEb4,
	},
	{
		note: 'E',
		color: 'white',
		qwerty: 'D',
		tone: playE4,
	},
	{
		note: 'F',
		color: 'white',
		qwerty: 'F',
		tone: playF4,
	},
	{
		note: 'Gb',
		color: 'black',
		qwerty: 'T',
		tone: playGb4,
	},
	{
		note: 'G',
		color: 'white',
		qwerty: 'G',
		tone: playG4,
	},
	{
		note: 'Ab',
		color: 'black',
		qwerty: 'Y',
		tone: playAb4,
	},
	{
		note: 'A',
		color: 'white',
		qwerty: 'H',
		tone: playA4,
	},
	{
		note: 'Bb',
		color: 'black',
		qwerty: 'U',
		tone: playBb4,
	},
	{
		note: 'B',
		color: 'white',
		qwerty: 'J',
		tone: playB4,
	},
	{
		note: 'C',
		color: 'white',
		qwerty: 'K',
		tone: playC5,
	},
]

export default notes
