package com.ppolivka

import com.ppolivka.native.Date
import com.ppolivka.native.jstz
import com.ppolivka.storage.ZoneDao
import com.ppolivka.time.Time
import com.ppolivka.ui.Field
import org.w3c.dom.events.Event

var dateTime: Time = Time(Date(), "UTC");
var paneHidden : Boolean = true

fun main(args: Array<String>) {

    ZoneDao.checkAndInitZone() //Sets default zone if none exists
    dateTime = Time(Date(), ZoneDao.getZone())

    Field.zones.value(ZoneDao.getZone())
    Field.settingsButton.title(ZoneDao.getZone())

    render()

    Field.beats.keyup(::beatsChange)
    Field.hour.keyup(::timeChange)
    Field.minute.keyup(::timeChange)
    Field.second.keyup(::timeChange)

    Field.settingsButton.click(::showHideInfo)
    Field.zones.change(::zoneChange)
    Field.resetZone.click(::resetZone)
}

@suppress("UNUSED_PARAMETER")
fun beatsChange(event : Event) {
    var beats : String = Field.beats.value() ?: "0"
    dateTime = Time.Companion.timeFromBeats(beats, ZoneDao.getZone())
    render()
}

@suppress("UNUSED_PARAMETER")
fun timeChange(event : Event) {
    if(Field.hour.value() != "" && Field.minute.value() != "" && Field.second.value() != "") {
        dateTime.hour = Field.hour.intValue()
        dateTime.minute = Field.minute.intValue()
        dateTime.second = Field.second.intValue()
        render()
    }
}

@suppress("UNUSED_PARAMETER")
fun zoneChange(event : Event) {
    val zone : String = Field.zones.value() ?: "UTC"
    ZoneDao.saveZone(zone)
    Field.settingsButton.title(zone)
    dateTime = dateTime.convertZone(zone)
    render()
}

@suppress("UNUSED_PARAMETER")
fun resetZone(event : Event) {
    val zone : String = jstz.determine().name()
    ZoneDao.saveZone(zone)
    Field.zones.value(zone)
    Field.settingsButton.title(zone)
    dateTime = dateTime.convertZone(zone)
    render()
}

@suppress("UNUSED_PARAMETER")
fun showHideInfo(event : Event) {
    if(paneHidden) {
        Field.zonePane.removeClass("hide")
        Field.zonePane.addClass("show")
        paneHidden = false
    } else {
        Field.zonePane.removeClass("show")
        Field.zonePane.addClass("hide")
        paneHidden = true
    }
}

fun render() {
    Field.hour.value(dateTime.hour.toString())
    Field.minute.value(dateTime.minute.toString())
    Field.second.value(dateTime.second.toString())
    Field.beats.value(dateTime.toBeats().toString())
}




