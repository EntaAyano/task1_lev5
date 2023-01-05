let カウンター = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    カウンター = 0
    for (let index = 0; index < 5; index++) {
        led.plot(カウンター, 2)
        basic.pause(1000)
        led.unplot(カウンター, 2)
        カウンター += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    カウンター = 0
    for (let index = 0; index < 5; index++) {
        led.plot(2, カウンター)
        basic.pause(1000)
        led.unplot(2, カウンター)
        カウンター += 1
    }
})
