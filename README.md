# AI LinkedIn Commenter

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.3.0-green.svg)

A powerful, open-source browser extension that generates contextual, AI-powered comments and replies for LinkedIn posts directly inside the LinkedIn comment box. 

**Bring Your Own Key (BYOK)**: This extension supports multiple AI providers. You can use your own API key from **Google Gemini**, **OpenAI ChatGPT**, or **Anthropic Claude**.

![Demo](demo.gif)
*(Note: Record a quick GIF of the extension in action and save it as `demo.gif` in this repository to show it off!)*

## ✨ Features

*   **Multi-Provider Support:** Choose between Gemini (1.5 Flash), ChatGPT (gpt-4o-mini), or Claude (Claude 3 Haiku).
*   **Inline UI:** The AI button is injected directly into LinkedIn's comment and reply boxes.
*   **Customizable Tone & Length:** Choose from Professional, Casual, Gracious, Insightful, Questioning, or Passionate tones.
*   **Smart Context:** Automatically reads the post or the specific comment you are replying to.
*   **Privacy-First:** Your API keys are stored locally on your device using `chrome.storage.local`. No middleman servers are used.

## 🚀 Installation (Developer Mode)

To install this extension directly from the source code:

1.  **Download or Clone** this repository to your local machine.
2.  Open Google Chrome or Brave and navigate to `chrome://extensions/`.
3.  Enable **Developer mode** (toggle switch in the top right corner).
4.  Click the **Load unpacked** button in the top left.
5.  Select the folder containing these extension files.
6.  The extension is now installed! Pin it to your toolbar for easy access.

## 🔑 Getting Your API Key

You will need an API key from one of the supported providers. Most offer free tiers or low-cost usage.

*   **Google Gemini:** Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
*   **OpenAI ChatGPT:** Get an API key from the [OpenAI Developer Platform](https://platform.openai.com/api-keys).
*   **Anthropic Claude:** Get an API key from the [Anthropic Console](https://console.anthropic.com/settings/keys).

Once you have your key:
1. Click the extension icon in your browser toolbar.
2. Select your provider from the dropdown.
3. Paste your API key and click **Save**.

## 💻 Usage

1.  Go to [LinkedIn](https://www.linkedin.com) and find a post you want to comment on.
2.  Click the "Comment" button to open the comment box.
3.  You will see a new **AI Comment** button next to the "Post" button.
4.  Click it to open the AI settings overlay.
5.  Select your desired tone, length, and options (like @mentioning the author or adding emojis).
6.  Click **Generate**.
7.  Review the generated text, edit if necessary, and click **Insert** to add it to the comment box!

## 🔒 Privacy Policy

This extension is designed with privacy in mind. 
*   **API Keys:** Your API keys are stored locally on your device. They are never transmitted to any server other than the official API endpoints of the provider you select (Google, OpenAI, or Anthropic).
*   **Data Usage:** The extension only reads the text of the LinkedIn post or comment you are actively replying to. This text is sent directly to your chosen AI provider to generate the response. No data is collected, stored, or sold by the developer of this extension.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📝 License

This project is [MIT](LICENSE) licensed.
