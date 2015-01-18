/*
    MUGer's Almanac / 音游玩家老黄历

    Copyright (c) 2015 Naoki Rinmous, published under MIT license.
*/

/* Parameters */

var countGood = 4;
var countBad  = 4;

var today = new Date();
var seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

/* Functions */

function createItem(text, reason, imgid) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    var h3  = document.createElement('h3');
    var p   = document.createElement('p');

    img .setAttribute('src', 'http://static.acfun.mm111.net/dotnet/20130418/umeditor/dialogs/emotion/images/ac/' + imgid + '.gif');
    h3  .appendChild(document.createTextNode(text));
    p   .appendChild(document.createTextNode(reason));

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);

    div.setAttribute('class', 'section l-item');

    return div;
}

function renderItem(parent, text, reason, imgid) {
    var target = document.getElementById(parent);
    target.appendChild(createItem(text, reason, imgid));
}

function random(seed, index) {
    var n = seed % 11117;
    for (var i = 0; i < 100 + index; i++) {
        n = n * n;
        n = n % 11117;
    }
    return n;
}

function generateItems(count) {
    var ret = [];
    for (var i = 1; i <= count; i++) {
        var index = random(seed, i) % items.length;
        ret.push(items[index]);
        items.splice(index, 1);
    }

    return ret;
}

function generateGames(count) {
    var ret = [];
    for (var i = 1; i <= count; i++) {
        var index = random(seed, i) % games.length;
        ret.push(games[index]);
        games.splice(index, 1);
    }

    return ret;
}

/* Render Alamanc */

var data = generateItems(countGood + countBad);

for (var i = 1; i <= countGood; i++) {
    item = data.pop();
    renderItem('l-good', item.title, item.reason[0], random(seed, i) % 50);
}
for (var i = 1; i <= countBad ; i++) {
    item = data.pop();
    renderItem('l-bad', item.title, item.reason[1], random(seed, i + countGood) % 50);
}

/* Render Date & Games */

var data = generateGames(2);

document.getElementById('game1').innerHTML = data[0];
document.getElementById('game2').innerHTML = data[1];

document.getElementById('date').innerHTML = today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日';
