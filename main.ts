radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        mode = 0
        sended = 0
        recieved = 1
        basic.showString("passed")
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        mode = 1
        sended = 1
        recieved = 0
        radio.sendNumber(1)
        basic.showString("Sending")
    }
})
let recieved = 0
let sended = 0
let mode = 0
radio.setGroup(1)
basic.forever(function () {
	
})
