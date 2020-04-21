(function() {
    var doc = document,
        box = doc.getElementById('box');

    // box.onclick = function() {
    //     this.style.backgroundColor = "yellow";
    // };
    var changeColor = function() {

        if (this.id === 'day') {
            doc.body.className = "day";
        } else if (this.id === "night") {
            doc.body.className = "night";
        }
    };

    var sayHi = function() {
        alert(this.textContent + "!");
    }

    var buttons = doc.getElementsByTagName('button');

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', changeColor, false);
        buttons[index].addEventListener('click', sayHi, false);
    };





})();