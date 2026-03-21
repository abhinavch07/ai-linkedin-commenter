import { motion } from 'motion/react';
import { LayoutTemplate, BrainCircuit, Globe, Flame, BarChart3, TrendingUp, PenTool, History, UserCircle } from 'lucide-react';

const features = [
  {
    name: 'Inline Experience',
    description: 'Works inside LinkedIn\'s comment box. No context switching, no new tabs.',
    icon: LayoutTemplate,
  },
  {
    name: '4 Smart Tones',
    description: 'Professional, Casual, Insightful, or Bold take. Each produces genuinely different output.',
    icon: BrainCircuit,
  },
  {
    name: 'Language Detection',
    description: 'Automatically replies in the same language as the post. Hindi post? Hindi reply.',
    icon: Globe,
  },
  {
    name: 'Hot Post Badge',
    description: 'Detects posts under 2 hours old and highlights them. The LinkedIn algorithm rewards early commenting.',
    icon: Flame,
  },
  {
    name: 'Quality Score',
    description: 'Every generated comment gets a score (e.g. "87/100 · 34 words") so you know it will perform.',
    icon: BarChart3,
  },
  {
    name: 'Engagement Streak',
    description: 'Tracks your daily commenting streak and weekly engagement score. See how you rank.',
    icon: TrendingUp,
  },
  {
    name: 'AI Post Generator',
    description: 'Generate full LinkedIn posts from a topic in seconds. Perfect hook, short paragraphs.',
    icon: PenTool,
  },
  {
    name: 'Comment History',
    description: 'Your last 20 generated comments saved locally. Copy any of them with one click.',
    icon: History,
  },
  {
    name: 'Custom Persona (Pro)',
    description: 'Tell the AI who you are once. Every comment reflects your industry, voice, and expertise.',
    icon: UserCircle,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Key Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to maximize your LinkedIn influence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-start p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-indigo-100 transition-all group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.name}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
