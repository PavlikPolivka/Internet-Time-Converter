/**
 * Main function
 * @since 6.8.2015
 * @author ppolivka
 */

import kotlin.browser.document


fun main(args: Array<String>) {
    document.getElementById("test")?.innerHTML = "Testing of kotlin plugin"
}