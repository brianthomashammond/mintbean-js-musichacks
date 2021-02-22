import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination()

export function playTwinkleTwinkle() {
    const now = Tone.context.currentTime
    synth.triggerAttackRelease("Db4", "8n.", now)
    synth.triggerAttackRelease("Db4", "8n.", now + .75)
    synth.triggerAttackRelease("Ab4", "8n.", now + 1.5)
    synth.triggerAttackRelease("Ab4", "8n.", now + 2.25)
    synth.triggerAttackRelease("Bb4", "8n.", now + 3)
    synth.triggerAttackRelease("Bb4", "8n.", now + 3.75)
    synth.triggerAttackRelease("Ab4", "4n.", now + 4.5)
    synth.triggerAttackRelease("Gb4", "8n.", now + 6)
    synth.triggerAttackRelease("Gb4", "8n.", now + 6.75)
    synth.triggerAttackRelease("F4", "8n.", now + 7.5)
    synth.triggerAttackRelease("F4", "8n.", now + 8.25)
    synth.triggerAttackRelease("Eb4", "8n.", now + 9)
    synth.triggerAttackRelease("Eb4", "8n.", now + 9.75)
    synth.triggerAttackRelease("Db4", "4n.", now + 10.5)
}

export function playTheEntertainer() {
    const now = Tone.context.currentTime
    synth.triggerAttackRelease("D6", "16n", now);
    synth.triggerAttackRelease("E6", "16n", now + 0.25)
    synth.triggerAttackRelease("C6", "16n", now + 0.5)
    synth.triggerAttackRelease("A5", "8n", now + 0.75)
    synth.triggerAttackRelease("B5", "16n", now + 1.25)
    synth.triggerAttackRelease("G5", "8n", now + 1.5)
    synth.triggerAttackRelease("D5", "16n", now + 2);
    synth.triggerAttackRelease("E5", "16n", now + 2.25)
    synth.triggerAttackRelease("C5", "16n", now + 2.5)
    synth.triggerAttackRelease("A4", "8n", now + 2.75)
    synth.triggerAttackRelease("B4", "16n", now + 3.25)
    synth.triggerAttackRelease("G4", "8n", now + 3.5)
    synth.triggerAttackRelease("D4", "16n", now + 4);
    synth.triggerAttackRelease("E4", "16n", now + 4.25)
    synth.triggerAttackRelease("C4", "16n", now + 4.5)
    synth.triggerAttackRelease("A3", "8n", now + 4.75)
    synth.triggerAttackRelease("B3", "16n", now + 5.25)
    synth.triggerAttackRelease("A3", "16n", now + 5.5)
    synth.triggerAttackRelease("Ab3", "16n", now + 5.75)
    synth.triggerAttackRelease("G3", "8n", now + 6)
    synth.triggerAttackRelease("G5", "8n", now+ 7)
    synth.triggerAttackRelease("D4", "16n", now+ 7.5)
    synth.triggerAttackRelease("Eb4", "16n", now+ 7.75)
    synth.triggerAttackRelease("E4", "16n", now+ 8)
    synth.triggerAttackRelease("C5", "8n", now+ 8.25)
    synth.triggerAttackRelease("E4", "16n", now+ 8.75)
    synth.triggerAttackRelease("C5", "8n", now+ 9)
    synth.triggerAttackRelease("E4", "16n", now+ 9.5)
    synth.triggerAttackRelease("C5", "4n.", now+ 9.75)
    synth.triggerAttackRelease("C5", "16n", now+ 11.25)
    synth.triggerAttackRelease("D5", "16n", now+ 11.5)
    synth.triggerAttackRelease("Eb5", "16n", now+ 11.75)
}
