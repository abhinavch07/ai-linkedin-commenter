export function TermsOfService() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <p className="lead text-xl text-slate-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">1. Agreement to Terms</h2>
        <p className="mb-6">
          By installing and using the AI Linkedin Commenter Chrome Extension ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">2. Description of Service</h2>
        <p className="mb-6">
          AI Linkedin Commenter is a browser extension that utilizes artificial intelligence to generate suggested comments for LinkedIn posts. The Service is designed to assist users in engaging with content on the LinkedIn platform.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">3. User Responsibilities</h2>
        <p className="mb-4">When using our Service, you agree that:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>You are solely responsible for the comments you post on LinkedIn. You should review all AI-generated suggestions before posting.</li>
          <li>You will not use the Service to generate spam, harassing, offensive, or illegal content.</li>
          <li>You will comply with LinkedIn's User Agreement and Professional Community Policies.</li>
          <li>You will not attempt to reverse engineer, decompile, or extract the source code of the extension.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">4. Intellectual Property</h2>
        <p className="mb-6">
          The Service and its original content, features, and functionality are and will remain the exclusive property of AI Linkedin Commenter and its licensors. The Service is protected by copyright, trademark, and other laws.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">5. Disclaimer of Warranties</h2>
        <p className="mb-6">
          The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the Service. We do not guarantee that the AI-generated comments will achieve specific results or engagement metrics.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">6. Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall AI Linkedin Commenter, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">7. Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes by updating the date at the top of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">8. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about these Terms, please contact us at <a href="mailto:support@ailinkedincommenter.com" className="font-medium hover:underline">support@ailinkedincommenter.com</a>.
        </p>
      </div>
    </div>
  );
}
