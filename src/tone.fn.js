import * as Tone from 'tone'

let synth

const chooseInstrument = (voice) => {
    if (voice === 'piano') {
        synth = new Tone.Synth().toDestination()
    } else if (voice === 'trumpet') {
        synth = new Tone.MonoSynth().toDestination()
    } else if (voice === 'spaceship') {
        synth = new Tone.MembraneSynth().toDestination()
    }
}

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
const C5 = "#52ff33"
const Db5 = "#33ffee"
const D5 = "#3396ff"
const Eb5 = "#3633ff"
const E5 = "#5e1aff"
// const F5 = "#7000cc"
// const Gb5 = "#b30000"
// const G5 = "#e60000"
// const Ab5 = "#ff1a1a"
// const A5 = "#ff8133"
// const Bb5 = "#fff133"
// const B5 = "#adff33"
// const C6 = "#7dff66"

export function playTwinkleTwinkle(instrument) {
    chooseInstrument(instrument)

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
    }, 11800)
}

export function playTheEntertainer(instrument) {
    chooseInstrument(instrument)

    const now = Tone.context.currentTime

    synth.triggerAttackRelease("D4", "16n", now)
    document.getElementById('D4').style.backgroundColor=D4
    setTimeout(function(){
        document.getElementById('D4').style=null
    }, 150)

    synth.triggerAttackRelease("Eb4", "16n", now + .25)
    setTimeout(function(){
        document.getElementById('Eb4').style.backgroundColor=Eb4
    }, 250)
    setTimeout(function(){
        document.getElementById('Eb4').style=null
    }, 400)


    synth.triggerAttackRelease("E4", "16n", now + .5)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 500)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 650)

    synth.triggerAttackRelease("C5", "8n", now + .75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 1150)

    synth.triggerAttackRelease("E4", "16n", now + 1.25)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 1250)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 1400)

    synth.triggerAttackRelease("C5", "8n", now + 1.5)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 1500)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 1900)

    synth.triggerAttackRelease("E4", "16n", now + 2)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 2000)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 2150)

    synth.triggerAttackRelease("C5", "4n.", now + 2.25)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 2250)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 3650)

    synth.triggerAttackRelease("C5", "16n", now + 3.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 3750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 3900)

    synth.triggerAttackRelease("D5", "16n", now + 4)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 4000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 4150)

    synth.triggerAttackRelease("Eb5", "16n", now + 4.25)
    setTimeout(function(){
        document.getElementById('Eb5').style.backgroundColor=Eb5
    }, 4250)
    setTimeout(function(){
        document.getElementById('Eb5').style=null
    }, 4400)

    synth.triggerAttackRelease("E5", "16n", now + 4.5)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 4500)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 4650)

    synth.triggerAttackRelease("C5", "16n", now + 4.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 4750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 4900)

    synth.triggerAttackRelease("D5", "16n", now + 5)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 5000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 5150)

    synth.triggerAttackRelease("E5", "8n", now + 5.25)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 5250)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 5650)

    synth.triggerAttackRelease("B4", "16n", now + 5.75)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 5750)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 5900)

    synth.triggerAttackRelease("D5", "8n", now + 6)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 6000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 6400)

    synth.triggerAttackRelease("C5", "4n.", now + 6.5)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 6500)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 7900)

    synth.triggerAttackRelease("D4", "16n", now + 8)
    setTimeout(function(){
        document.getElementById('D4').style.backgroundColor=D4
    }, 8000)
    setTimeout(function(){
        document.getElementById('D4').style=null
    }, 8150)

    synth.triggerAttackRelease("Eb4", "16n", now + 8.25)
    setTimeout(function(){
        document.getElementById('Eb4').style.backgroundColor=Eb4
    }, 8250)
    setTimeout(function(){
        document.getElementById('Eb4').style=null
    }, 8400)


    synth.triggerAttackRelease("E4", "16n", now + 8.5)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 8500)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 8650)

    synth.triggerAttackRelease("C5", "8n", now + 8.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 8750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 9150)

    synth.triggerAttackRelease("E4", "16n", now + 9.25)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 9250)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 9400)

    synth.triggerAttackRelease("C5", "8n", now + 9.5)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 9500)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 9900)

    synth.triggerAttackRelease("E4", "16n", now + 10)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 10000)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 10150)

    synth.triggerAttackRelease("C5", "4n.", now + 10.25)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 10250)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 11650)

    synth.triggerAttackRelease("A4", "16n", now + 12)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 12000)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 12150)

    synth.triggerAttackRelease("G4", "16n", now + 12.25)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 12250)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 12400)

    synth.triggerAttackRelease("Gb4", "16n", now + 12.5)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 12500)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 12650)

    synth.triggerAttackRelease("A4", "16n", now + 12.75)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 12750)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 12900)

    synth.triggerAttackRelease("C5", "16n", now + 13)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 13000)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 13150)

    synth.triggerAttackRelease("E5", "8n", now + 13.25)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 13250)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 13650)

    synth.triggerAttackRelease("D5", "16n", now + 13.75)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 13750)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 13900)

    synth.triggerAttackRelease("C5", "16n", now + 14)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 14000)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 14150)

    synth.triggerAttackRelease("A4", "16n", now + 14.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 14250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 14400)

    synth.triggerAttackRelease("D5", "4n.", now + 14.5)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 14500)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 15900)

    synth.triggerAttackRelease("D4", "16n", now + 16)
    setTimeout(function(){
        document.getElementById('D4').style.backgroundColor=D4
    }, 16000)
    setTimeout(function(){
        document.getElementById('D4').style=null
    }, 16150)

    synth.triggerAttackRelease("Eb4", "16n", now + 16.25)
    setTimeout(function(){
        document.getElementById('Eb4').style.backgroundColor=Eb4
    }, 16250)
    setTimeout(function(){
        document.getElementById('Eb4').style=null
    }, 16400)


    synth.triggerAttackRelease("E4", "16n", now + 16.5)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 16500)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 16650)

    synth.triggerAttackRelease("C5", "8n", now + 16.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 16750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 17150)

    synth.triggerAttackRelease("E4", "16n", now + 17.25)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 17250)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 17400)

    synth.triggerAttackRelease("C5", "8n", now + 17.5)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 17500)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 17900)

    synth.triggerAttackRelease("E4", "16n", now + 18)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 18000)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 18150)

    synth.triggerAttackRelease("C5", "4n.", now + 18.25)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 18250)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 19650)

    synth.triggerAttackRelease("C5", "16n", now + 19.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 19750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 19900)

    synth.triggerAttackRelease("D5", "16n", now + 20)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 20000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 20150)

    synth.triggerAttackRelease("Eb5", "16n", now + 20.25)
    setTimeout(function(){
        document.getElementById('Eb5').style.backgroundColor=Eb5
    }, 20250)
    setTimeout(function(){
        document.getElementById('Eb5').style=null
    }, 20400)

    synth.triggerAttackRelease("E5", "16n", now + 20.5)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 20500)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 20650)

    synth.triggerAttackRelease("C5", "16n", now + 20.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 20750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 20900)

    synth.triggerAttackRelease("D5", "16n", now + 21)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 21000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 21150)

    synth.triggerAttackRelease("E5", "8n", now + 21.25)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 21250)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 21650)

    synth.triggerAttackRelease("B4", "16n", now + 21.75)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 21750)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 21900)

    synth.triggerAttackRelease("D5", "8n", now + 22)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 22000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 22400)

    synth.triggerAttackRelease("C5", "4n.", now + 22.5)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 22500)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 23900)

    synth.triggerAttackRelease("C5", "16n", now + 24)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 24000)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 24150)

    synth.triggerAttackRelease("D5", "16n", now + 24.25)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 24250)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 24400)


    synth.triggerAttackRelease("E5", "16n", now + 24.5)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 24500)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 24650)

    synth.triggerAttackRelease("C5", "16n", now + 24.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 24750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 24900)

    synth.triggerAttackRelease("D5", "16n", now + 25)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 25000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 25150)

    synth.triggerAttackRelease("E5", "8n", now + 25.25)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 25250)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 25650)

    synth.triggerAttackRelease("C5", "16n", now + 25.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 25750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 25900)

    synth.triggerAttackRelease("D5", "16n", now + 26)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 26000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 26150)

    synth.triggerAttackRelease("C5", "16n", now + 26.25)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 26250)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 26400)

    synth.triggerAttackRelease("E5", "16n", now + 26.5)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 26500)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 26650)

    synth.triggerAttackRelease("C5", "16n", now + 26.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 26750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 26900)

    synth.triggerAttackRelease("D5", "16n", now + 27)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 27000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 27150)

    synth.triggerAttackRelease("E5", "8n", now + 27.25)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 27250)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 27650)

    synth.triggerAttackRelease("C5", "16n", now + 27.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 27750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 27900)

    synth.triggerAttackRelease("D5", "16n", now + 28)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 28000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 28150)

    synth.triggerAttackRelease("C5", "16n", now + 28.25)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 28250)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 28400)

    synth.triggerAttackRelease("E5", "8n", now + 28.5)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 28500)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 28900)

    synth.triggerAttackRelease("E5", "8n", now + 29)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 29000)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 29400)

    synth.triggerAttackRelease("E5", "16n", now + 29.5)
    setTimeout(function(){
        document.getElementById('E5').style.backgroundColor=E5
    }, 29500)
    setTimeout(function(){
        document.getElementById('E5').style=null
    }, 29650)

    synth.triggerAttackRelease("D5", "8n", now + 29.75)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 29750)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 30150)

    synth.triggerAttackRelease("C5", "4n", now + 30.25)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 30250)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 31400)

    synth.triggerAttackRelease("C4", "8n", now + 31.5)
    setTimeout(function(){
        document.getElementById('C4').style.backgroundColor=C4
    }, 31500)
    setTimeout(function(){
        document.getElementById('C4').style=null
    }, 31900)
}

export function playDeColores(instrument) {
    chooseInstrument(instrument)

    const now = Tone.context.currentTime

    synth.triggerAttackRelease("A4", "4n.", now)
    document.getElementById('A4').style.backgroundColor=A4
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 1150)

    synth.triggerAttackRelease("G4", "16n", now + 1.25)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 1250)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 1400)

    synth.triggerAttackRelease("G4", "16n", now + 1.5)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 1500)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 1650)

    synth.triggerAttackRelease("Gb4", "8n.", now + 1.75)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 1750)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 2400)

    synth.triggerAttackRelease("Gb4", "16n", now + 2.5)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 2500)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 2650)

    synth.triggerAttackRelease("G4", "16n", now + 2.75)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 2750)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 2900)

    synth.triggerAttackRelease("A4", "16n", now + 3)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 3000)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 3150)

    synth.triggerAttackRelease("A4", "16n", now + 3.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 3250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 3400)

    synth.triggerAttackRelease("A4", "16n", now + 3.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 3500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 3650)

    synth.triggerAttackRelease("A4", "16n", now + 3.75)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 3750)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 3900)

    synth.triggerAttackRelease("G4", "16n", now + 4)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 4000)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 4150)

    synth.triggerAttackRelease("Gb4", "16n", now + 4.25)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 4250)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 4400)

    synth.triggerAttackRelease("A4", "16n", now + 4.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 4500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 4650)

    synth.triggerAttackRelease("A4", "16n", now + 4.75)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 4750)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 4900)

    synth.triggerAttackRelease("A4", "16n", now + 5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 5000)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 5150)

    synth.triggerAttackRelease("A4", "16n", now + 5.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 5250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 5400)

    synth.triggerAttackRelease("G4", "16n", now + 5.5)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 5500)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 5650)

    synth.triggerAttackRelease("Gb4", "16n", now + 5.75)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 5750)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 5900)

    synth.triggerAttackRelease("A4", "16n", now + 6)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 6000)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 6150)

    synth.triggerAttackRelease("G4", "4n.", now + 6.25)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 6250)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 7300)


    synth.triggerAttackRelease("G4", "4n.", now + 7.5)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 7500)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 8650)

    synth.triggerAttackRelease("Gb4", "16n", now + 8.75)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 8750)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 8900)

    synth.triggerAttackRelease("Gb4", "16n", now + 9)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 9000)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 9150)

    synth.triggerAttackRelease("E4", "8n.", now + 9.25)
    setTimeout(function(){
        document.getElementById('E4').style.backgroundColor=E4
    }, 9250)
    setTimeout(function(){
        document.getElementById('E4').style=null
    }, 9900)

    synth.triggerAttackRelease("G4", "16n", now + 10)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 10000)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 10150)

    synth.triggerAttackRelease("A4", "16n", now + 10.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 10250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 10400)

    synth.triggerAttackRelease("B4", "16n", now + 10.5)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 10500)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 10650)

    synth.triggerAttackRelease("B4", "16n", now + 10.75)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 10750)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 10900)

    synth.triggerAttackRelease("B4", "16n", now + 11)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 11000)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 11150)

    synth.triggerAttackRelease("B4", "16n", now + 11.25)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 11250)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 11400)

    synth.triggerAttackRelease("A4", "16n", now + 11.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 11500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 11650)

    synth.triggerAttackRelease("G4", "16n", now + 11.75)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 11750)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 11900)

    synth.triggerAttackRelease("B4", "16n", now + 12)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 12000)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 12150)

    synth.triggerAttackRelease("B4", "16n", now + 12.25)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 12250)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 12400)

    synth.triggerAttackRelease("B4", "16n", now + 12.5)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 12500)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 12650)

    synth.triggerAttackRelease("B4", "16n", now + 12.75)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 12750)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 12900)

    synth.triggerAttackRelease("A4", "16n", now + 13)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 13000)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 13150)

    synth.triggerAttackRelease("G4", "16n", now + 13.25)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 13250)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 13400)

    synth.triggerAttackRelease("B4", "16n", now + 13.5)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 13500)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 13650)

    synth.triggerAttackRelease("A4", "4n.", now + 13.75)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 13750)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 14800)


    synth.triggerAttackRelease("A4", "4n.", now + 15)
    setTimeout(function(){
    document.getElementById('A4').style.backgroundColor=A4
    }, 15000)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 16150)

    synth.triggerAttackRelease("G4", "16n", now + 16.25)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 16250)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 16400)

    synth.triggerAttackRelease("G4", "16n", now + 16.5)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 16500)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 16650)

    synth.triggerAttackRelease("Gb4", "8n.", now + 16.75)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 16750)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 17400)

    synth.triggerAttackRelease("Gb4", "16n", now + 17.5)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 17500)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 17650)

    synth.triggerAttackRelease("G4", "16n", now + 17.75)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 17750)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 17900)

    synth.triggerAttackRelease("A4", "16n", now + 18)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 18000)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 18150)

    synth.triggerAttackRelease("A4", "16n", now + 18.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 18250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 18400)

    synth.triggerAttackRelease("A4", "16n", now + 18.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 18500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 18650)

    synth.triggerAttackRelease("A4", "16n", now + 18.75)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 18750)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 18900)

    synth.triggerAttackRelease("G4", "16n", now + 19)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 19000)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 19150)

    synth.triggerAttackRelease("Gb4", "16n", now + 19.25)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 19250)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 19400)

    synth.triggerAttackRelease("A4", "16n", now + 19.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 19500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 19650)

    synth.triggerAttackRelease("A4", "16n.", now + 19.75)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 19750)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 20025)

    synth.triggerAttackRelease("A4", "32n", now + 20.125)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 20125)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 20150)

    synth.triggerAttackRelease("A4", "16n", now + 20.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 20250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 20400)

    synth.triggerAttackRelease("B4", "16n", now + 20.5)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 20500)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 20650)

    synth.triggerAttackRelease("C5", "16n", now + 20.75)
    setTimeout(function(){
        document.getElementById('C5').style.backgroundColor=C5
    }, 20750)
    setTimeout(function(){
        document.getElementById('C5').style=null
    }, 20900)

    synth.triggerAttackRelease("B4", "4n", now + 21)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 21000)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 21900)


    synth.triggerAttackRelease("G4", "16n", now + 22)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 22000)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 22150)

    synth.triggerAttackRelease("A4", "16n", now + 22.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 22250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 22400)

    synth.triggerAttackRelease("B4", "16n", now + 22.5)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 22500)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 22650)

    synth.triggerAttackRelease("B4", "16n", now + 22.75)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 22750)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 22900)

    synth.triggerAttackRelease("B4", "16n", now + 23)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 23000)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 23150)

    synth.triggerAttackRelease("B4", "16n", now + 23.25)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 23250)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 23400)

    synth.triggerAttackRelease("Db5", "16n", now + 23.5)
    setTimeout(function(){
        document.getElementById('Db5').style.backgroundColor=Db5
    }, 23500)
    setTimeout(function(){
        document.getElementById('Db5').style=null
    }, 23650)

    synth.triggerAttackRelease("B4", "16n", now + 23.75)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 23750)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 23900)

    synth.triggerAttackRelease("B4", "16n", now + 24)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 24000)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 24150)

    synth.triggerAttackRelease("A4", "16n", now + 24.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 24250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 24400)

    synth.triggerAttackRelease("A4", "16n", now + 24.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 24500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 24650)

    synth.triggerAttackRelease("A4", "16n", now + 24.75)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 24750)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 24900)

    synth.triggerAttackRelease("B4", "16n", now + 25)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 25000)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 25150)

    synth.triggerAttackRelease("A4", "16n", now + 25.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 25250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 25400)

    synth.triggerAttackRelease("A4", "16n", now + 25.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 25500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 25650)

    synth.triggerAttackRelease("G4", "16n.", now + 25.75)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 25750)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 26025)

    synth.triggerAttackRelease("A4", "32n", now + 26.125)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 26125)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 26150)

    synth.triggerAttackRelease("B4", "16n", now + 26.25)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 26250)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 26400)

    synth.triggerAttackRelease("A4", "16n", now + 26.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 26500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 26650)

    synth.triggerAttackRelease("G4", "16n", now + 26.75)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 26750)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 26900)

    synth.triggerAttackRelease("Gb4", "4n", now + 27)
    setTimeout(function(){
        document.getElementById('Gb4').style.backgroundColor=Gb4
    }, 27000)
    setTimeout(function(){
        document.getElementById('Gb4').style=null
    }, 27900)


    synth.triggerAttackRelease("G4", "16n", now + 28)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 28000)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 28150)

    synth.triggerAttackRelease("A4", "16n", now + 28.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 28250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 28400)

    synth.triggerAttackRelease("B4", "16n", now + 28.5)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 28500)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 28650)

    synth.triggerAttackRelease("B4", "16n", now + 28.75)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 28750)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 28900)

    synth.triggerAttackRelease("B4", "16n", now + 29)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 29000)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 29150)

    synth.triggerAttackRelease("B4", "16n", now + 29.25)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 29250)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 29400)

    synth.triggerAttackRelease("Db5", "16n", now + 29.5)
    setTimeout(function(){
        document.getElementById('Db5').style.backgroundColor=Db5
    }, 29500)
    setTimeout(function(){
        document.getElementById('Db5').style=null
    }, 29650)

    synth.triggerAttackRelease("B4", "16n", now + 29.75)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 29750)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 29900)

    synth.triggerAttackRelease("B4", "16n", now + 30)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 30000)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 30150)

    synth.triggerAttackRelease("A4", "16n", now + 30.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 30250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 30400)

    synth.triggerAttackRelease("A4", "16n", now + 30.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 30500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 30650)

    synth.triggerAttackRelease("A4", "16n", now + 30.75)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 30750)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 30900)

    synth.triggerAttackRelease("B4", "16n", now + 31)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 31000)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 31150)

    synth.triggerAttackRelease("A4", "16n", now + 31.25)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 31250)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 31400)

    synth.triggerAttackRelease("A4", "16n", now + 31.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 31500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 31650)

    synth.triggerAttackRelease("G4", "16n.", now + 31.75)
    setTimeout(function(){
        document.getElementById('G4').style.backgroundColor=G4
    }, 31750)
    setTimeout(function(){
        document.getElementById('G4').style=null
    }, 32025)

    synth.triggerAttackRelease("A4", "32n", now + 32.125)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 32125)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 32150)

    synth.triggerAttackRelease("B4", "16n", now + 32.25)
    setTimeout(function(){
        document.getElementById('B4').style.backgroundColor=B4
    }, 32250)
    setTimeout(function(){
        document.getElementById('B4').style=null
    }, 32400)

    synth.triggerAttackRelease("A4", "16n", now + 32.5)
    setTimeout(function(){
        document.getElementById('A4').style.backgroundColor=A4
    }, 32500)
    setTimeout(function(){
        document.getElementById('A4').style=null
    }, 32650)

    synth.triggerAttackRelease("Db5", "16n", now + 32.75)
    setTimeout(function(){
        document.getElementById('Db5').style.backgroundColor=Db5
    }, 32750)
    setTimeout(function(){
        document.getElementById('Db5').style=null
    }, 32900)

    synth.triggerAttackRelease("D5", "4n", now + 33)
    setTimeout(function(){
        document.getElementById('D5').style.backgroundColor=D5
    }, 33000)
    setTimeout(function(){
        document.getElementById('D5').style=null
    }, 34000)
}
