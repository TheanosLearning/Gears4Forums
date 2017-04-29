// add custom css
(function injectStyle() {
    let style = document.createElement('link');
    style.rel = "stylesheet"; style.type = "text/css";
    style.href = chrome.extension.getURL("/styles/forums.css");
    document.head.appendChild(style);
})();

let menu = document.getElementById('menu');
let menuItems = menu.querySelector('ul');
Array.from(menuItems.children).forEach(item => item.getElementsByTagName('a')[0].style.padding = "16px 16px");

let forums = document.createElement('li');
forums.innerHTML = `<a href="/forums"><span>Forums</span></a>`;
menuItems.insertBefore(forums, menuItems.children[3]);

if (window.location.href.includes("forums")) {
	forums.classList.add('forums-selected');
	forums.children[0].style.color = "#ffffff";
}