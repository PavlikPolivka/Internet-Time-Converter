package com.ppolivka.time

public native object  jstz {

    fun determine() : zone = noImpl

}

native
public class zone {

    fun name() : String

}