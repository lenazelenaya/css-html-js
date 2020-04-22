var eventsObj = {
    addEvent: function(e, type, fun) {
        if (typeof addEventListener !== "undefined") {
            e.addEventListener(type, fun, false);
        } else if (typeof attachEvent !== "undefined") {
            e.attachEvent('on' + type, fun);
        } else {
            e['on' + type] = fun;
        }
    },

    getTarget: function(event) {
        if (typeof event.target != "undefined") {
            return event.target;
        } else {
            return event.srcElement;
        }
    },

    preventDefault: function(event) {
        if (typeof event.preventDefault !== "undefined") {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

    }

};