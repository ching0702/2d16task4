let xvalue = 0
input.onButtonPressed(Button.A, function () {
    xvalue = 0
    while (xvalue <= 5) {
        basic.clearScreen()
        led.plot(xvalue, 0)
        basic.pause(100)
        xvalue += 1
    }
})
basic.forever(function () {
	
})
