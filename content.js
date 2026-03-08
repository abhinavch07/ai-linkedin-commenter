// Main content script injected into LinkedIn

(function() {
  // Prevent multiple injections
  if (window.hasAICommenterInjected) return;
  window.hasAICommenterInjected = true;
  
  console.log('LinkedIn Commenter: Script loaded on LinkedIn');

  let activeOverlay = null;

  // Function to inject AI buttons into the comment box
  const injectButtons = () => {
    // This selector catches both main post comment boxes AND reply-to-comment boxes
    const commentBoxes = document.querySelectorAll('.comments-comment-box, .feed-shared-update-v2__comment-box, .comments-comment-texteditor');
    
    commentBoxes.forEach(box => {
      // CRITICAL FIX: Check if THIS SPECIFIC comment box already has our AI button.
      if (box.querySelector('.ai-comment-btn-container')) {
        return; 
      }

      const buttons = Array.from(box.querySelectorAll('button'));
      
      // Find the primary submit button (Reply, Comment, or Post)
      const primaryBtn = buttons.find(btn => {
        return btn.type === 'submit' || 
               btn.classList.contains('artdeco-button--primary') || 
               (btn.innerText && (btn.innerText.toLowerCase().includes('reply') || btn.innerText.toLowerCase().includes('comment') || btn.innerText.toLowerCase().includes('post')));
      });

      const isReplyBox = primaryBtn && primaryBtn.innerText && primaryBtn.innerText.toLowerCase().includes('reply');
      
      if (isReplyBox && primaryBtn) {
        // For reply box, place before the Reply button
        const btnContainer = primaryBtn.parentElement;
        const aiBtnContainer = window.AIUtils.createAIButton();
        
        // Add a specific class for reply box styling
        aiBtnContainer.classList.add('ai-reply-mode');
        
        if (window.getComputedStyle(btnContainer).display !== 'flex') {
          btnContainer.style.display = 'flex';
          btnContainer.style.alignItems = 'center';
        }
        
        btnContainer.insertBefore(aiBtnContainer, primaryBtn);
        
        const aiBtn = aiBtnContainer.querySelector('.ai-comment-btn');
        aiBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          showOverlay(e.target, box);
        });
      } else {
        // For main comment box, keep original behavior (before emoji)
        const emojiBtn = buttons.find(btn => {
          const hasSvg = btn.querySelector('svg') !== null;
          const isSubmit = btn === primaryBtn || btn.type === 'submit' || btn.classList.contains('artdeco-button--primary');
          return hasSvg && !isSubmit;
        });

        if (emojiBtn) {
          const iconContainer = emojiBtn.parentElement;
          
          const aiBtnContainer = window.AIUtils.createAIButton();
          
          if (window.getComputedStyle(iconContainer).display !== 'flex') {
            iconContainer.style.display = 'flex';
            iconContainer.style.alignItems = 'center';
          }
          
          iconContainer.insertBefore(aiBtnContainer, emojiBtn);
          
          const aiBtn = aiBtnContainer.querySelector('.ai-comment-btn');
          aiBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showOverlay(e.target, box);
          });
        }
      }
    });
  };

  // Show the AI generation overlay
  const showOverlay = async (buttonElement, commentBox) => {
    if (activeOverlay) {
      activeOverlay.remove();
    }

    // Extract context (handles both main posts and comment replies)
    const { text: contextText, author, type } = window.AIUtils.extractContext(commentBox);
    let currentSettings = await window.AIUtils.getSettings();

    const overlay = document.createElement('div');
    overlay.className = 'ai-comment-overlay';
    
    const rect = buttonElement.getBoundingClientRect();
    const topPos = Math.max(window.scrollY + rect.top - 320, window.scrollY + 20);
    const leftPos = Math.max(window.scrollX + rect.left - 300, 10);
    
    overlay.style.top = `${topPos}px`;
    overlay.style.left = `${leftPos}px`;

    // Build Overlay HTML
    overlay.innerHTML = `
      <div class="ai-overlay-header">
        <div class="ai-overlay-title">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white" opacity="0.2"/>
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 6L13.2 9.6L17 10.8L13.2 12L12 15.6L10.8 12L7 10.8L10.8 9.6L12 6Z" fill="white"/>
          </svg>
          LinkedIn Commenter
        </div>
        <button class="ai-overlay-close">&times;</button>
      </div>
      <div class="ai-overlay-body">
        <div class="ai-overlay-controls">
          <select id="ai-tone">
            <option value="professional" ${currentSettings.tone === 'professional' ? 'selected' : ''}>👔 Professional</option>
            <option value="casual" ${currentSettings.tone === 'casual' ? 'selected' : ''}>👋 Casual</option>
            <option value="gracious" ${currentSettings.tone === 'gracious' ? 'selected' : ''}>🤗 Gracious</option>
            <option value="insightful" ${currentSettings.tone === 'insightful' ? 'selected' : ''}>💡 Insightful</option>
            <option value="questioning" ${currentSettings.tone === 'questioning' ? 'selected' : ''}>🤔 Questioning</option>
            <option value="passionate" ${currentSettings.tone === 'passionate' ? 'selected' : ''}>🔥 Passionate</option>
          </select>
          <select id="ai-length">
            <option value="1" ${currentSettings.length == 1 ? 'selected' : ''}>Brief</option>
            <option value="2" ${currentSettings.length == 2 ? 'selected' : ''}>Medium</option>
            <option value="3" ${currentSettings.length == 3 ? 'selected' : ''}>Detailed</option>
          </select>
        </div>
        
        <div class="ai-overlay-options">
          <label class="ai-chip-checkbox">
            <input type="checkbox" id="ai-opt-mention" ${currentSettings.mentionAuthor ? 'checked' : ''}>
            <span class="ai-chip-label">@ Mention</span>
          </label>
          <label class="ai-chip-checkbox">
            <input type="checkbox" id="ai-opt-emojis" ${currentSettings.useEmojis ? 'checked' : ''}>
            <span class="ai-chip-label">😀 Emojis</span>
          </label>
          <label class="ai-chip-checkbox">
            <input type="checkbox" id="ai-opt-open" ${currentSettings.openEnded ? 'checked' : ''}>
            <span class="ai-chip-label">❓ Open Ended</span>
          </label>
        </div>

        <textarea class="ai-overlay-textarea" placeholder="Generated comment will appear here..."></textarea>
        <div class="ai-loading">Generating magic...</div>
        
        <div class="ai-overlay-actions">
          <button class="ai-btn-small ai-btn-generate">Regenerate</button>
          <button class="ai-btn-small ai-btn-insert">Insert Comment</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    activeOverlay = overlay;

    const closeBtn = overlay.querySelector('.ai-overlay-close');
    const generateBtn = overlay.querySelector('.ai-btn-generate');
    const insertBtn = overlay.querySelector('.ai-btn-insert');
    const textarea = overlay.querySelector('.ai-overlay-textarea');
    const loadingDiv = overlay.querySelector('.ai-loading');

    closeBtn.addEventListener('click', () => {
      overlay.remove();
      activeOverlay = null;
    });

    const generateComment = async () => {
      if (!currentSettings.apiKey) {
        textarea.value = "Please set your Gemini API key in the extension popup first.";
        return;
      }

      // Read current state of overlay toggles
      currentSettings.tone = overlay.querySelector('#ai-tone').value;
      currentSettings.length = overlay.querySelector('#ai-length').value;
      currentSettings.mentionAuthor = overlay.querySelector('#ai-opt-mention').checked;
      currentSettings.useEmojis = overlay.querySelector('#ai-opt-emojis').checked;
      currentSettings.openEnded = overlay.querySelector('#ai-opt-open').checked;

      // Save settings so they persist for the next time the overlay is opened
      window.AIUtils.saveSettings({
        defaultTone: currentSettings.tone,
        defaultLength: currentSettings.length,
        mentionAuthor: currentSettings.mentionAuthor,
        useEmojis: currentSettings.useEmojis,
        openEnded: currentSettings.openEnded
      });

      textarea.style.display = 'none';
      loadingDiv.classList.add('active');
      generateBtn.disabled = true;
      insertBtn.disabled = true;

      try {
        const comment = await window.AIService.generateComment(contextText, author, type, currentSettings);
        textarea.value = comment;
      } catch (error) {
        textarea.value = `Error: ${error.message}`;
      } finally {
        textarea.style.display = 'block';
        loadingDiv.classList.remove('active');
        generateBtn.disabled = false;
        insertBtn.disabled = false;
      }
    };

    generateBtn.addEventListener('click', generateComment);

    insertBtn.addEventListener('click', () => {
      const commentText = textarea.value.trim();
      if (commentText) {
        const editor = commentBox ? commentBox.querySelector('.ql-editor, [contenteditable="true"]') : null;
        
        if (editor) {
          editor.focus();
          
          if (editor.classList.contains('ql-editor')) {
            editor.innerHTML = `<p>${commentText}</p>`;
          } else {
            editor.innerText = commentText;
          }
          
          editor.dispatchEvent(new Event('input', { bubbles: true }));
          
          const textEvent = document.createEvent('TextEvent');
          if (textEvent.initTextEvent) {
            textEvent.initTextEvent('textInput', true, true, window, commentText);
            editor.dispatchEvent(textEvent);
          }
        } else {
          navigator.clipboard.writeText(commentText).then(() => {
            alert('Comment copied to clipboard! You can paste it into the comment box.');
          });
        }
      }
      overlay.remove();
      activeOverlay = null;
    });

    // Auto-generate on first open
    generateComment();
  };

  document.addEventListener('click', (e) => {
    if (activeOverlay && !activeOverlay.contains(e.target) && !e.target.closest('.ai-comment-btn')) {
      activeOverlay.remove();
      activeOverlay = null;
    }
  });

  const observer = new MutationObserver((mutations) => {
    let shouldInject = false;
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        shouldInject = true;
        break;
      }
    }
    if (shouldInject) {
      setTimeout(injectButtons, 500);
    }
  });

  const startObserving = () => {
    observer.observe(document.body, { childList: true, subtree: true });
    injectButtons();
    setInterval(injectButtons, 1000);
    console.log('LinkedIn Commenter: Observer and interval started');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserving);
  } else {
    startObserving();
  }
})();