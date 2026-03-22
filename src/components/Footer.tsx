import { Link } from 'react-router-dom';
import { MessageSquareText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white">
                <MessageSquareText size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AI Linkedin Commenter
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              The smartest way to engage on LinkedIn. Generate thoughtful comments in seconds and grow your professional network effortlessly.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="/#features" className="text-sm hover:text-white transition-colors">Features</a></li>
              <li><a href="/#how-it-works" className="text-sm hover:text-white transition-colors">How it Works</a></li>
              <li><a href="/#pricing" className="text-sm hover:text-white transition-colors">Pricing</a></li>
              <li><Link to="/upgrade" className="text-sm hover:text-white transition-colors">Upgrade to Pro</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="/#support" className="text-sm hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AI Linkedin Commenter. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Not affiliated with LinkedIn Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
