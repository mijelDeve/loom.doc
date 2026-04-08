'use client'

import Link from 'next/link'
import { Code, Terminal, ChevronRight, ArrowLeft, Clock, Download, Monitor, Apple, Package } from 'lucide-react'

const requirements = [
  'Windows 10/11, macOS, or Linux',
  'Node.js 18+ installed',
  'At least 4GB of RAM',
  'Git installed',
]

export default function InstallationPageEN() {
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
            Installation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            How to install Loom currently
          </p>
        </div>

        {/* Current Installation Method */}
        <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
              <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Build from Source
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Current installation method
              </p>
            </div>
          </div>

          {/* Requirements */}
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            Prerequisites:
          </h3>
          <ul className="space-y-2 mb-6">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                {req}
              </li>
            ))}
          </ul>

          {/* Steps */}
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            Installation steps:
          </h3>
          <ol className="space-y-3 mb-6">
            {[
              'Clone the repository: git clone https://github.com/mijelDeve/loom.git',
              'Enter the directory: cd loom',
              'Install dependencies: npm install',
              'Build the project: npm run build',
              'Run in development mode: npm run dev',
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium flex items-center justify-center">
                  {index + 1}
                </span>
                <code className="text-primary-600 dark:text-primary-400 font-mono text-sm">{step}</code>
              </li>
            ))}
          </ol>

          {/* Commands */}
          <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
            <pre className="text-gray-300 text-sm font-mono">
{`git clone https://github.com/mijelDeve/loom.git
cd loom
npm install
npm run dev`}
            </pre>
          </div>
        </div>

        {/* Coming Soon - Installers */}
        <div className="p-6 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Coming Soon: Installer
                </h2>
                <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full">
                  Soon
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In future versions you will be able to download an installer directly without needing to build.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                  <Monitor className="w-4 h-4" />
                  Windows (.exe)
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                  <Apple className="w-4 h-4" />
                  macOS (.dmg)
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                  <Package className="w-4 h-4" />
                  Linux (AppImage, .deb, .rpm)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/en/docs/features"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Features
          </Link>
          <Link
            href="/en/docs/shortcuts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Keyboard Shortcuts
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}