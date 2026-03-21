import { motion } from 'motion/react';
import { Linkedin, MousePointerClick, Zap, Send } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Open LinkedIn',
    description: 'Open any LinkedIn post in your feed where you want to engage.',
    icon: Linkedin,
  },
  {
    id: 2,
    title: 'Click AI Button',
    description: 'Click the "AI Commenter" button located right next to the emoji icon.',
    icon: MousePointerClick,
  },
  {
    id: 3,
    title: 'Instant Generation',
    description: 'A tailored, contextual comment is generated and inserted instantly.',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Edit & Post',
    description: 'Review or edit the comment if you want — then click Post. That\'s it!',
    icon: Send,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Under 3 seconds from click to ready-to-post comment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-indigo-100" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl shadow-indigo-100 ring-1 ring-slate-100 mb-8 relative z-10">
                <step.icon size={40} className="text-indigo-600" />
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold border-4 border-slate-50">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
