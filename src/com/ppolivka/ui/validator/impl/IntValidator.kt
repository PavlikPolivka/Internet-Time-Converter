package com.ppolivka.ui.validator.impl

import com.ppolivka.ui.validator.Validator


public class IntValidator(top : Int) : Validator {

    val top : Int = top

    override fun validate(value: String?): String {
        var int : Int = parseInt(value ?: "0")
        if(int > top) {
            int = top
        }
        if(int < 0) {
            int = 0
        }
        return int.toString()
    }

}