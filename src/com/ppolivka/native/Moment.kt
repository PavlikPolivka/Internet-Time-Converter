package com.ppolivka.native

native("moment")
public class Moment {

    public fun tz(a:String) : Moment = noImpl
    public fun month() : Int = noImpl
    public fun year() : Int = noImpl
    public fun hour() : Int = noImpl
    public fun minute() : Int = noImpl
    public fun second() : Int = noImpl
    public fun day() : Int = noImpl

    public companion object {
        public native fun tz(a:String, b:String, c:String) : Moment = kotlin.js.noImpl
    }

}