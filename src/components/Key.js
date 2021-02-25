import React from 'react'
import * as Tone from 'tone'

const Key = ({ color, tone, instrument }) => {
    let synth

    if (instrument === 'piano') {
        synth = new Tone.Synth().toDestination()
    } else if (instrument === 'trumpet') {
        synth = new Tone.MonoSynth().toDestination()
    } else if (instrument === 'spaceship') {
        synth = new Tone.MembraneSynth().toDestination()
    }
    const now = Tone.now()
    return <button
        id={tone}
        className={`key ${color} ${tone}`}
        onMouseDown={(e) => synth.triggerAttack(e.target.value, now)}
        onMouseUp={() => synth.triggerRelease()}
        onMouseOut={() => synth.triggerRelease()}
        value={tone}
    />
}

export default Key
