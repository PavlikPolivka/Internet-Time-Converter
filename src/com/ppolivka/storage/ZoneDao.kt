package com.ppolivka.storage

import com.ppolivka.native.jstz

public class ZoneDao {

    public companion object {

        public fun saveZone(zone : String) {
            LocalStorage.zone = zone
        }

        public fun getZone() : String {
            return LocalStorage.zone!!
        }

        public fun checkAndInitZone() {
            val zone : String = LocalStorage.zone ?: jstz.determine().name()
            saveZone(zone)
        }
    }

}