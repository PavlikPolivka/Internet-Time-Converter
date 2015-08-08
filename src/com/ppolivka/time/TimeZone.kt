package com.ppolivka.time

import org.w3c.dom.Element
import java.util.HashMap
import kotlin.Pair
import kotlin.browser.document

public class TimeZone {
    var zones : Map<String, Int> = HashMap()
    init {
        zones.plus(Pair("Etc/GMT+12",-720))
        zones.plus(Pair("Pacific/Pago_Pago",-660))
        zones.plus(Pair("Pacific/Apia",-660))
        zones.plus(Pair("America/Adak",-600))
        zones.plus(Pair("Pacific/Honolulu",-600))
        zones.plus(Pair("Pacific/Marquesas",-570))
        zones.plus(Pair("Pacific/Gambier",-540))
        zones.plus(Pair("America/Anchorage",-540))
        zones.plus(Pair("America/Los_Angeles",-480))
        zones.plus(Pair("Pacific/Pitcairn",-480))
        zones.plus(Pair("America/Phoenix",-420))
        zones.plus(Pair("America/Denver",-420))
        zones.plus(Pair("America/Guatemala",-360))
        zones.plus(Pair("America/Chicago",-360))
        zones.plus(Pair("Pacific/Easter",-360))
        zones.plus(Pair("America/Bogota",-300))
        zones.plus(Pair("America/New_York",-300))
        zones.plus(Pair("America/Caracas",-270))
        zones.plus(Pair("America/Halifax",-240))
        zones.plus(Pair("America/Santo_Domingo",-240))
        zones.plus(Pair("America/Santiago",-240))
        zones.plus(Pair("America/St_Johns",-210))
        zones.plus(Pair("America/Godthab",-180))
        zones.plus(Pair("America/Argentina_Buenos",-180))
        zones.plus(Pair("America/Montevideo",-180))
        zones.plus(Pair("America/Noronha",-120))
        zones.plus(Pair("America/Noronha",-120))
        zones.plus(Pair("Atlantic/Azores",-60))
        zones.plus(Pair("Atlantic/Cape_Verde",-60))
        zones.plus(Pair("UTC",0))
        zones.plus(Pair("Europe/London",0))
        zones.plus(Pair("Europe/Berlin",60))
        zones.plus(Pair("Africa/Lagos",60))
        zones.plus(Pair("Africa/Windhoek",60))
        zones.plus(Pair("Asia/Beirut",120))
        zones.plus(Pair("Africa/Johannesburg",120))
        zones.plus(Pair("Asia/Baghdad",180))
        zones.plus(Pair("Europe/Moscow",180))
        zones.plus(Pair("Asia/Tehran",210))
        zones.plus(Pair("Asia/Dubai",240))
        zones.plus(Pair("Asia/Baku",240))
        zones.plus(Pair("Asia/Kabul",270))
        zones.plus(Pair("Asia/Yekaterinburg",300))
        zones.plus(Pair("Asia/Karachi",300))
        zones.plus(Pair("Asia/Kolkata",330))
        zones.plus(Pair("Asia/Kathmandu",345))
        zones.plus(Pair("Asia/Dhaka",360))
        zones.plus(Pair("Asia/Omsk",360))
        zones.plus(Pair("Asia/Rangoon",390))
        zones.plus(Pair("Asia/Krasnoyarsk",420))
        zones.plus(Pair("Asia/Jakarta",420))
        zones.plus(Pair("Asia/Shanghai",480))
        zones.plus(Pair("Asia/Irkutsk",480))
        zones.plus(Pair("Australia/Eucla",525))
        zones.plus(Pair("Asia/Yakutsk",540))
        zones.plus(Pair("Asia/Tokyo",540))
        zones.plus(Pair("Australia/Darwin",570))
        zones.plus(Pair("Australia/Adelaide",570))
        zones.plus(Pair("Australia/Brisbane",600))
        zones.plus(Pair("Asia/Vladivostok",600))
        zones.plus(Pair("Australia/Sydney",600))
        zones.plus(Pair("Asia/Kamchatka",660))
        zones.plus(Pair("Pacific/Noumea",660))
        zones.plus(Pair("Pacific/Norfolk",690))
        zones.plus(Pair("Pacific/Auckland",720))
        zones.plus(Pair("Pacific/Majuro",720))
        zones.plus(Pair("Pacific/Chatham",765))
        zones.plus(Pair("Pacific/Tongatapu",780))
        zones.plus(Pair("Pacific/Apia",780))
        zones.plus(Pair("Pacific/Kiritimati",840))
    }



}