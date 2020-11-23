radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue(convertToText(id), receivedNumber)
    if (receivedNumber >= 3) {
        led.plot((id - 1) % 5, (id - 1) / 5)
    } else {
        led.unplot((id - 1) % 5, (id - 1) / 5)
    }
    if (id < max_id) {
        id = id + 1
    } else {
        id = 1
    }
})
let max_id = 0
let id = 0
radio.setGroup(99)
id = 1
max_id = 1
basic.forever(function () {
    radio.sendString(convertToText(id))
})
