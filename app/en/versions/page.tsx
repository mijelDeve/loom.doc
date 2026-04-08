import { Tag, Calendar, Zap } from 'lucide-react'

interface Release {
  id: number
  tag_name: string
  name: string
  body: string
  published_at: string
  html_url: string
}

async function getReleases(): Promise<Release[]> {
  const res = await fetch('https://api.github.com/repos/mijelDeve/markdaun/releases', {
    next: { revalidate: 3600 }
  })
  
  if (!res.ok) {
    return []
  }
  
  return res.json()
}

function getVersionType(tagName: string): { type: string; color: string; label: string } {
  const version = tagName.replace('v', '')
  const parts = version.split('.')
  
  if (parts.length < 3) {
    return { type: 'patch', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', label: 'Patch' }
  }
  
  const [major, minor, patch] = parts.map(Number)
  
  if (major > 0) {
    return { type: 'major', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Major' }
  }
  if (minor > 0) {
    return { type: 'minor', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Minor' }
  }
  return { type: 'patch', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', label: 'Patch' }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function VersionsPageEN() {
  const releases = await getReleases()
  const latestVersion = releases.length > 0 ? releases[0].tag_name.replace('v', '') : '1.0.0'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Version History
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tracking Markdaun changes and updates
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Data fetched automatically from GitHub
          </p>
        </div>

        {/* Version Badge */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full">
            <Tag className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Current version
            </span>
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium rounded-full">
              {latestVersion}
            </span>
          </div>
        </div>

        {/* Versions Timeline */}
        {releases.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No versions available yet.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {releases.map((release) => {
              const versionInfo = getVersionType(release.tag_name)
              return (
                <div
                  key={release.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Version Header */}
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${versionInfo.color}`}>
                          {versionInfo.label}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {release.tag_name}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {formatDate(release.published_at)}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mt-3">
                      {release.name || release.tag_name}
                    </h3>
                  </div>

                  {/* Body */}
                  {release.body && (
                    <div className="p-6 bg-gray-50 dark:bg-gray-900/50">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Release notes:
                      </h4>
                      <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        {release.body.split('\n').map((line, i) => {
                          if (line.trim() === '') return null
                          if (line.includes('**Full Changelog**')) {
                            return (
                              <a
                                key={i}
                                href={release.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 dark:text-primary-400 hover:underline"
                              >
                                View full changelog →
                              </a>
                            )
                          }
                          return (
                            <p key={i} className="mb-1">{line.replace(/^\* /, '').replace(/\*\*|__/g, '')}</p>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Versioning Info */}
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Versioning System
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-mono text-sm rounded">
                Major
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Breaking changes
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-mono text-sm rounded">
                Minor
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                New features
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-mono text-sm rounded">
                Patch
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Bug fixes
              </span>
            </div>
          </div>
        </div>

        {/* Future Versions */}
        <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Upcoming Versions
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            We are working on new features. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  )
}