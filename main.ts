radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        mode = 1
        recieved = 1
        sended = 0
        basic.showString("recieved")
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        mode = 1
        recieved = 0
        sended = 1
        radio.sendNumber(1)
        basic.showString("Sending")
    } else if (mode == 1 && recieved == 1) {
    	
    } else {
    	
    }
})
let sended = 0
let mode = 0
let recieved = 0
radio.setGroup(1)
recieved = 0
mode = 0
sended = 0
basic.forever(function () {
	
})
