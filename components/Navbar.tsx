'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Github, Book, Download, Code, HelpCircle } from 'lucide-react'

const navItems = [
  { href: '/docs', label: 'Docs', icon: Book },
  { href: '/docs/installation', label: 'Installation', icon: Download },
  { href: '/docs/shortcuts', label: 'Shortcuts', icon: Code },
  { href: '/docs/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/versions', label: 'Versions', icon: Github },
]

async function getLatestVersion(): Promise<string> {
  try {
    const res = await fetch('https://api.github.com/repos/mijelDeve/loom/releases/latest', {
      next: { revalidate: 3600 }
    })
    if (!res.ok) return '1.0.0'
    const data = await res.json()
    return data.tag_name?.replace('v', '') || '1.0.0'
  } catch {
    return '1.0.0'
  }
}

export default function Navbar() {
  const pathname = usePathname()
  const [version, setVersion] = useState('1.0.0')

  useEffect(() => {
    getLatestVersion().then(setVersion)
  }, [])

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f14] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white text-lg">👨‍💻</span>
              </div>
              <span className="font-semibold text-xl text-gray-900 dark:text-white">Loom</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">v</span>
              <span className="text-xs font-medium text-primary-600 dark:text-primary-400">{version}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Link
                href="/en"
                className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                EN
              </Link>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <Link
                href="/"
                className="px-3 py-1.5 text-sm font-medium text-primary-600 dark:text-primary-400"
              >
                ES
              </Link>
            </div>

            <a
              href="https://github.com/mijelDeve/loom"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}