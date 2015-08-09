package com.ppolivka.ui

import com.ppolivka.ui.validator.Validator
import com.ppolivka.ui.validator.impl.IntValidator
import com.ppolivka.ui.validator.impl.StringValidator
import org.w3c.dom.Element
import org.w3c.dom.events.Event
import kotlin.browser.document

public enum class Field(e : Element?, v : Validator) {

    hour(document.getElementById("hour"), IntValidator(23)),
    minute(document.getElementById("minute"), IntValidator(59)),
    second(document.getElementById("second"), IntValidator(59)),
    beats(document.getElementById("beats"), IntValidator(999)),
    zonePane(document.getElementById("zonePane"), StringValidator()),
    zones(document.getElementById("zones"), StringValidator()),
    resetZone(document.getElementById("resetZone"), StringValidator()),
    settingsButton(document.getElementById("showSettings"), StringValidator());

    var element : Element? = e
    var validator : Validator = v


    fun value() : String? {
        return element?.value
    }

    fun value(v : String) {
        element?.value = validator.validate(v)
    }

    fun title(v : String) {
        element?.setAttribute("title", v)
    }

    fun intValue() : Int {
        return parseInt(value() ?: "0")
    }

    fun addClass(clazz : String) {
        element?.classList?.add(clazz)
    }

    fun removeClass(clazz : String) {
        element?.classList?.remove(clazz)
    }

    fun keyup(callback: ((Event) -> Unit)?) {
        element?.addEventListener("keyup", callback)
    }

    fun change(callback: ((Event) -> Unit)?) {
        element?.addEventListener("change", callback)
    }

    fun click(callback: ((Event) -> Unit)?) {
        element?.addEventListener("click", callback)
    }

}