(function () {

    var delay = 100,
        i = 0,
        startTimer = function (pixels) {
            var elem = document.getElementById("circle"),
                bottom = elem.offsetTop,
                speed = pixels;


            if ((bottom > 600 && pixels > 0) || (bottom < 50 && pixels < 0)) {
                clearInterval(timer);

                timer = setInterval(function () {
                    startTimer(pixels * -1);
                }, delay);
            }

            (pixels > 0) ? --i : ++i;
            console.log(i);
            speed = Math.pow(i, 2) * pixels;
            elem.style.top = bottom + speed + 'px';
        };

    var timer = setInterval(function () {
        startTimer(1);
    }, delay);
})(); 