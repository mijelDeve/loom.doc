'use client'

import Link from 'next/link'
import { HelpCircle, ChevronRight, ArrowLeft } from 'lucide-react'

const faqs = [
  {
    question: 'What is Markdaun?',
    answer: 'Markdaun is a desktop Markdown editor with Git integration. It is inspired by Obsidian and built with Electron, React, and TypeScript.',
  },
  {
    question: 'How do I install Markdaun?',
    answer: 'You can download the pre-built version for your operating system from the Releases section on GitHub. You can also build from source by following the installation guide.',
  },
  {
    question: 'Do I need Git installed?',
    answer: 'Yes, to use the Git integration features you need Git installed on your system. Markdaun uses Git for version control.',
  },
  {
    question: 'How do I configure SSH authentication?',
    answer: 'In the Git panel, you can configure your SSH key by either specifying the path to the private key file or pasting the key content directly.',
  },
  {
    question: 'Can I use wiki-links like in Obsidian?',
    answer: 'Yes, Markdaun supports wiki-links using the ![[filename]] syntax. This allows you to link to other Markdown files.',
  },
  {
    question: 'Are local images stored as base64?',
    answer: 'Yes, local images are converted to base64 to avoid browser security restrictions and to render them correctly in the preview.',
  },
  {
    question: 'Is there a dark theme?',
    answer: 'Yes, Markdaun includes light and dark themes. The preference is saved in localStorage and persists between sessions.',
  },
  {
    question: 'Can I run commands in the integrated terminal?',
    answer: 'Yes, you can run PowerShell commands directly from the application status bar. Use the ↑↓ arrows to navigate through the command history.',
  },
  {
    question: 'How can I contribute to the project?',
    answer: 'You can contribute by cloning the repository, creating issues to report bugs, or sending pull requests. Check the contributing section for more details.',
  },
  {
    question: 'What is Markdaun\'s license?',
    answer: 'Markdaun is licensed under the MIT License.',
  },
]

export default function FAQPageEN() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/en/docs"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Documentation
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Answers to common questions about Markdaun
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 ml-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Have another question?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you did not find the answer you were looking for, you can open an issue on GitHub.
          </p>
          <a
            href="https://github.com/markdaun/markdaun/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Open Issue
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/en/docs/shortcuts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Keyboard Shortcuts
          </Link>
          <Link
            href="/en/docs/contributing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Contributing
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}