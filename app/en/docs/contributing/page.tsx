'use client'

import Link from 'next/link'
import { Heart, GitBranch, MessageSquare, Code, ChevronRight, ArrowLeft, Github } from 'lucide-react'

const contributions = [
  {
    icon: GitBranch,
    title: 'Report Bugs',
    description: 'Find errors and report them on GitHub Issues',
    link: 'https://github.com/mijelDeve/loom/issues',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Send pull requests with new features or fixes',
    link: 'https://github.com/mijelDeve/loom/pulls',
  },
  {
    icon: MessageSquare,
    title: 'Suggestions',
    description: 'Share ideas and suggestions to improve the project',
    link: 'https://github.com/mijelDeve/loom/discussions',
  },
  {
    icon: Heart,
    title: 'Translate',
    description: 'Help translate the documentation to other languages',
  },
]

const steps = [
  {
    step: 1,
    title: 'Fork the repository',
    description: 'Create your own copy of the repository on GitHub',
  },
  {
    step: 2,
    title: 'Clone your fork',
    description: 'Clone the repository to your local machine',
  },
  {
    step: 3,
    title: 'Create a branch',
    description: 'Create a branch for your feature or fix',
  },
  {
    step: 4,
    title: 'Make your changes',
    description: 'Implement your changes following the style guides',
  },
  {
    step: 5,
    title: 'Send a Pull Request',
    description: 'Upload your changes and create a PR for review',
  },
]

export default function ContributingPageEN() {
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
            Contributing
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join the development of Loom
          </p>
        </div>

        {/* Ways to Contribute */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ways to Contribute
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {contributions.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                      <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Steps */}
        <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Contributor Guide
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-900 dark:bg-black rounded-lg overflow-x-auto">
            <pre className="text-gray-300 text-sm font-mono">
{`# Development environment setup
git clone https://github.com/YOUR_USERNAME/loom.git
cd loom
npm install
npm run dev`}
            </pre>
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="mb-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Code of Conduct
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            When contributing to Loom, we ask you to maintain a respectful and constructive behavior. 
            Treat all contributors and users with respect and professionalism.
          </p>
        </div>

        {/* License */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            License
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Loom is licensed under the <strong>MIT License</strong>. 
            By contributing, you agree that your work will be published under this license.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/en/docs/faq"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            FAQ
          </Link>
          <Link
            href="/en/versions"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Versions
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}