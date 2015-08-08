package com.ppolivka.time

public class Time(now:Date, zone: zone) {

    var date = now
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var zone : zone = zone

    public fun fromDate(time : Date, zone: zone) {
        date = time
        year = date.getFullYear()
        month = date.getMonth() + 1
        day = date.getDate()
        hour = date.getHours()
        minute = date.getMinutes()
        second = date.getSeconds()
    }

    public fun fromBeats(beats:String, zone: zone) : Time {
        var seconds  : Double  = safeParseDouble(beats)?.div(0.011574)!!
        var time : Time = Time(Date(), zone)
        time.hour = Math.floor(seconds / 3600);
        time.minute = Math.floor((seconds - (time.hour*3600)) / 60);
        time.second = Math.floor(seconds % 60);
        return time
    }

    private fun toUTC() : Time {
        val zoneName : String = zone.name()
        var utc : moment = moment().tz("${year}${month}${day} ${hour}${minute}${second}","yyyyMMdd hhmmss",zoneName).tz("UTC")
        return Time(utc.toDate(), zone)
    }

    public fun toBeats() : Number {
        var utc : Time = this.toUTC()
        var beats : Number  =  (utc.second + (utc.minute * 60) + ((utc.hour+1) * 3600)) / 86.4;
        return beats
    }



}