package com.ppolivka.ui.validator.impl

import com.ppolivka.ui.validator.Validator

public class StringValidator : Validator {

    override fun validate(value: String?): String {
        return value ?: ""
    }

}