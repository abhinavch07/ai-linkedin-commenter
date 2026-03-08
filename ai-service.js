// Service to handle AI API calls (Gemini, ChatGPT, Claude)

const AIService = {
  generateComment: async (contextText, author, type, settings) => {
    if (!settings.apiKey) {
      throw new Error('API Key is missing. Please set it in the extension popup.');
    }

    if (!contextText) {
      throw new Error('Could not extract content to reply to.');
    }

    // Map length slider (1,2,3) to instructions
    let lengthInstruction = '2 to 3 sentences';
    if (settings.length == 1) lengthInstruction = '1 to 2 short sentences';
    else if (settings.length == 3) lengthInstruction = 'a detailed, comprehensive paragraph';

    const contextName = type === 'comment' ? 'comment' : 'post';

    // Build the dynamic prompt based on user settings and context type
    let prompt = `You are an active professional on LinkedIn. Read the following LinkedIn ${contextName} by ${author}:\n\n"${contextText}"\n\n`;
    
    prompt += `Write a ${settings.tone} reply to this ${contextName}. `;
    prompt += `The reply should be ${lengthInstruction} long. `;
    
    if (settings.mentionAuthor) {
      prompt += `Start the reply by mentioning the author's name (@${author}). `;
    }
    
    if (settings.useEmojis) {
      prompt += `Include a few relevant emojis to make it engaging. `;
    } else {
      prompt += `Do NOT use any emojis. `;
    }

    if (settings.openEnded) {
      prompt += `End the reply with an open-ended question relevant to the topic to spark discussion. `;
    }

    prompt += `\nDo not include hashtags unless highly relevant. Do not include placeholders. Just return the final text directly without quotes.`;

    try {
      if (settings.provider === 'chatgpt') {
        return await AIService.callChatGPT(prompt, settings.apiKey);
      } else if (settings.provider === 'claude') {
        return await AIService.callClaude(prompt, settings.apiKey);
      } else {
        return await AIService.callGemini(prompt, settings.apiKey);
      }
    } catch (error) {
      console.error('AI Generation Error:', error);
      throw error;
    }
  },

  callGemini: async (prompt, apiKey) => {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          temperature: 0.7,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Gemini API request failed');
    }

    const data = await response.json();
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text.trim();
    } else {
      throw new Error('Unexpected Gemini API response format');
    }
  },

  callChatGPT: async (prompt, apiKey) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a professional LinkedIn user writing comments.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'ChatGPT API request failed');
    }

    const data = await response.json();
    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content.trim();
    } else {
      throw new Error('Unexpected ChatGPT API response format');
    }
  },

  callClaude: async (prompt, apiKey) => {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerously-allow-browser': 'true' // Required for client-side calls
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 300,
        messages: [
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Claude API request failed');
    }

    const data = await response.json();
    if (data.content && data.content[0] && data.content[0].text) {
      return data.content[0].text.trim();
    } else {
      throw new Error('Unexpected Claude API response format');
    }
  }
};

window.AIService = AIService;