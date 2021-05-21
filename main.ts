function is_on_left_side () {
    return bstrength > cstrength
}
function is_at_back () {
    return astrength < cstrength && astrength < bstrength
}
function Scroll () {
	
}
function is_in_center () {
    return astrength == bstrength && bstrength == cstrength
}
function get_location () {
    if (is_in_center()) {
        return "In The Road"
    } else if (is_on_right_side() && is_at_front()) {
        return "Base"
    } else if (astrength == -110 && (bstrength == -66 && cstrength == -20)) {
        return "Certain Place"
    } else {
        return "Unknown"
    }
}
function is_on_right_side () {
    return bstrength < cstrength
}
function is_centered_sideways () {
    return bstrength == cstrength
}
function is_at_front () {
    return astrength > cstrength
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
let perfoot = 2.6744186046511627
let atob = 230
let btoc = 230
let atoc = 230
