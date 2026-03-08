// Utility functions for the extension

const Utils = {
  // Extract text content from either a main post or a specific comment (for replies)
  extractContext: (commentBox) => {
    try {
      // 1. Check if this comment box is inside an existing comment (i.e., we are replying to a comment)
      const commentItem = commentBox.closest('.comments-comment-item, .comments-comments-list__comment-item');
      
      if (commentItem) {
        // We are replying to a comment. Extract the parent comment's text and author.
        const textEl = commentItem.querySelector('.comments-comment-item__main-content, .update-components-text');
        const authorEl = commentItem.querySelector('.comments-post-meta__name-text, .comments-post-meta__actor-name, .comments-post-meta__name');
        
        const text = textEl ? textEl.innerText.trim() : '';
        let author = 'LinkedIn User';
        if (authorEl) {
          author = authorEl.innerText.trim().split('\n')[0];
        }
        
        return { text, author, type: 'comment' };
      }
      
      // 2. Otherwise, we are commenting on the main post. Extract the post's text and author.
      const postContainer = commentBox.closest('.feed-shared-update-v2, .occludable-update, [data-urn]');
      if (!postContainer) return { text: '', author: 'LinkedIn User', type: 'post' };
      
      const textElement = postContainer.querySelector('.update-components-text, .feed-shared-update-v2__description, .feed-shared-inline-show-more-text, .feed-shared-text, .break-words');
      const authorElement = postContainer.querySelector('.update-components-actor__name, .feed-shared-actor__name, .update-components-actor__title span[dir="ltr"]');
      
      const text = textElement ? textElement.innerText.trim() : '';
      let author = 'LinkedIn User';
      if (authorElement) {
        author = authorElement.innerText.trim().split('\n')[0];
      }
      
      return { text, author, type: 'post' };
    } catch (error) {
      console.error('LinkedIn Commenter: Error extracting context:', error);
      return { text: '', author: '', type: 'post' };
    }
  },

  // Get user settings from storage
  getSettings: async () => {
    return new Promise((resolve) => {
      chrome.storage.local.get([
        'geminiApiKey', 'aiProvider', 'defaultTone', 'defaultLength',
        'mentionAuthor', 'useEmojis', 'openEnded'
      ], (result) => {
        resolve({
          apiKey: result.geminiApiKey || '',
          provider: result.aiProvider || 'gemini',
          tone: result.defaultTone || 'professional',
          length: result.defaultLength || '2',
          mentionAuthor: result.mentionAuthor || false,
          useEmojis: result.useEmojis !== false, // default true
          openEnded: result.openEnded || false
        });
      });
    });
  },

  // Save settings to storage
  saveSettings: (settings) => {
    chrome.storage.local.set(settings);
  },

  // Create the AI button element
  createAIButton: () => {
    const btnContainer = document.createElement('div');
    btnContainer.className = 'ai-comment-btn-container';
    
    const btn = document.createElement('button');
    btn.className = 'ai-comment-btn';
    btn.type = 'button'; // Prevent form submission
    btn.title = 'Generate AI Reply';
    
    // Using a creative chat bubble with an AI spark inside
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 6L13.2 9.6L17 10.8L13.2 12L12 15.6L10.8 12L7 10.8L10.8 9.6L12 6Z" fill="currentColor"/>
      </svg>
      <span>AI Comment</span>
    `;
    
    btnContainer.appendChild(btn);
    return btnContainer;
  }
};

window.AIUtils = Utils;