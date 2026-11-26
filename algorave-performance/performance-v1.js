//277
setcpm(120/4)

const pianoGain = slider(0.552,0,1)
const celloGain = slider(0.5,0,1)
const hiGain = slider(0.5,0,1)
const loGain = slider(0.762,0,1)
const arpGain = slider(0.641,0,1)
const drumGain = slider(0.642,0,1)

const chords = chord(`D- Bb F@2 D- Bb G@2 D- A-7 G@2 D- C G-@2`).slow(16)
const chordsx = chord(`Bbadd9 Dadd9 A- G G- Csus F D-`).slow(16)

const progressionx = n("0@2 [1,2] 0 - 0 [1,2]@2")
  .set(chords).voicing()

const progression = chords.voicing()

// all(x => x.punchcard({
//   vertical: 1,
//   flipTime: 1,
//   playhead: 0.9,
//   fill: 1,
//   cycles: 2,
//   overscan: 0
// }))

// all(x => x.scope({
//   color: "white",
//   thickness: 3,
//   scale: 0.45,
//   pos: 0.5,
//   align: 1,
//   trigger: 0
// }))


$piano: progression
  .s("piano")
  .transpose("<0 -12 -12@2>")
  .room(1).roomsize(7)
  .lpf(slider(0,0,2000))
  .gain(pianoGain)
  .orbit(3)
  .color("white")


_$cello: n("<0>*1").set(chords).voicing()
  .s("gm_cello:1").gain(1.3).lpf(1000)
  .transpose("<0 -12 -12@2>")
  .room(1).roomsize(7)
  .gain(celloGain)
  .orbit(4)
  .color("mediumpurple")


_$superHi: n("<0>*1").set(chords).voicing()
  .s("supersaw").gain(1.4).lpf(500)
  .attack(0.05)
  .transpose("<0 -12 -12@2>")
  .gain(hiGain)
  .orbit(5)
  .color("deepskyblue")


_$superLo: n("<0>*1").set(chords).voicing()
  .s("supersaw").gain(1.3).lpf(500)
  .attack(0.05)
  .transpose("<-12 -24@3>")
  .gain(loGain)
  .orbit(6)
  .color("royalblue")


// irand(9).seg(12).rib(42,4)
// "<0 4 7 6 5 8>*12"

_$arp: n("<0 4 7 6 5 8>*12")
  .set(chords).voicing().s("supersaw")
  .transpose(-12).lpf(300).lpenv(3)
  .room(1)
  .gain(arpGain)
  .orbit(7)
  .color("pink")


// irand(9).seg(12).rib(17,4)
// "<7 6 5 4 3 2>*12"

_$arpHarm: n("<7 6 5 4 3 2>*12")
  .set(chords).voicing().s("supersaw")
  .transpose(0).lpf(300).lpenv(3)
  .room(1)
  .gain(arpGain)
  .orbit(8)
  .color("cyan")


_$bdrum: s("bd")
  .lpf(300)
  .room(1).roomsize(8)
  .mask("<1 0 0 0>")
  .gain(drumGain)
  .bank("spacedrum")
  .orbit(1)
  .color("crimson")


_$drums: stack(
  s("bd:2").struct("x - x x - x - x")
    .lpf(500).gain(0.8).color("orange"),

  s("bd:2").struct("- x - - x - x -")
    .lpf(900).gain(0.6)
    .sometimesBy(0.3, x => x.speed(0.8))
    .color("gold"),

  // s("[- sd:2]*2")
  //   .lpf(900).gain(0.65).color("magenta"),

).bank("yamahatg33")
  .gain(drumGain)
  .orbit(2)


const kickGain = slider(0.8,0,1)
const bassGain = slider(0.35,0,1)
const chGain = slider(0.4,0,1)
const ohGain = slider(0.35,0,1)
const snareGain = slider(0.45,0,1)
const percGain = slider(0.3,0,1)
const hypnoGain = slider(0.25,0,1)
const synthGain = slider(0.3,0,1)

//dont forget 140 bpm
_$kick: s("techno_kicks").n(1)
  .struct(`<
    [x*4]!15
    [x x x [x x]]

    [x*4]!7
    [x x - x]
    [x*4]!6
    [x x [x x] x]
    [x x x -]

    [x*4]!4
    [x x x [x x]]
    [x*4]!2
    [x [x x] x x]
    [x*4]!4
    [x x [x x] [x x]]
    [x*4]!2
    [x - x -]

    [x*4]!4
    [x x x [x x]]
    [x*4]!2
    [x x [x x] [x x]]
    [x*4]!2
    [x [x x] x [x x]]
    [x*4]
    [x x [x x x] [x x]]
    [x*8]
    [x*16]
    [-]
  >`)
  .gain(kickGain)
  .orbit(9)

//dont forget 140 bpm
_$bass: note("<d2!7 [d2 d2 d2 d3] d2!7 [d2 d2 f2 c2]>")
  .s("sawtooth")
  .struct(`<
    [- x x x]*4!15
    [[- x x x]*3 [- x - x]]

    [- x x x]*4!7
    [- x x x - x x x x x x x - x x x]
    [- x x x]*4!6
    [[- x x x]*2 [- x - x] [- x x x]]
    [[- x x x]*3 [x x x x]]

    [- x x x]*4!4
    [[- x x x]*3 [- x - x]]
    [- x x x]*4!2
    [[- x x x] [- x - x] [- x x x]*2]
    [- x x x]*4!4
    [[- x x x]*2 [- x - x]*2]
    [- x x x]*4!2
    [- x x x x x x x - x x x x x x x]

    [- x x x]*4!4
    [[- x x x]*3 [- x - x]]
    [- x x x]*4!2
    [[- x x x] [- x - x]*3]
    [- x x x]*4!2
    [[- x x x] [- x - x] [- x x x] [- x - x]]
    [- x x x]*4
    [[- x x x]*2 [- x - -] [- x - x]]
    [- x]*8
    [-]
    [-]
  >`)
  .lpf(180)
  .lpq(2)
  .lpenv(1.5)
  .attack(0.005)
  .decay(0.12)
  .sustain(0)
  .release(0.05)
  .gain(bassGain)
  .orbit(10)


_$ch: s("closed_hi-hats").n(3)
  .struct(`<
    [- x]*4!3
    [- x - x - x [x x] x]

    [- x]*4!2
    [- x x x - x - x]
    [- x - x - x x x]

    [- x]*4!3
    [- x - x x x - x]

    [- x]*4!2
    [- x x x - x [x x] x]
    [- x - x - x ~ ~]
  >`)
  .gain("0.625 1 0.5 0.875")
  .gain(chGain)
  .hpf(3000)
  .pan(sine.range(0.35,0.65).slow(8))
  .orbit(11)


_$oh: s("open_hi-hats").n(2)
  .struct(`<
    [- x]*2!7
    [- x - [x x]]

    [- x]*4!6
    [- x - x - - - x]
    [- x - ~]

    [- x]*4!4
    [- x - x - x - [x x]]
    [- x]*4!2
    [- x - x - - - x]

    [- x]*4!4
    [- x - x - [x x] - x]
    [- x - x x x - x]
    [- x - x - x - -]
    [-]
  >`)
  .hpf(1500)
  .lpf(sine.range(5000,14000).slow(16))
  .gain(ohGain)
  .pan(sine.range(0.4,0.6).slow(8))
  .orbit(12)


_$snare: s("hard_snares").n(2)
  .struct(`<
    [- x]*2!7
    [- x - [x x]]

    [- x]*2!6
    [- x - [x x]]
    [- x - x]

    [- x]*2!4
    [- x - [x x]]
    [- x]*2!2
    [- x [- x] [x x]]

    [- x]*2!3
    [- x - [x x]]
    [- x [x x] [x x]]
    [[- x]*4]
    [[- x]*8]
    [-]
  >`)
  .hpf(200)
  .lpf(sine.range(2500,10000).slow(16))
  .room(0.25)
  .gain(snareGain)
  .orbit(13)


_$perc: s("mixed_percussion_-_high").n(7)
  .struct(`<
    [x(5,16)]!7
    [x(7,16)]

    [x(5,16,2)]!6
    [x(7,16,3)]
    [x(3,16)]

    [x(5,16)]!4
    [x(7,16)]!3
    [x(9,16)]

    [x(5,16,3)]!4
    [x(7,16,2)]!2
    [x(11,16)]
    [-]
  >`)
  .hpf(500)
  .lpf(sine.range(1500,6000).slow(8))
  .delay(0.25)
  .delayfeedback(0.4)
  .room(0.3)
  .gain(percGain)
  .pan(sine.range(0.2,0.8).slow(8))
  .orbit(14)

//dont forget 140 bpm
_$hypno: n(`<
  [0 0 3 0 <4 0> 6 3]!7
  [0 0 3 0 4 6 7]

  [0 0 3 0 4 6 3]!4
  [0 0 3 0 5 6 3]!2
  [0 3 0 4 0 6 3]
  [0 0 3 6 7 6 4]

  [0 0 3 0 <4 0> 6 3]!4
  [0 0 3 0 4 7 6]!2
  [0 3 4 6 7 6 3]
  [0 0 - 3 - 6 7]

  [0 0 3 0 4 6 3]!3
  [0 3 0 4 0 6 7]
  [0 3 4 6 7 9 7]
  [7 6 4 3 0 3 6]
  [0 0 7 0 6 3 0]
  [-]
>`)
  .scale("D3:minor")
  .s("sawtooth")
  .struct("x(7,16)")
  .lpf(400)
  .lpq(6)
  .lpenv(2)
  .attack(0.005)
  .decay(0.15)
  .sustain(0)
  .release(0.1)
  .delay(0.3)
  .delayfeedback(0.4)
  .room(0.4)
  .gain(hypnoGain)
  .orbit(16)



const acid = s("synth_loops_-_acid_loops")
  .n(2)      // 2, 4, 9, 10, 12, 13, 14, 15, 16, 17, 18
  .loopat(8) // 8, 4, 4,  8,  4,  1,  1,  1,  1,  1,  1


const arpDriving = s("synth_loops_-_arps_driving")
  .n(17)     // 17, 18, 19, 23, 24
  .loopat(4) //  4,  4,  4,  4,  2


const arpMelodic = s("synth_loops_-_arps_melodic")
  .n(29)     // 29, 33
  .loopat(4) //  4,  8


const techno = s("synth_loops_-_techno")
  .n(34)     // 34
  .loopat(8) //  8

_$synth: acid 
  .gain(synthGain)
  .orbit(15)

// PAN
//orbitPan(15, sine.range(-1, 1).slow(4))

// LOW PASS
orbitLPF(15, slider(24000, 100, 24000, 10))
orbitLPQ(15, slider(1, 0, 12, 0.1))

// HIGH PASS
orbitHPF(15, slider(0, 0, 4000, 10))

// PHASER
orbitPhaser(15, slider(0, 0, 0.7, 0.01))
orbitPhaserRate(15, slider(0.15, 0.02, 2, 0.01))

// DISTORTION
orbitDistortion(15, slider(0, 0, 0.7, 0.01))
orbitDistortionDrive(15, slider(3, 1, 8, 0.1))

// DELAY
orbitDelay(15, slider(0, 0, 0.7, 0.01))
orbitDelayTime(15, 0.321)
orbitDelayFeedback(15, slider(0.35, 0, 0.75, 0.01))

// REVERB
orbitReverb(15, slider(0, 0, 0.8, 0.01))
