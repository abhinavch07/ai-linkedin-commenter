export function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 mb-8 p-6 bg-indigo-600 text-white rounded-2xl">
        <div className="flex-shrink-0">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="12" rx="3" fill="white" fillOpacity=".9"/>
            <path d="M7 17L9.5 21L12 17" fill="white" fillOpacity=".9"/>
            <path d="M12 8.5l1 2.9 2.9 1-2.9 1L12 16.3l-1-2.9-2.9-1 2.9-1z" fill="#4f46e5"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold m-0">Privacy Policy</h1>
          <p className="text-indigo-100 m-0 text-sm">AI LinkedIn Commenter · ailinkedincommenter.com</p>
        </div>
      </div>

      <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <p className="mb-8">
          <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 rounded-full border border-green-200">
            Last updated: March 2026
          </span>
        </p>

        <h2>Overview</h2>
        <p>AI LinkedIn Commenter is a Chrome extension that generates AI-powered comments for LinkedIn posts. This privacy policy explains what data we collect, how we use it, and your rights. We are committed to handling your data with care and transparency.</p>

        <h2>What we collect</h2>
        <ul>
          <li><strong>Anonymous device ID</strong> — A randomly generated identifier created on install. It is not linked to your name, email, or any personal information. It is used to track your trial status and usage limits.</li>
          <li><strong>Email address (optional)</strong> — Only collected if you voluntarily provide it during the Day 5 trial reminder prompt. Used solely to send you a trial expiry reminder and upgrade information.</li>
          <li><strong>Daily usage count</strong> — We track how many comments you generate per day to enforce free tier and trial limits. This is stored server-side against your anonymous device ID.</li>
          <li><strong>IP address</strong> — Used temporarily to prevent automated abuse (limiting new trial registrations per IP per month). Not stored long-term or linked to any personal profile.</li>
        </ul>

        <h2>What we do NOT collect</h2>
        <ul>
          <li>Your name, LinkedIn profile, or any LinkedIn account information</li>
          <li>The content of LinkedIn posts you view or comment on (post text is sent directly to the AI provider for comment generation and is not stored by us)</li>
          <li>Your browsing history or any data from pages other than LinkedIn</li>
          <li>Your LinkedIn credentials or session cookies</li>
          <li>Any data from other websites or tabs</li>
        </ul>

        <h2>How LinkedIn post content is used</h2>
        <p>When you click the AI Commenter button, the text of the LinkedIn post or comment you are replying to is sent to our AI provider (OpenAI or Anthropic) to generate a reply. This text is transmitted via HTTPS and is used solely for generating your comment. We do not store this content on our servers. OpenAI and Anthropic's own privacy policies govern how they handle API requests.</p>

        <h2>AI providers</h2>
        <p>Free and trial users: comments are generated using OpenAI's GPT-4o mini model. Pro users: comments are generated using Anthropic's Claude Haiku model. Post content sent to these providers is subject to their respective privacy policies:</p>
        <ul>
          <li><a href="https://openai.com/privacy" target="_blank" rel="noreferrer">OpenAI Privacy Policy</a></li>
          <li><a href="https://www.anthropic.com/privacy" target="_blank" rel="noreferrer">Anthropic Privacy Policy</a></li>
        </ul>

        <h2>Data storage</h2>
        <p>Your anonymous device ID, trial status, usage counts, and optional email are stored in Upstash Redis — a serverless database hosted on secure cloud infrastructure. Device records are automatically deleted after 90 days of inactivity. Email records are retained for up to 12 months for upgrade communication.</p>

        <h2>Payments</h2>
        <p>Payments are processed by Razorpay (India) and PayPal (international). We do not store or have access to your payment card details. Razorpay and PayPal's privacy policies govern the handling of your payment information. Upon successful payment, we store only your email address and a generated license key in our database.</p>

        <h2>Chrome permissions explained</h2>
        <ul>
          <li><strong>storage</strong> — To save your settings (tone, length, preferences) and device ID locally on your device.</li>
          <li><strong>activeTab</strong> — To read the LinkedIn post text you are currently viewing in order to generate a relevant comment.</li>
          <li><strong>scripting</strong> — To inject the AI Commenter button into LinkedIn's comment boxes.</li>
          <li><strong>clipboardWrite</strong> — To copy generated comments to your clipboard as a fallback if direct insertion fails.</li>
        </ul>
        <p>The extension only activates on <strong>linkedin.com</strong> pages. It does not read data from any other website.</p>

        <h2>Data sharing</h2>
        <p>We do not sell, rent, or share your data with any third parties for advertising or marketing purposes. Data is shared only with the AI providers listed above, solely for the purpose of generating comments at your request.</p>

        <h2>Your rights</h2>
        <ul>
          <li><strong>Delete your data</strong> — Email us at <a href="mailto:privacy@ailinkedincommenter.com">privacy@ailinkedincommenter.com</a> to request deletion of your device record and any associated email.</li>
          <li><strong>Opt out of email</strong> — Reply to any email we send you with "unsubscribe" and we will remove your email immediately.</li>
          <li><strong>Data portability</strong> — Contact us to receive a copy of the data stored against your device ID.</li>
        </ul>

        <h2>Children's privacy</h2>
        <p>This extension is intended for professional use and is not directed at children under the age of 13. We do not knowingly collect data from children.</p>

        <h2>Changes to this policy</h2>
        <p>We may update this privacy policy from time to time. Material changes will be communicated via the extension popup or our website. Continued use of the extension after changes constitutes acceptance of the updated policy.</p>

        <h2>Contact</h2>
        <p>For any privacy-related questions or requests:<br/>
        Email: <a href="mailto:privacy@ailinkedincommenter.com">privacy@ailinkedincommenter.com</a><br/>
        Website: <a href="https://www.ailinkedincommenter.com">www.ailinkedincommenter.com</a>
        </p>

        <hr className="my-8" />
        <p className="text-sm text-slate-500">This policy was last updated in March 2026 and applies to AI LinkedIn Commenter version 2.0 and above.</p>
      </div>
    </div>
  );
}
