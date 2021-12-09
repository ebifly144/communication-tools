input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        mode = 1
        radio.sendValue("mode", 1)
        basic.showString("Sending")
    }
})
radio.onReceivedString(function (receivedString) {
	
})
let mode = 0
radio.setGroup(1)
basic.forever(function () {
	
})
