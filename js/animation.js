$(function() {
    var zohar = $("#zohar")
    var fucking = $("#fucking")
    var hochman = $("#hochman")

    zohar.
        delay(500).
        show(0).
        delay(2500).
        queue(function() {
            zohar.remove();
        })

    fucking.
        delay(1000).
        show(0).
        delay(2000).
        queue(function() {
            fucking.remove();
        })

    hochman.
        delay(1500).
        show(0).
        delay(1500).
        queue(function() {
            hochman.remove();
        })

    var frame1 = $("#frame1")
    frame1.delay(3000).queue(function() {
        frame1.remove()
    })
    $("#frame2").delay(3000).show(0)

    var go = $("#go")
    var withMe = $("#with-me")
    var toProm = $("#to-prom")

    go.
        delay(3300).
        show(0)

    withMe.
        delay(3600).
        show(0)

    toProm.
        delay(4200).
        show(0)

    var signature = $("#signature")
    var inLove = $("#in-love")
    var doctor = $("#doctor")

    signature.
        delay(5000).
        show(0)

    doctor.
        delay(5400).
        show(0)

})