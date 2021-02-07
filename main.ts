input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . .
        # . . . .
        `)
    basic.clearScreen()
})
