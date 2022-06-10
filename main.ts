input.onPinPressed(TouchPin.P0, function () {
    let Mode = 0
    if (Mode == 0) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(392, music.beat(BeatFraction.Half))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(330, music.beat(BeatFraction.Half))
})
basic.showIcon(IconNames.Heart)
