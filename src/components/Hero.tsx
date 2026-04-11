import { motion } from 'motion/react';
import { Chrome, Zap, MessageSquareText, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 sm:pt-32 sm:pb-40">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 mb-8">
            <Zap size={16} className="text-indigo-500" />
            <span>LinkedIn comments in one click</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-8">
            Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">AI-powered</span> LinkedIn comments instantly.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Professional, human-sounding. Works directly inside LinkedIn's comment box. Under 3 seconds from click to ready-to-post comment. No sidebars. No copy-pasting. No separate app.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-500 hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              <Chrome size={24} />
              Add to Chrome — Free Trial
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition-all w-full sm:w-auto"
            >
              See How It Works
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <MessageSquareText size={20} className="text-indigo-500" />
              <span>Inline Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-indigo-500" />
              <span>Under 3 Seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-indigo-500" />
              <span>Boost Engagement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
