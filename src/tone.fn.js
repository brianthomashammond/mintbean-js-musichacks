import * as Tone from 'tone'

// full keyboard is A0 - C8

const synth = new Tone.Synth().toDestination()

export function playC4() {
    synth.triggerAttackRelease("C4", "8n")
}
export function playDb4() {
    synth.triggerAttackRelease("Db4", "8n")
}
export function playD4() {
    synth.triggerAttackRelease("D4", "8n")
}
export function playEb4() {
    synth.triggerAttackRelease("Eb4", "8n")
}
export function playE4() {
    synth.triggerAttackRelease("E4", "8n")
}
export function playF4() {
    synth.triggerAttackRelease("F4", "8n")
}
export function playGb4() {
    synth.triggerAttackRelease("Gb4", "8n")
}
export function playG4() {
    synth.triggerAttackRelease("G4", "8n")
}
export function playAb4() {
    synth.triggerAttackRelease("Ab4", "8n")
}
export function playA4() {
    synth.triggerAttackRelease("A4", "8n")
}
export function playBb4() {
    synth.triggerAttackRelease("Bb4", "8n")
}
export function playB4() {
    synth.triggerAttackRelease("B4", "8n")
}
export function playC5() {
    synth.triggerAttackRelease("C5", "8n")
}

export function playNote(event) {
    if (event.keyCode === 65) {
        playC4()
    }
    if (event.keyCode === 87) {
        playDb4()
    }
    if (event.keyCode === 83) {
        playD4()
    }
    if (event.keyCode === 69) {
        playEb4()
    }
    if (event.keyCode === 68) {
        playE4()
    }
    if (event.keyCode === 70) {
        playF4()
    }
    if (event.keyCode === 84) {
        playGb4()
    }
    if (event.keyCode === 71) {
        playG4()
    }
    if (event.keyCode === 89) {
        playAb4()
    }
    if (event.keyCode === 72) {
        playA4()
    }
    if (event.keyCode === 85) {
        playBb4()
    }
    if (event.keyCode === 74) {
        playB4()
    }
    if (event.keyCode === 75) {
        playC5()
    }
}

export function playTwinkleTwinkle() {
    const now = Tone.context.currentTime
    synth.triggerAttackRelease("Db4", "4n", now)
    synth.triggerAttackRelease("Db4", "4n", now + .55)
    synth.triggerAttackRelease("Ab4", "4n", now + 1.1)
    synth.triggerAttackRelease("Ab4", "4n", now + 1.65)
    synth.triggerAttackRelease("Bb4", "4n", now + 2.2)
    synth.triggerAttackRelease("Bb4", "4n", now + 2.75)
    synth.triggerAttackRelease("Ab4", "2n", now + 3.3)
    synth.triggerAttackRelease("Gb4", "4n", now + 4.4)
    synth.triggerAttackRelease("Gb4", "4n", now + 4.95)
    synth.triggerAttackRelease("F4", "4n", now + 5.5 )
    synth.triggerAttackRelease("F4", "4n", now + 6.05)
    synth.triggerAttackRelease("Eb4", "4n", now + 6.6)
    synth.triggerAttackRelease("Eb4", "4n", now + 7.15)
    synth.triggerAttackRelease("Db4", "2n", now + 7.7)
}

export function playPolyphonicExample() {
    const now = Tone.context.currentTime
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    synth.triggerAttack("D4", now);
    synth.triggerAttack("F4", now + 0.5);
    synth.triggerAttack("A4", now + 1);
    synth.triggerAttack("C5", now + 1.5);
    synth.triggerAttack("E5", now + 2);
    synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 2.5);
}
