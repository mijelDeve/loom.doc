import Link from 'next/link'
import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Markdaun v1.0.0
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Documentation
            </Link>
            <Link href="/docs/contributing" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contributing
            </Link>
            <Link href="/docs/faq" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              FAQ
            </Link>
            <a
              href="https://github.com/markdaun/markdaun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            MIT License
          </div>
        </div>
      </div>
    </footer>
  )
}