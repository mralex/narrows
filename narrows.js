
browser.browserAction.onClicked.addListener((info, tab) => {
  browser.tabs.executeScript({ file: 'narrower.js' })
})
