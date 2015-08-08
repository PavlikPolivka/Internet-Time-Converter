import com.ppolivka.browser.E
import com.ppolivka.time.Date
import com.ppolivka.time.Time
import com.ppolivka.time.TimeZone
import com.ppolivka.time.jstz


fun main(args: Array<String>) {
    val now = Time(Date(), jstz.determine())

    E.hour.value(now.hour.toString())
    E.minute.value(now.minute.toString())
//    var timeZone : TimeZone = TimeZone()
    E.second.value(now.second.toString())
    E.beats.value(now.toBeats().toString())
    E.test.value("ne")
}