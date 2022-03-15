def on_received_number(receivedNumber):
    global connect, mode, roll, CanMeet
    if receivedNumber == 0 and not (connect == 1):
        connect = 1
        mode = 0
        roll = 0
        radio.send_number(0)
        basic.show_number(receivedNumber)
        basic.show_string("select your roll!")
    if receivedNumber == 1:
        mode = 2
        music.start_melody(music.built_in_melody(Melodies.NYAN),
            MelodyOptions.ONCE_IN_BACKGROUND)
        basic.show_string("Called from parent.Busy to A.not Busy to B")
    if receivedNumber == 2:
        basic.show_string("You cant meet")
        mode = 3
        CanMeet = 0
        mode = 1
        basic.show_string("Ended!")
    if receivedNumber == 3:
        basic.show_string("You can meet A or B")
        mode = 4
        CanMeet = 1
    if receivedNumber == 4:
        basic.show_string("Where? A or B")
        mode = 4
    if receivedNumber == 5:
        basic.show_string("Meal")
        mode = 11
    if receivedNumber == 6:
        basic.show_string("Shower")
        mode = 11
    if receivedNumber == 7:
        basic.show_string("Help me")
        mode = 11
    if receivedNumber == 8:
        basic.show_string("Others")
        mode = 11
    if receivedNumber == 9:
        basic.show_string("Yes Ended! A to call")
        mode = 1
    if receivedNumber == 10:
        basic.show_string("No Ended! B to call")
        mode = 1
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global Apushed, roll, mode
    Apushed = 1
    if mode == 0 and Apushed == 1:
        Apushed = 0
        basic.show_string("Parent A to call")
        roll = 1
        mode = 1
    if (mode == 1 or mode == 1) and roll == 1 and Apushed == 1:
        Apushed = 0
        mode = 2
        radio.send_number(1)
        basic.show_string("Called")
    if mode == 2 and roll == 0 and Apushed == 1:
        Apushed = 0
        mode = 3
        radio.send_number(2)
        music.stop_melody(MelodyStopOptions.ALL)
        basic.show_string("Sand")
    if mode == 3 and roll == 1 and Apushed == 1:
        Apushed = 0
        mode = 4
        radio.send_number(4)
        basic.show_string("Sand")
    if mode == 4 and roll == 1 and Apushed == 1:
        Apushed = 0
        mode = 5
        basic.show_string("A or B")
    if mode == 5 and roll == 1 and Apushed == 1:
        Apushed = 0
        mode = 7
        radio.send_number(5)
        basic.show_string("Meal")
        mode = 11
    if mode == 6 and roll == 1 and Apushed == 1:
        Apushed = 0
        mode = 8
        radio.send_number(6)
        basic.show_string("Shower")
        mode = 11
    if mode == 11 and roll == 0 and Apushed == 1:
        Apushed = 0
        radio.send_number(9)
        basic.show_string("Yes")
        mode = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Bpushed, roll, mode
    Bpushed = 1
    if mode == 0 and Bpushed == 1:
        Bpushed = 0
        roll = 0
        mode = 1
        basic.show_string("Kid")
    if mode == 2 and roll == 0 and Bpushed == 1:
        Bpushed = 0
        mode = 3
        radio.send_number(3)
        music.stop_melody(MelodyStopOptions.ALL)
        basic.show_string("Sand")
        mode = 1
    if mode == 4 and roll == 1 and Bpushed == 1:
        Bpushed = 0
        mode = 6
        basic.show_string("A or B")
    if mode == 5 and roll == 1 and Bpushed == 1:
        Bpushed = 0
        mode = 9
        radio.send_number(7)
        basic.show_string("Help me")
        mode = 11
    if mode == 6 and roll == 1 and Bpushed == 1:
        Bpushed = 0
        mode = 10
        radio.send_number(8)
        basic.show_string("Other")
        mode = 11
    if mode == 11 and roll == 0 and Bpushed == 1:
        Bpushed = 0
        radio.send_number(10)
        basic.show_string("No")
        mode = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_background_melody_ended():
    if mode == 2 and roll == 0:
        music.start_melody(music.built_in_melody(Melodies.NYAN),
            MelodyOptions.ONCE_IN_BACKGROUND)
music.on_event(MusicEvent.BACKGROUND_MELODY_ENDED,
    on_background_melody_ended)

Bpushed = 0
Apushed = 0
CanMeet = 0
roll = 0
mode = 0
connect = 0
radio.set_group(144)
radio.send_number(0)