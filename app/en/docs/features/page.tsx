'use client'

import Link from 'next/link'
import { FileText, GitBranch, Image, Terminal, Sun, Moon, Layers, ChevronRight, ArrowLeft } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Editor & Preview',
    content: `
## Markdown Editor with Split View

Markdaun's editor offers a complete editing experience with split view:

- **Editor on the left**: Plain text editor with Markdown syntax highlighting
- **Preview on the right**: Real-time rendered Markdown

### Bidirectional Synchronized Scrolling

Scrolling between editor and preview is bidirectionally synchronized:
- When scrolling in the editor, the preview scrolls to the corresponding paragraph
- When scrolling in the preview, the editor scrolls to the corresponding line

### GFM Support (GitHub Flavored Markdown)

Markdaun fully supports all GitHub extensions:
- Formatted tables
- Task lists with checkboxes
- Syntax highlighted code
- Autolinks
- Strike-through
- Emoji shortcuts

### Multiple Tabs

Work with multiple files simultaneously:
- Open several files in different tabs
- Drag tabs to reorder
- Close files with the close button or \`Ctrl+W\`
    `,
  },
  {
    icon: Layers,
    title: 'File Explorer',
    content: `
## Obsidian-style Navigation

The file explorer presents a tree navigation structure:

\`\`\`
📁 project/
├── 📁 src/
│   ├── 📄 main.ts
│   └── 📄 utils.ts
├── 📁 docs/
│   └── 📄 README.md
└── 📄 package.json
\`\`\`

### Explorer Controls

- **Close all folders**: Button to collapse the entire structure
- **Find active file**: Automatically expands to the current file

### Context Menu (Right-click)

Right-click to access:
- **New Folder**: Create a folder at the selected location
- **New File**: Create a new .md file
- **Delete**: Delete the file/folder (with confirmation dialog)

### File Display

Shows all file types, not just .md, including:
- Code files (.ts, .js, .json, etc.)
- Images (.png, .jpg, .gif)
- Documents (.pdf, .docx)
    `,
  },
  {
    icon: Image,
    title: 'Image Management',
    content: `
## Multiple Image Formats

Markdaun supports different ways to insert images:

### 1. External URLs

\`\`\`markdown
![Description](https://example.com/image.png)
\`\`\`

### 2. Wiki-links (Obsidian-style)

\`\`\`markdown
![[image.png]]
\`\`\`

### 3. Native File Picker

Button in the toolbar that opens the system file picker.

### Local Image Handling

Local images are loaded as **base64** to avoid browser security restrictions. Paths are resolved from the project root.

\`\`\`markdown
![My image](./images/photo.png)
\`\`\`

### Editor Toolbar

The editor toolbar includes a dedicated button for quickly inserting images.
    `,
  },
  {
    icon: GitBranch,
    title: 'Git Integration',
    content: `
## Integrated Version Control

Markdaun includes complete Git integration:

### Git Operations

| Operation | Description |
|-----------|-------------|
| **Clone** | Clone remote repositories |
| **Pull** | Download changes from remote |
| **Push** | Upload changes to remote |
| **Commit** | Save local changes with message |

### SSH Authentication

Configure your SSH key to authenticate with remote repositories:

- **File path**: Specify the private key file path
- **Direct content**: Paste the key content

### Git Panel

Access all functions from the side panel:
- Change status (modified, added, deleted)
- Commit history
- Branches and tags

### Status Bar Git

The status bar shows:
- Number of pending changes
- Current branch
- Sync status with remote
    `,
  },
  {
    icon: Terminal,
    title: 'Integrated Terminal',
    content: `
## Run Commands Directly

The integrated terminal allows running PowerShell commands from the application:

### Access

The terminal is available in the application status bar.

### Features

- **Command history**: Use ↑↓ arrows to navigate
- **PowerShell**: Execute system commands
- **Real-time output**: See command output

### Example Commands

\`\`\`powershell
npm run dev
git status
npm install
\`\`\`

### Git Integration

You can execute any Git command directly:
\`\`\`powershell
git add .
git commit -m "Message"
git push origin main
\`\`\`
    `,
  },
  {
    icon: Sun,
    title: 'Themes',
    content: `
## Light and Dark Mode

Markdaun supports light and dark themes:

### Theme Toggle

- Toggle between light and dark mode
- Preferences are saved in **localStorage**

### Persistence

Theme preferences are maintained between sessions:
\`\`\`javascript
// Saved in localStorage
localStorage.setItem('theme', 'dark')
\`\`\`

### Appearance

**Light Mode**:
- White/light gray background
- Dark text
- Ideal for well-lit environments

**Dark Mode**:
- Dark background (#0f0f14)
- Light text
- Ideal for nighttime work

The theme applies to the entire application including:
- Editor
- Preview
- File explorer
- Panels
    `,
  },
]

export default function FeaturesPageEN() {
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
            Features
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Detailed description of all functionalities
          </p>
        </div>

        {/* Features */}
        <div className="space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6 prose prose-gray dark:prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    {feature.content.trim()}
                  </pre>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/en/docs/installation"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Installation
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