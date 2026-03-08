// Background service worker for the extension

chrome.runtime.onInstalled.addListener(() => {
  console.log('LinkedIn Commenter extension installed.');
  
  // Initialize default settings if not present
  chrome.storage.local.get([
    'defaultTone', 'defaultLength', 'useEmojis', 'mentionAuthor', 'openEnded'
  ], (result) => {
    const defaults = {};
    if (!result.defaultTone) defaults.defaultTone = 'gracious';
    if (!result.defaultLength) defaults.defaultLength = '2';
    if (result.useEmojis === undefined) defaults.useEmojis = true;
    if (result.mentionAuthor === undefined) defaults.mentionAuthor = false;
    if (result.openEnded === undefined) defaults.openEnded = false;
    
    if (Object.keys(defaults).length > 0) {
      chrome.storage.local.set(defaults);
    }
  });
});