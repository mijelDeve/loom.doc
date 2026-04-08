'use client'

import Link from 'next/link'
import { HelpCircle, ChevronRight, ArrowLeft } from 'lucide-react'

const faqs = [
  {
    question: '¿Qué es Markdaun?',
    answer: 'Markdaun es un editor de escritorio de Markdown con integración Git. Está inspirado en Obsidian y construido con Electron, React y TypeScript.',
  },
  {
    question: '¿Cómo instalo Markdaun?',
    answer: 'Puedes descargar la versión pre-compilada para tu sistema operativo desde la sección de Releases en GitHub. También puedes compilarlo desde el código fuente siguiendo la guía de instalación.',
  },
  {
    question: '¿Necesito tener Git instalado?',
    answer: 'Sí, para usar las funciones de integración con Git necesitas tener Git instalado en tu sistema. Markdaun usa Git para el control de versiones.',
  },
  {
    question: '¿Cómo configuro la autenticación SSH?',
    answer: 'En el panel de Git, puedes configurar tu clave SSH indicando la ruta al archivo de clave privada o pegando el contenido directo de la clave.',
  },
  {
    question: '¿Puedo usar wiki-links como en Obsidian?',
    answer: 'Sí, Markdaun soporta wiki-links usando la sintaxis ![[nombre-del-archivo]]. Esto te permite enlazar otros archivos de Markdown.',
  },
  {
    question: '¿Las imágenes locales se almacenan como base64?',
    answer: 'Sí, las imágenes locales se convierten a base64 para evitar restricciones de seguridad del navegador y poder renderizarlas correctamente en la vista previa.',
  },
  {
    question: '¿Hay un tema oscuro?',
    answer: 'Sí, Markdaun incluye temas claro y oscuro. La preferencia se guarda en localStorage y persiste entre sesiones.',
  },
  {
    question: '¿Puedo ejecutar comandos en la terminal integrada?',
    answer: 'Sí, puedes ejecutar comandos PowerShell directamente desde la barra de estado de la aplicación. Usa las flechas ↑↓ para navegar por el historial de comandos.',
  },
  {
    question: '¿Cómo puedo contribuir al proyecto?',
    answer: 'Puedes contribuir clonando el repositorio, creando issues para reportar bugs, o enviando pull requests. Consulta la sección de contribución para más detalles.',
  },
  {
    question: '¿Cuál es la licencia de Markdaun?',
    answer: 'Markdaun está licenciado bajo MIT License.',
  },
]

export default function FAQPage() {
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
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Respuestas a las dudas más comunes sobre Markdaun
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
            ¿Tienes otra pregunta?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Si no encontraste la respuesta que buscabas, puedes abrir un issue en GitHub.
          </p>
          <a
            href="https://github.com/markdaun/markdaun/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Abrir Issue
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/docs/shortcuts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Atajos de Teclado
          </Link>
          <Link
            href="/docs/contributing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Contribuir
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}