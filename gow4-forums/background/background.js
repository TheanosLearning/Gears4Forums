let cardsURL = "https://gearsofwar.com/forums";

function openInNewTab(url) {
    let win = window.open(url, '_blank');
    win.focus();
}

chrome.browserAction.onClicked.addListener(() => openInNewTab(cardsURL));