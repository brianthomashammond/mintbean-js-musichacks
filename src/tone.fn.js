import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination()
const C4 = "#28ff00"
const Db4 = "#00ffe8"
const D4 = "#007cff"
const Eb4 = "#0500ff"
const E4 = "#4500ea"
const F4 = "#57009e"
const Gb4 = "#740000"
const G4 = "#b30000"
const Ab4 = "#ee0000"
const A4 = "#ff6300"
const Bb4 = "#ffec00"
const B4 = "#99ff00"
const C5 = "#00ffe8"

export function playTwinkleTwinkle() {
    const now = Tone.context.currentTime

    synth.triggerAttackRelease("Db4", "8n.", now)
    document.getElementById('Db4').style.backgroundColor=Db4
    setTimeout(function(){
        document.getElementById('Db4').style=null
    }, 650)

    synth.triggerAttackRelease("Db4", "8n.", now + .75)
    setTimeout(function(){
        document.getElementById('Db4').style.backgroundColor=Db4
    }, 750)
    setTimeout(function(){
        document.getElementById('Db4').style=null
    }, 1400)

    synth.triggerAttackRelease("Ab4", "8n.", now + 1.5)
    setTimeout(function(){
        document.getElementById("Ab4").style.backgroundColor=Ab4
    }, 1500)
    setTimeout(function(){
        document.getElementById("Ab4").style=null
    }, 2150)

    synth.triggerAttackRelease("Ab4", "8n.", now + 2.25)
    setTimeout(function(){
        document.getElementById("Ab4").style.backgroundColor=Ab4
    }, 2250)
    setTimeout(function(){
        document.getElementById("Ab4").style=null
    }, 2900)

    synth.triggerAttackRelease("Bb4", "8n.", now + 3)
    setTimeout(function(){
        document.getElementById("Bb4").style.backgroundColor=Bb4
    }, 3000)
    setTimeout(function(){
        document.getElementById("Bb4").style=null
    }, 3650)

    synth.triggerAttackRelease("Bb4", "8n.", now + 3.75)
    setTimeout(function(){
        document.getElementById("Bb4").style.backgroundColor=Bb4
    }, 3750)
    setTimeout(function(){
        document.getElementById("Bb4").style=null
    }, 4400)

    synth.triggerAttackRelease("Ab4", "4n.", now + 4.5)
    setTimeout(function(){
        document.getElementById("Ab4").style.backgroundColor=Ab4
    }, 4500)
    setTimeout(function(){
        document.getElementById("Ab4").style=null
    }, 5900)

    synth.triggerAttackRelease("Gb4", "8n.", now + 6)
    setTimeout(function(){
        document.getElementById("Gb4").style.backgroundColor=Gb4
    }, 6000)
    setTimeout(function(){
        document.getElementById("Gb4").style=null
    }, 6650)

    synth.triggerAttackRelease("Gb4", "8n.", now + 6.75)
    setTimeout(function(){
        document.getElementById("Gb4").style.backgroundColor=Gb4
    }, 6750)
    setTimeout(function(){
        document.getElementById("Gb4").style=null
    }, 7400)

    synth.triggerAttackRelease("F4", "8n.", now + 7.5)
    setTimeout(function(){
        document.getElementById("F4").style.backgroundColor=F4
    }, 7500)
    setTimeout(function(){
        document.getElementById("F4").style=null
    }, 8150)

    synth.triggerAttackRelease("F4", "8n.", now + 8.25)
    setTimeout(function(){
        document.getElementById("F4").style.backgroundColor=F4
    }, 8250)
    setTimeout(function(){
        document.getElementById("F4").style=null
    }, 8900)

    synth.triggerAttackRelease("Eb4", "8n.", now + 9)
    setTimeout(function(){
        document.getElementById("Eb4").style.backgroundColor=Eb4
    }, 9000)
    setTimeout(function(){
        document.getElementById("Eb4").style=null
    }, 9650)

    synth.triggerAttackRelease("Eb4", "8n.", now + 9.75)
    setTimeout(function(){
        document.getElementById("Eb4").style.backgroundColor=Eb4
    }, 9750)
    setTimeout(function(){
        document.getElementById("Eb4").style=null
    }, 10400)

    synth.triggerAttackRelease("Db4", "4n.", now + 10.5)
    setTimeout(function(){
        document.getElementById("Db4").style.backgroundColor=Db4
    }, 10500)
    setTimeout(function(){
        document.getElementById("Db4").style=null
    }, 11900)
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
