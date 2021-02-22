import React from 'react'
import * as Tone from 'tone'

const Key = ({ note, color, tone }) => {
    const synth = new Tone.Synth().toDestination()
    const now = Tone.now()
    return <button
        className={`key ${color} ${note}`}
        onMouseDown={(e) => synth.triggerAttack(e.target.value, now)}
        onMouseUp={(e) => synth.triggerRelease()}
        value={tone}
    />
}

export default Key
