// ==UserScript==
// @name         YoutubeFlipVideo
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Flips youtube videos with a button in the info pane.
// @author       You
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

// Copyright 2019 Donald 'kandiyohi' Johnson
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

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
