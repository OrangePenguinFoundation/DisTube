chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get({
        timeout:"1"
    }, function(items) {

        chrome.tabs.sendMessage(tab.id, {text: items.timeout});

    });
});