//@277
setcpm(140/4)

$: s("bd*4").bank("rolandtr909")
.dist(slider(0.298,0,1))
.gain(slider(0.771,0,1))._scope()

$: s("<- hh>*8").bank("rolandtr909")
.hpf(slider(1700,0,10000))
.gain(slider(0.499,0,1))._scope()

$: s("cp*4").mask("0 1 0 1").bank("rolandtr909")
.room(slider(0.1,0,1))
.hpf(slider(1140,0,3000))
.gain(slider(0.58,0,2))._scope()
$: s("- oh - -").bank("rolandtr909").fast(2)
.decay(slider(0.288,0,1))
.hpf(slider(3944,0,8000))
.gain(slider(0.606,0,2))._scope()
$: s("- perc*3 - perc perc*2 - - perc").bank("spacedrum").n(" 0 1 1")
.pan(sine.range(0.2, 0.8).slow(2))
  .room(slider(0.419,0,1))
  .gain(slider(0.32,0,2))


$: s("sawtooth*8").n("0 - 0 2 - 3 2 -").scale("A1:minor")
  .decay(slider(0.19169, .03, .4))
  .sustain(0.3)
  .lpf(slider(1422.6, 100, 1800))
  .mul(gain("[.25 1 .25 1 .25 1 .25 1]"))._scope().dist(slider(0.632,0,2)).gain(0.5)

$:s("sawtooth*8")
  .n("<[0 - - 2 - 3 - -]!3 [0 - 5 3 - 2 1 -]>").scale("A2:minor")
  .decay(slider(0.3, .02, .3))
  .sustain(0)
  .lpf(slider(1796, 200, 3000))
  .dist(slider(0.4942, 0, .7))
  .room(slider(0.409, 0, .5))
  .gain(slider(0.83375, .05, 1)).pan(cosine.range(0,1).fast(0.5))
