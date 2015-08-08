package com.ppolivka.time

import kotlin.platform.platformStatic

public class Time {

    var year = 1971
    var month = 1
    var day = 1
    var hour = 0
    var minute = 0
    var second = 0
    var zone : String = "UTC"

    constructor(moment: Moment, timeZone: String) {
        year = moment.year()
        month = moment.month() + 1
        day = moment.day()
        hour = moment.hour()
        minute = moment.minute()
        second = moment.second()
        zone = timeZone
    }

    constructor(date : Date, timeZone: String) {
        year = date.getFullYear()
        month = date.getMonth() + 1
        day = date.getDate()
        hour = date.getHours()
        minute = date.getMinutes()
        second = date.getSeconds()
        zone = timeZone
    }

    private fun toMoment() : Moment {
        return Moment.tz("${year}${month.normalize()}${day.normalize()} ${hour.normalize()}${minute.normalize()}${second.normalize()}","YYYYMMDD hhmmss",zone)
    }

    public fun convertZone(timeZone : String) : Time {
        var converted : Moment = toMoment().tz(timeZone)
        return Time(converted, timeZone)
    }

    public fun toBeats() : Number {
        var utc : Time = this.convertZone("UTC")
        var utcone = utc.addHour()
        var beats : Number  =  (utcone.second + (utcone.minute * 60) + ((utcone.hour) * 3600)) / 86.4;
        return Math.round(beats)
    }

    public fun addHour() : Time {
        var newTime : Time = Time(toMoment(), zone)
        if(this.hour == 23){
            newTime.day++
            newTime.hour = 0
        } else {
            newTime.hour ++
        }
        return newTime
    }

    public fun removeHour() : Time {
        var newTime : Time = Time(toMoment(), zone)
        if(this.hour == 0){
            newTime.day--
            newTime.hour = 23
        } else {
            newTime.hour --
        }
        return newTime
    }

    public companion object {
        fun timeFromBeats(beats:String, timeZone: String) : Time {
            var seconds  : Double  = safeParseDouble(beats)?.div(0.011574)!!
            var time : Time = Time(Date(), "UTC")
            time.hour = Math.floor(seconds / 3600)
            time.minute = Math.floor((seconds - (time.hour*3600)) / 60);
            time.second = Math.floor(seconds % 60);
            var utcone : Time = time.removeHour()
            var timeZoned : Time = utcone.convertZone(timeZone)
            return timeZoned
        }
    }

    fun Number.normalize() = ("0" + this).substring(("0" + this).length()-2,("0" + this).length())

}