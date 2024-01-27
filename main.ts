input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(10 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("go!")
})
