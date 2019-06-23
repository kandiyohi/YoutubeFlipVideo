// ==UserScript==
// @name         YoutubeFlipVideo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Flips youtube videos with a button in the info pane.
// @author       You
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function flip_video() {
        let e = document.getElementById("movie_player");
        if (e.style.MozTransform === "") {
            e.style.MozTransform = "rotateY(180deg)";
        }
        else {
            e.style.MozTransform = "";
        }
    }

    function create_button() {
        let button = document.getElementById("flip_button_tampermonkey");
        let info_pane = document.getElementById("info-contents");
        if (button === null) {
            button = document.createElement("button");
            button.textContent = "Flip video";
            button.id = "flip_button_tampermonkey";
            info_pane.appendChild(button);
            console.log("Created button");
        }

        if (button.onclick === null) {
            button.onclick = flip_video;
            console.log("Set onclick for button");
        }



    }
    setInterval(create_button, 500);

    // Your code here...
})();