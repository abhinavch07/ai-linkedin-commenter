import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isIndia, setIsIndia] = useState(false);

  const pricing = {
    india: {
      monthly: '₹499',
      yearly: '₹3,999',
      currency: 'INR'
    },
    global: {
      monthly: '$7',
      yearly: '$55',
      currency: 'USD'
    }
  };

  const currentPricing = isIndia ? pricing.india : pricing.global;
  const price = isAnnual ? currentPricing.yearly : currentPricing.monthly;
  const period = isAnnual ? '/year' : '/month';

  const freeFeatures = [
    'Full access to all Pro features',
    'Unlimited AI comments',
    'AI Post Generator',
    'Comment History & Golden Hour',
    'Custom Persona'
  ];

  const proFeatures = [
    'Everything in Trial, plus:',
    'Permanent access (no hard block)',
    'Advanced Engagement Analytics',
    'Scheduled Commenting Windows',
    'Multi-language Personas',
    'Priority Customer Support'
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Start for free, upgrade when you need more power.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mb-12">
          {/* Region Toggle */}
          <div className="flex items-center p-1 bg-slate-200/50 rounded-full">
            <button
              onClick={() => setIsIndia(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isIndia ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Global (USD)
            </button>
            <button
              onClick={() => setIsIndia(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isIndia ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              India (INR)
            </button>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">Save {isIndia ? '33%' : '34%'}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Trial Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10 flex flex-col"
          >
            <h3 className="text-2xl font-semibold leading-8 text-slate-900">14-Day Trial</h3>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Perfect for experiencing the full power of the extension.
            </p>
            <div className="mt-6 flex items-baseline gap-x-1">
              <span className="text-5xl font-bold tracking-tight text-slate-900">Free</span>
            </div>
            <a
              href="https://chromewebstore.google.com/detail/ai-linkedin-commenter/cllejjiggpdloaalnimjpbpgapnjoled"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-full bg-white px-3 py-3 text-center text-sm font-semibold leading-6 text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:bg-slate-50 transition-all"
            >
              Start Free Trial
            </a>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 flex-grow">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-indigo-600 p-8 shadow-xl ring-1 ring-indigo-500 sm:p-10 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-indigo-500 blur-2xl opacity-50"></div>
            <h3 className="text-2xl font-semibold leading-8 text-white">Pro Plan</h3>
            <p className="mt-4 text-sm leading-6 text-indigo-100">
              Everything you need to supercharge your LinkedIn engagement.
            </p>
            <div className="mt-6 flex items-baseline gap-x-1">
              <span className="text-5xl font-bold tracking-tight text-white">{price}</span>
              <span className="text-sm font-semibold leading-6 text-indigo-200">{period}</span>
            </div>
            <a
              href="https://chromewebstore.google.com/detail/ai-linkedin-commenter/cllejjiggpdloaalnimjpbpgapnjoled"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-full bg-white px-3 py-3 text-center text-sm font-semibold leading-6 text-indigo-600 shadow-sm hover:bg-indigo-50 transition-all"
            >
              Upgrade to Pro
            </a>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-indigo-100 flex-grow">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>Secure payments processed by {isIndia ? 'Razorpay' : 'Dodo Payments'}.</p>
        </div>
      </div>
    </section>
  );
}
