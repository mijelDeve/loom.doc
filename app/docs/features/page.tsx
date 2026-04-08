'use client'

import Link from 'next/link'
import { FileText, GitBranch, Image, Terminal, Sun, Moon, Layers, ChevronRight, ArrowLeft } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Editor y Vista Previa',
    content: `
## Editor de Markdown con Vista Dividida

El editor de Markdaun ofrece una experiencia de edición completa con vista dividida:

- **Editor a la izquierda**: Editor de texto plano con resaltado de sintaxis Markdown
- **Vista previa a la derecha**: Renderizado en tiempo real del Markdown

### Scroll Sincronizado Bidireccional

El scroll entre el editor y la vista previa está sincronizado bidireccionalmente:
- Al hacer scroll en el editor, la vista previa se desplaza al párrafo correspondiente
- Al hacer scroll en la vista previa, el editor se desplaza a la línea correspondiente

### Soporte GFM (GitHub Flavored Markdown)

Markdaun soporta completamente todas las extensiones de GitHub:
- Tablas con formato
- Listas de tareas con checkboxes
- Código con resaltado de sintaxis
- Autolinks
- Strike-through
- Emoji shortcuts

### Múltiples Pestañas

Trabaja con múltiples archivos simultáneamente:
- Abre varios archivos en pestañas diferentes
- Arrastra pestañas para reordenar
- Cierra archivos con el botón de cerrar o \`Ctrl+W\`
    `,
  },
  {
    icon: Layers,
    title: 'Explorador de Archivos',
    content: `
## Navegación Estilo Obsidian

El explorador de archivos presenta una estructura de árbol navegación:

\`\`\`
📁 proyecto/
├── 📁 src/
│   ├── 📄 main.ts
│   └── 📄 utils.ts
├── 📁 docs/
│   └── 📄 README.md
└── 📄 package.json
\`\`\`

### Controles del Explorador

- **Cerrar todas las carpetas**: Botón para colapsar toda la estructura
- **Encontrar archivo activo**: Expande automáticamente hasta el archivo actual

### Menú Contextual (Click Derecho)

Haz clic derecho para acceder a:
- **Nueva Carpeta**: Crea una carpeta en la ubicación seleccionada
- **Nuevo Archivo**: Crea un nuevo archivo .md
- **Eliminar**: Borra el archivo/carpeta (con diálogo de confirmación)

### Visualización de Archivos

Muestra todos los tipos de archivos, no solo .md, incluyendo:
- Archivos de código (.ts, .js, .json, etc.)
- Imágenes (.png, .jpg, .gif)
- Documentos (.pdf, .docx)
    `,
  },
  {
    icon: Image,
    title: 'Gestión de Imágenes',
    content: `
## Múltiples Formatos de Imagen

Markdaun soporta diferentes formas de insertar imágenes:

### 1. URLs Externas

\`\`\`markdown
![Descripción](https://ejemplo.com/imagen.png)
\`\`\`

### 2. Wiki-links (Estilo Obsidian)

\`\`\`markdown
![[imagen.png]]
\`\`\`

### 3. Selector de Archivos Nativo

Botón en la toolbar que abre el selector de archivos del sistema.

### Manejo de Imágenes Locales

Las imágenes locales se cargan como **base64** para evitar restricciones de seguridad del navegador. Las rutas se resuelven desde la raíz del proyecto.

\`\`\`markdown
![Mi imagen](./images/foto.png)
\`\`\`

### Toolbar de Editor

La toolbar del editor incluye un botón dedicado para insertar imágenes rápidamente.
    `,
  },
  {
    icon: GitBranch,
    title: 'Integración Git',
    content: `
## Control de Versiones Integrado

Markdaun incluye integración completa con Git:

### Operaciones Git

| Operación | Descripción |
|-----------|-------------|
| **Clone** | Clonar repositorios remotos |
| **Pull** | Descargar cambios del repositorio remoto |
| **Push** | Subir cambios al repositorio remoto |
| **Commit** | Guardar cambios locales con mensaje |

### Autenticación SSH

Configura tu clave SSH para autenticar con repositorios remotos:

- **Ruta al archivo**:指定 archivo de clave privada
- **Contenido directo**: Pegar el contenido de la clave

### Panel de Git

Accede a todas las funciones desde el panel lateral:
- Estado de cambios (modificados, añadidos, eliminados)
- Historial de commits
- Ramas y etiquetas

### Barra de Estado Git

La barra de estado muestra:
- Número de cambios pendientes
- Rama actual
- Estado de sincronización con remoto
    `,
  },
  {
    icon: Terminal,
    title: 'Terminal Integrada',
    content: `
## Ejecuta Comandos Directamente

La terminal integrada permite ejecutar comandos PowerShell desde la aplicación:

### Acceso

La terminal está disponible en la barra de estado de la aplicación.

### Características

- **Historial de comandos**: Usa las flechas ↑↓ para navegar
- **PowerShell**: Ejecuta comandos del sistema
- **Salida en tiempo real**: Ve la salida de los comandos

### Ejemplos de Comandos

\`\`\`powershell
npm run dev
git status
npm install
\`\`\`

### Integración con Git

Puedes ejecutar cualquier comando Git directamente:
\`\`\`powershell
git add .
git commit -m "Mensaje"
git push origin main
\`\`\`
    `,
  },
  {
    icon: Sun,
    title: 'Temas',
    content: `
## Modo Claro y Oscuro

Markdaun soporta temas claro y oscuro:

### Cambio de Tema

- Alterna entre modo claro y oscuro
- La preferencia se guarda en **localStorage**

### Persistencia

Las preferencias de tema se mantienen entre sesiones:
\`\`\`javascript
// Se guarda en localStorage
localStorage.setItem('theme', 'dark')
\`\`\`

### Apariencia

**Modo Claro**:
- Fondo blanco/gris claro
- Texto oscuro
- Ideal para ambientes con buena luz

**Modo Oscuro**:
- Fondo oscuro (#0f0f14)
- Texto claro
- Ideal para trabajo nocturno

El tema se aplica a toda la aplicación incluyendo:
- Editor
- Vista previa
- Explorador de archivos
- Paneles
    `,
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Documentación
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Características
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Descripción detallada de todas las funcionalidades
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
            href="/docs/installation"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Instalación
          </Link>
          <Link
            href="/docs/shortcuts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Atajos de Teclado
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}