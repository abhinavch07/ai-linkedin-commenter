document.addEventListener('DOMContentLoaded', () => {
  const providerSelect = document.getElementById('aiProvider');
  const apiKeyInput = document.getElementById('apiKey');
  const saveBtn = document.getElementById('saveBtn');
  const statusDiv = document.getElementById('status');

  // Load saved API key and provider
  chrome.storage.local.get(['geminiApiKey', 'aiProvider'], (result) => {
    if (result.geminiApiKey) apiKeyInput.value = result.geminiApiKey;
    if (result.aiProvider) providerSelect.value = result.aiProvider;
  });

  // Save API key and provider
  saveBtn.addEventListener('click', () => {
    chrome.storage.local.set({ 
      geminiApiKey: apiKeyInput.value.trim(),
      aiProvider: providerSelect.value
    }, () => {
      statusDiv.textContent = 'Settings saved successfully!';
      statusDiv.className = 'status-msg success';
      setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.className = 'status-msg';
      }, 3000);
    });
  });
});