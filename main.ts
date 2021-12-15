radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0 && !(connect == 1)) {
        connect = 1
        mode = 0
        roll = 0
        radio.sendNumber(0)
        basic.showString("Select your roll!")
    }
    if (receivedNumber == 1) {
        basic.showString("Called from student.Busy to A.not Busy to B")
        mode = 2
    }
    if (receivedNumber == 2) {
        basic.showString("You cant meet")
        mode = 3
        CanMeet = 0
        SestartStudent()
    }
    if (receivedNumber == 3) {
        basic.showString("You can meet A to ask Where")
        mode = 3
        CanMeet = 1
    }
    if (receivedNumber == 4) {
        basic.showString("Where? A or B")
        mode = 4
    }
    if (receivedNumber == 5) {
        basic.showString("Staff room")
        SestartStudent()
    }
    if (receivedNumber == 6) {
        basic.showString("Instructor's room")
        SestartStudent()
    }
    if (receivedNumber == 7) {
        basic.showString("Classroom")
        SestartStudent()
    }
    if (receivedNumber == 8) {
        basic.showString("Special classroom")
        SestartStudent()
    }
})
function SestartStudent () {
    mode = 1
    basic.showString("Ended! A to call")
}
input.onButtonPressed(Button.A, function () {
    Apushed = 1
    if (mode == 0 && Apushed == 1) {
        Apushed = 0
        basic.showString("Student A to call")
        roll = 1
        mode = 1
    }
    if (mode == 1 && roll == 1 && Apushed == 1) {
        Apushed = 0
        mode = 2
        radio.sendNumber(1)
        basic.showString("Called")
    }
    if (mode == 2 && roll == 0 && Apushed == 1) {
        Apushed = 0
        mode = 3
        radio.sendNumber(2)
        basic.showString("Sended")
    }
    if (mode == 3 && roll == 1 && Apushed == 1) {
        Apushed = 0
        mode = 4
        radio.sendNumber(4)
        basic.showString("Sended")
    }
    if (mode == 4 && roll == 0 && Apushed == 1) {
        Apushed = 0
        mode = 5
        basic.showString("A or B")
    }
    if (mode == 5 && roll == 0 && Apushed == 1) {
        Apushed = 0
        mode = 7
        radio.sendNumber(5)
        basic.showString("Staff room")
        mode = 1
    }
    if (mode == 6 && roll == 0 && Apushed == 1) {
        Apushed = 0
        mode = 8
        radio.sendNumber(6)
        basic.showString("Instructor's room")
        mode = 1
    }
})
input.onButtonPressed(Button.B, function () {
    Bpushed = 1
    if (mode == 0 && Bpushed == 1) {
        Bpushed = 0
        roll = 0
        mode = 1
        basic.showString("Teacher")
    }
    if (mode == 2 && roll == 0 && Bpushed == 1) {
        Bpushed = 0
        mode = 3
        radio.sendNumber(3)
        basic.showString("Sended")
        mode = 1
    }
    if (mode == 4 && roll == 0 && Bpushed == 1) {
        Bpushed = 0
        mode = 6
        basic.showString("A or B")
    }
    if (mode == 5 && roll == 0 && Bpushed == 1) {
        Bpushed = 0
        mode = 9
        radio.sendNumber(7)
        basic.showString("Classroom")
        mode = 1
    }
    if (mode == 6 && roll == 0 && Bpushed == 1) {
        Bpushed = 0
        mode = 10
        radio.sendNumber(8)
        basic.showString("Special classroom")
        mode = 1
    }
})
let Bpushed = 0
let Apushed = 0
let CanMeet = 0
let roll = 0
let mode = 0
let connect = 0
radio.setGroup(144)
radio.sendNumber(0)
