(function (global) {
    var move = {
        information: {
            version: '1.1.3',
            description: 'Let the user move absolute positioned elements',
            author: "Leonard Maass",
            website: "https://github.com/leonmaass/moveJS"
        },
        movableElements: [],
        addMovableElement: function (selector) {
            let element = document.querySelector(selector);
            let alreadyAdded = false;
            this.movableElements.forEach((movableElement) => {
                if (movableElement === element) {
                    alreadyAdded = true;
                }
            });
            if (alreadyAdded) {
                throw new Error("The element was already added");
            } else {
                this.movableElements.push(element);
                this.convertCss(selector);
                if (this.movableElements.length === 1) {
                    this.onMouseDown();
                }
            }
        },
        removeMovableElement: function (selector) {
            let element = document.querySelector(selector);
            let removed = false;
            this.movableElements.forEach((addedElement, position) => {
                if (element === addedElement) {
                    this.movableElements.splice(position, 1);
                    removed = true;
                }
            });
            if (removed === false) {
                throw new Error("The element wasn't found");
            }
        },
        convertCss: function (selector) {
            for (let i = 0; i < document.styleSheets.length; i++) {
                var sheet = document.styleSheets[i];
                for (let n = 0; n < sheet.cssRules.length; n++) {
                    if (sheet.cssRules[n].selectorText === selector) {
                        for (let s = 0; s < sheet.cssRules[n].style.length; s++) {
                            if (sheet.cssRules[n].style[s] === "top") {
                                document.querySelector(selector).style.top = sheet.cssRules[n].style.top;
                            } else if (sheet.cssRules[n].style[s] === "left") {
                                document.querySelector(selector).style.left = sheet.cssRules[n].style.left;
                            }
                        }
                    }
                }
            }
        },
        moveElement: function (element, x, y) {
            let previousX = x;
            let previousY = y;

            function onMouseMove(event) {
                let left = element.style.left;
                let top = element.style.top;

                if (left === "") {
                    element.style.left = "0px";
                }

                if (top === "") {
                    element.style.top = "0px";
                }

                left = left.split("").slice(0, left.indexOf("px")).join("");
                top = top.split("").slice(0, top.indexOf("px")).join("");

                element.style.left = (parseInt(left) + (event.clientX - previousX)).toString() + "px";
                element.style.top = (parseInt(top) + (event.clientY - previousY)).toString() + "px";

                previousX = event.clientX;
                previousY = event.clientY;
            }
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", () => {
                window.removeEventListener("mousemove", onMouseMove);
            });
        },
        onMouseDown: function () {
            window.addEventListener("mousedown", (event) => {
                this.movableElements.forEach((movableElement) => {
                    if (event.target === movableElement) {
                        this.moveElement(event.target, event.clientX, event.clientY);
                    }
                });
            });
        }
    };

    if (global.move) {
        throw new Error('move has already been defined');
    } else {
        global.move = move;
    }
})(typeof window === "undefined" ? this : window);
