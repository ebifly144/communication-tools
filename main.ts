radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0 && !(connect == 1)) {
        connect = 1
        mode = 0
        roll = 0
        radio.sendNumber(0)
        basic.showNumber(receivedNumber)
        basic.showString("select your roll!")
    }
    if (receivedNumber == 1) {
        mode = 2
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
        basic.showString("Called from parent.Busy to A.not Busy to B")
    }
    if (receivedNumber == 2) {
        basic.showString("You cant meet")
        mode = 3
        CanMeet = 0
        mode = 1
        basic.showString("Ended!")
    }
    if (receivedNumber == 3) {
        basic.showString("You can meet A or B")
        mode = 4
        CanMeet = 1
    }
    if (receivedNumber == 4) {
        basic.showString("Where? A or B")
        mode = 4
    }
    if (receivedNumber == 5) {
        basic.showString("Meal")
        mode = 11
    }
    if (receivedNumber == 6) {
        basic.showString("Shower")
        mode = 11
    }
    if (receivedNumber == 7) {
        basic.showString("Help me")
        mode = 11
    }
    if (receivedNumber == 8) {
        basic.showString("Others")
        mode = 11
    }
    if (receivedNumber == 9) {
        basic.showString("Yes Ended! A to call")
        mode = 1
    }
    if (receivedNumber == 10) {
        basic.showString("No Ended! B to call")
        mode = 1
    }
})
input.onButtonPressed(Button.A, function () {
    Apushed = 1
    if (mode == 0 && Apushed == 1) {
        Apushed = 0
        basic.showString("Parent A to call")
        roll = 1
        mode = 1
    }
    if ((mode == 1 || mode == 1) && roll == 1 && Apushed == 1) {
        Apushed = 0
        mode = 2
        radio.sendNumber(1)
        basic.showString("Called")
    }
    if (mode == 2 && roll == 0 && Apushed == 1) {
        Apushed = 0
        mode = 3
        radio.sendNumber(2)
        music.stopMelody(MelodyStopOptions.All)
        basic.showString("Sand")
    }
    if (mode == 3 && roll == 1 && Apushed == 1) {
        Apushed = 0
        mode = 4
        radio.sendNumber(4)
        basic.showString("Sand")
    }
    if (mode == 4 && roll == 1 && Apushed == 1) {
        Apushed = 0
        mode = 5
        basic.showString("A or B")
    }
    if (mode == 5 && roll == 1 && Apushed == 1) {
        Apushed = 0
        mode = 7
        radio.sendNumber(5)
        basic.showString("Meal")
        mode = 11
    }
    if (mode == 6 && roll == 1 && Apushed == 1) {
        Apushed = 0
        mode = 8
        radio.sendNumber(6)
        basic.showString("Shower")
        mode = 11
    }
    if (mode == 11 && roll == 0 && Apushed == 1) {
        Apushed = 0
        radio.sendNumber(9)
        basic.showString("Yes")
        mode = 1
    }
})
input.onButtonPressed(Button.B, function () {
    Bpushed = 1
    if (mode == 0 && Bpushed == 1) {
        Bpushed = 0
        roll = 0
        mode = 1
        basic.showString("Kid")
    }
    if (mode == 2 && roll == 0 && Bpushed == 1) {
        Bpushed = 0
        mode = 3
        radio.sendNumber(3)
        music.stopMelody(MelodyStopOptions.All)
        basic.showString("Sand")
        mode = 1
    }
    if (mode == 4 && roll == 1 && Bpushed == 1) {
        Bpushed = 0
        mode = 6
        basic.showString("A or B")
    }
    if (mode == 5 && roll == 1 && Bpushed == 1) {
        Bpushed = 0
        mode = 9
        radio.sendNumber(7)
        basic.showString("Help me")
        mode = 11
    }
    if (mode == 6 && roll == 1 && Bpushed == 1) {
        Bpushed = 0
        mode = 10
        radio.sendNumber(8)
        basic.showString("Other")
        mode = 11
    }
    if (mode == 11 && roll == 0 && Bpushed == 1) {
        Bpushed = 0
        radio.sendNumber(10)
        basic.showString("No")
        mode = 1
    }
})
music.onEvent(MusicEvent.BackgroundMelodyEnded, function () {
    if (mode == 2 && roll == 0) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
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
