function doAnimation() {
    $("#zohar").delay(500).show(0).fadeOut(2500);
    $("#fucking").delay(1000).show(0).fadeOut(2000);
    $("#hochman").delay(1500).show(0).fadeOut(1500);

    $("#frame1").delay(3000).hide(0);
    $("#frame2").delay(3000).show(0);

    $("#will-you").delay(3000).show(0);
    $("#go-out").delay(3300).show(0);
    $("#with-me").delay(3600).show(0);
     $("#to-prom").delay(4200).show(0);

    var promSound = document.getElementById("prom-sound");
    window.setTimeout(function() {
        promSound.play();
    }, 1330);

    $("#signature").delay(5400).show(0);
    $("#in-love").delay(5400).show(0);
    $("#doctor").delay(5800).show(0);

    $("#frame2").delay(5800).fadeOut(400);
}

$(doAnimation);