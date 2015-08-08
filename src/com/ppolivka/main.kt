package com.ppolivka

import com.ppolivka.browser.Field
import com.ppolivka.time.Date
import com.ppolivka.time.Time
import com.ppolivka.time.jstz
import org.w3c.dom.events.Event
import com.ppolivka.render

var zone : String = jstz.determine().name()
var dateTime: Time = Time(Date(), zone)

fun main(args: Array<String>) {
    render()
    Field.beats.change(::beatsChange)
    Field.hour.change(::timeChange)
    Field.minute.change(::timeChange)
    Field.second.change(::timeChange)
}

@suppress("UNUSED_PARAMETER")
fun beatsChange(event : Event) {
    var beats : String = Field.beats.value() ?: "0"
    dateTime = Time.Companion.timeFromBeats(beats, zone)
    render()
}

@suppress("UNUSED_PARAMETER")
fun timeChange(event : Event) {
    dateTime.hour = Field.hour.intValue()
    dateTime.minute = Field.minute.intValue()
    dateTime.second = Field.second.intValue()
    render()
}

fun render() {
    Field.hour.value(dateTime.hour.toString())
    Field.minute.value(dateTime.minute.toString())
    Field.second.value(dateTime.second.toString())
    Field.beats.value(dateTime.toBeats().toString())
}




