import React from 'react'
import * as Tone from 'tone'

const Key = ({ color, tone }) => {
    const synth = new Tone.Synth().toDestination()
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
