chrome.alarms.create({ periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener(() => {
  chrome.action.setBadgeText({ text: '...' });
  fetchBitcoinPrice().then(price => {
    chrome.action.setBadgeText({ text: price });
  });
});
