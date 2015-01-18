/*
    MUGer's Almanac / 音游玩家老黄历

    Copyright (c) 2015 Naoki Rinmous, published under MIT license.
*/

function nextScript(url) {
    var script = document.createElement('script');
    script.setAttribute('src', url + '?r=' + Math.random());
    document.body.appendChild(script);
}
