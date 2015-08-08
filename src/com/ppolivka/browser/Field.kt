package com.ppolivka.browser

import com.ppolivka.browser
import org.w3c.dom.Element
import org.w3c.dom.events.Event
import kotlin.browser.document

public enum class Field(e : Element?) {

    hour(document.getElementById("hour")),
    minute(document.getElementById("minute")),
    second(document.getElementById("second")),
    beats(document.getElementById("beats")),
    test(document.getElementById("test"));

    val element : Element? = e;

    fun value() : String? {
        return element?.value
    }

    fun value(v : String) {
        element?.value = v
    }

    fun intValue() : Int {
        return parseInt(value() ?: "0")
    }

    fun change(callback: ((Event) -> Unit)?) {
        element?.addEventListener("keyup", callback)
    }

}