'use client'

import Link from 'next/link'
import { ArrowRight, FileText, GitBranch, Image, Terminal, Sun, Moon, Layers, Keyboard } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Editor & Preview',
    description: 'Markdown editor with split view, synchronized scrolling, and full GFM support.',
  },
  {
    icon: Layers,
    title: 'File Explorer',
    description: 'Obsidian-style navigation with tree structure, context menus, and quick search.',
  },
  {
    icon: Image,
    title: 'Image Management',
    description: 'Support for external URLs, embedded wiki-links, and native file picker.',
  },
  {
    icon: GitBranch,
    title: 'Git Integration',
    description: 'Clone, pull, push, and commit directly from the app with SSH authentication.',
  },
  {
    icon: Terminal,
    title: 'Integrated Terminal',
    description: 'Run PowerShell commands from the status bar with command history.',
  },
  {
    icon: Sun,
    title: 'Themes',
    description: 'Light and dark mode with localStorage preference persistence.',
  },
]

const quickLinks = [
  { href: '/en/docs/installation', label: 'Installation Guide', icon: ArrowRight },
  { href: '/en/docs/shortcuts', label: 'Keyboard Shortcuts', icon: ArrowRight },
  { href: '/en/docs/faq', label: 'FAQ', icon: ArrowRight },
]

export default function HomePageEN() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-[#0f0f14] dark:to-[#15151f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                Version 1.0.0 available
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              👨‍💻 Loom
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Desktop Markdown editor with Git integration.
              Built for developers and writers, inspired by Obsidian.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/en/docs/installation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                Get Started
              </Link>
              <Link
                href="/en/docs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
              >
                Read Docs
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
              <span className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700">
                Electron
              </span>
              <span className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700">
                React 18
              </span>
              <span className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700">
                TypeScript
              </span>
              <span className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700">
                TailwindCSS
              </span>
              <span className="px-3 py-1.5 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full border border-primary-100 dark:border-primary-800">
                v1.0.0
              </span>
            </div>
          </div>
        </div>

        {/* ASCII Art Preview */}
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <div className="bg-gray-900 dark:bg-black rounded-xl p-6 border border-gray-800">
            <pre className="ascii-art text-primary-400 text-center">
{`
╔═══════════════════════════════════════════════════════════╗
║  📁 project/                                            ║
║  ├── 📁 src/                                             ║
║  │   ├── 📄 main.ts          [Editor]  ████████████      ║
║  │   └── 📄 utils.ts        [Preview] ████████████      ║
║  ├── 📁 docs/                                              ║
║  │   └── 📄 README.md                                    ║
║  └── 📁 .git/                                             ║
║                                                            ║
║  ┌─ Git ───────────────────────────────────────────────┐  ║
║  │  ✓ 3 changes  ↑2  ↓1  ●main  origin/main           │  ║
║  └──────────────────────────────────────────────────────┘  ║
╚═══════════════════════════════════════════════════════════╝
`}
            </pre>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-[#0f0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to edit and manage your Markdown documents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50 dark:bg-[#15151f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Next Steps
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}