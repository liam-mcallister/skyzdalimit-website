const baguetteBox = require("baguettebox.js");

window.addEventListener("load", function () {
    baguetteBox.run(".gallery", {
        animation: 'fadeIn',
        bodyClass: 'no-scroll'
    });
});