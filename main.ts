function is_in_center () {
    return astrength == bstrength && bstrength == cstrength
}
radio.onReceivedValue(function (name, value) {
    if (name == "a") {
        astrength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    }
    if (name == "b") {
        bstrength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    }
    if (name == "c") {
        cstrength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    }
})
let cstrength = 0
let bstrength = 0
let astrength = 0
radio.setGroup(3)
astrength = 0
bstrength = 0
cstrength = 0
