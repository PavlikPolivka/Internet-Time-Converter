package com.ppolivka.time

public native object  jstz {

    fun determine() : Zone = noImpl

}

native
public class Zone {

    fun name() : String

}