import { Shield, EyeOff, Database, CreditCard, Chrome } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 p-8 bg-indigo-600 text-white rounded-3xl shadow-lg">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
          <Shield size={32} className="text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-indigo-100 text-lg max-w-2xl">
            We believe in plain English and complete transparency. Here is exactly how AI LinkedIn Commenter handles your data.
          </p>
        </div>
      </div>

      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
          Last updated: March 2026
        </p>

        {/* The "No" Section - Highlighting privacy first */}
        <div className="my-10 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
          <h3 className="flex items-center gap-2 text-emerald-800 mt-0 mb-4">
            <EyeOff className="text-emerald-600" />
            What we absolutely DO NOT collect
          </h3>
          <ul className="text-emerald-900 m-0 space-y-2">
            <li><strong>No personal profiles:</strong> We do not collect your name or LinkedIn profile data.</li>
            <li><strong>No browsing history:</strong> We do not track what you do outside of LinkedIn.</li>
            <li><strong>No credentials:</strong> We never see, touch, or store your LinkedIn passwords or session cookies.</li>
            <li><strong>No post storage:</strong> The LinkedIn posts you comment on are sent to our AI to generate a reply, but are <strong>never stored</strong> on our servers.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900">1. Information We Collect</h2>
        <p>To make the extension work and manage your trial/subscription, we collect the bare minimum:</p>
        <ul className="space-y-4 my-6">
          <li>
            <strong>Anonymous Device ID:</strong> A random string generated when you install the extension. Used to track your free trial and daily usage limits without knowing who you are.
          </li>
          <li>
            <strong>Email Address (Optional):</strong> Only collected if you voluntarily provide it for trial reminders, or when you purchase a premium license.
          </li>
          <li>
            <strong>Usage Statistics:</strong> We count how many comments you generate per day to enforce the limits of your specific plan.
          </li>
          <li>
            <strong>IP Address:</strong> Used temporarily to prevent automated abuse (like someone trying to create thousands of free trials). Not stored long-term.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900">2. Third-Party Services We Use</h2>
        <p>We use trusted, industry-leading partners to provide our service. Here is how your data is processed:</p>
        <ul className="space-y-4 my-6">
          <li>
            <strong><Database className="inline w-5 h-5 mr-1 text-slate-400"/> AI Providers (Comment Generation):</strong> When you generate a comment, the text of the LinkedIn post is sent securely to our AI provider to write the reply. Our providers do not use this data to train their models.
          </li>
          <li>
            <strong><Database className="inline w-5 h-5 mr-1 text-slate-400"/> Cloud Database Providers:</strong> We use secure cloud databases to store your anonymous device ID, usage counts, and license keys.
          </li>
          <li>
            <strong><CreditCard className="inline w-5 h-5 mr-1 text-slate-400"/> Payment Processors (Billing):</strong> If you upgrade, your payment is processed securely by industry-standard payment gateways. <strong>We never see or store your credit card details.</strong>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900">3. Why We Need Chrome Permissions</h2>
        <p>When you install the extension, Chrome will warn you about permissions. Here is exactly why we need them in plain English:</p>
        <div className="bg-slate-50 rounded-2xl p-6 not-prose my-6 border border-slate-100">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Chrome className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 block">storage</strong>
                <span className="text-sm text-slate-600">Saves your personal settings (like your preferred comment tone and length) directly on your device.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Chrome className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 block">activeTab & scripting</strong>
                <span className="text-sm text-slate-600">Allows the extension to read the specific LinkedIn post you want to comment on, and injects our "Generate" button into the comment box.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Chrome className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 block">clipboardWrite</strong>
                <span className="text-sm text-slate-600">A fallback feature that copies the generated comment to your clipboard just in case direct insertion fails.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Chrome className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
              <div>
                <strong className="text-slate-900 block">tabs</strong>
                <span className="text-sm text-slate-600">Helps the extension detect when you navigate between different pages on LinkedIn so the button always shows up when it should.</span>
              </div>
            </li>
          </ul>
        </div>
        <p className="text-sm text-slate-500 italic">Note: The extension is strictly locked to <strong>linkedin.com</strong>. It physically cannot read data from your bank, email, or any other website.</p>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900">4. Data Retention & Your Rights</h2>
        <p>We don't want to keep your data longer than necessary:</p>
        <ul className="space-y-4 my-6">
          <li><strong>Auto-deletion:</strong> Anonymous device records are automatically deleted after 90 days of inactivity.</li>
          <li><strong>Right to be forgotten:</strong> You can email us at any time to request the immediate deletion of your device record and any associated email address.</li>
          <li><strong>Opt-out:</strong> If you provided your email for trial reminders, you can reply "unsubscribe" to any email to be removed instantly.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900">5. Contact Us</h2>
        <p>If you have any questions about how we handle your data, we're here to help.</p>
        <ul className="space-y-4 my-6">
          <li><strong>Email:</strong> <a href="mailto:ailinkedincommenter@gmail.com">ailinkedincommenter@gmail.com</a></li>
          <li><strong>Website:</strong> <a href="https://www.ailinkedincommenter.com">www.ailinkedincommenter.com</a></li>
        </ul>

        <hr className="my-10 border-slate-200" />
        <p className="text-sm text-slate-500 text-center">
          AI LinkedIn Commenter & Post Generator · Version 2.1.0
        </p>
      </div>
    </div>
  );
}
