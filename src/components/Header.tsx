import { Link } from 'react-router-dom';
import { MessageSquareText } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <MessageSquareText size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            AI Linkedin Commenter
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            How it Works
          </a>
          <a href="/#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="/#support" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Support
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </header>
  );
}
