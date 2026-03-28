import { useState, FormEvent } from 'react';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';

const BACKEND = 'https://linkedin-ai-steel.vercel.app';
const TOKEN = 'bab2be1d78441128a591f43d0c294408';

export function Support() {
  const [category, setCategory] = useState('general');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get('email') as string || '').trim();
    const message = (formData.get('message') as string || '').trim();
    const file = formData.get('attachment') as File | null;

    const payload: Record<string, unknown> = { email, message, type: category };

    // Read file as base64 if present
    if (file && file.size > 0) {
      if (file.size > 3 * 1024 * 1024) {
        setStatus('error');
        setErrorMsg('File too large (max 3 MB).');
        return;
      }
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      payload.attachment = { filename: file.name, content: base64 };
    }

    try {
      const res = await fetch(`${BACKEND}/api/support`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-token': TOKEN },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Failed to send. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Cannot reach server. Please try again later.');
    }
  }

  if (status === 'success') {
    return (
      <section id="support" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center py-16">
            <CheckCircle size={48} className="mx-auto text-emerald-500 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-slate-600 mb-6">We'll get back to you within 24 hours. Check your email for a confirmation.</p>
            <button
              onClick={() => setStatus('idle')}
              className="text-indigo-600 font-semibold hover:text-indigo-500 transition-colors"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="support" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Contact Us</h2>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Support & Inquiries
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Have a question or need help? Fill out the form below or email us directly at{' '}
            <a href="mailto:support@ailinkedincommenter.com" className="font-semibold text-indigo-600 hover:text-indigo-500">
              support@ailinkedincommenter.com
            </a>
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
            <div>
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-slate-900">
                Category of Support
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full rounded-md border-0 py-3 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                >
                  <option value="general">Query / Feedback</option>
                  <option value="payment">Payment / Billing</option>
                  <option value="technical">Technical Issue</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-900">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            <div>
              <label htmlFor="attachment" className="block text-sm font-medium leading-6 text-slate-900">
                Attachment <span className="text-slate-500 font-normal">(Optional)</span>
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="attachment"
                  id="attachment"
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 transition-all cursor-pointer border border-slate-300 rounded-md bg-white"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Max file size: 3MB. Supported formats: JPG, PNG, PDF.
              </p>
            </div>

            {errorMsg && (
              <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
