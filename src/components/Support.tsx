import { useState } from 'react';
import { Mail } from 'lucide-react';

export function Support() {
  const [category, setCategory] = useState('general');

  // Map categories to their specific Web3Forms Access Keys
  // Replace these placeholder keys with your actual Web3Forms access keys
  const accessKeys: Record<string, string> = {
    general: "YOUR_GENERAL_ACCESS_KEY",
    technical: "YOUR_TECHNICAL_ACCESS_KEY",
    payment: "YOUR_PAYMENT_ACCESS_KEY",
    others: "YOUR_OTHERS_ACCESS_KEY",
  };

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
          {/* Web3Forms requires encType="multipart/form-data" for file uploads */}
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            encType="multipart/form-data"
            className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value={accessKeys[category]} />
            
            {/* Web3Forms Subject */}
            <input type="hidden" name="subject" value={`New Support Request: ${category.toUpperCase()}`} />

            {/* Category Dropdown */}
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
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="John Doe"
                />
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

            {/* Attachment Field */}
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
                Max file size: 5MB. Supported formats: JPG, PNG, PDF, DOCX.
              </p>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
            >
              <Mail size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
