chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['script.js']
            }).catch(error => console.error(`Failed to execute script: ${error}`));
        });
    }
});