(function() {
    var doc = document;

    var changeColor = function(e) {
        eventsObj.preventDefault(e);

        var elem = eventsObj.getTarget(e);


        if (elem.id === 'day') {
            doc.body.className = "day";
        } else if (elem.id === "night") {
            doc.body.className = "night";
        }
    };

    var buttons = doc.getElementsByTagName('button');

    for (let index = 0; index < buttons.length; index++) {
        eventsObj.addEvent(buttons[index], 'click', changeColor);
    };
})();