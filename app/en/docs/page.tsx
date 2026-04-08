'use client'

import Link from 'next/link'
import { BookOpen, Terminal, Download, Settings, Heart, HelpCircle, GitBranch, Image, FileText, Sun } from 'lucide-react'

const sections = [
  {
    icon: BookOpen,
    title: 'Features',
    description: 'Explore all Markdaun features',
    href: '/en/docs/features',
  },
  {
    icon: Download,
    title: 'Installation',
    description: 'How to install Markdaun on your system',
    href: '/en/docs/installation',
  },
  {
    icon: Terminal,
    title: 'Keyboard Shortcuts',
    description: 'All shortcuts to be more productive',
    href: '/en/docs/shortcuts',
  },
  {
    icon: Settings,
    title: 'Configuration',
    description: 'Customize Markdaun to your needs',
    href: '/en/docs/configuration',
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Frequently asked questions and solutions',
    href: '/en/docs/faq',
  },
  {
    icon: Heart,
    title: 'Contributing',
    description: 'How to contribute to the project',
    href: '/en/docs/contributing',
  },
]

const features = [
  { icon: FileText, text: 'Editor & Preview' },
  { icon: GitBranch, text: 'Git Integration' },
  { icon: Image, text: 'Image Management' },
  { icon: Sun, text: 'Light/Dark Themes' },
]

export default function DocsPageEN() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Markdaun
          </p>
        </div>

        {/* Quick Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <Icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {feature.text}
                </span>
              </div>
            )
          })}
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <Link
                key={index}
                href={section.href}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {section.description}
                </p>
              </Link>
            )
          })}
        </div>

        {/* Tech Stack */}
        <div className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Electron', 'React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'react-markdown', 'simple-git', 'electron-log', 'lucide-react'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}