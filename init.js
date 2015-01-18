function nextScript(url) {
    var script = document.createElement('script');
    script.setAttribute('src', url + '?r=' + Math.random());
    document.body.appendChild(script);
}
