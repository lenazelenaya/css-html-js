(function() {
    var doc = document;

    var changeColor = function(e) {
        eventsObj.preventDefault(e);

        var elem = eventsObj.getTarget(e),
            colorData = elem.getAttribute("data-color");

        if (colorData) {
            doc.body.className = colorData;
        }
    };

    eventsObj.addEvent(doc, 'click', changeColor);
})();