'use client'

import Link from 'next/link'
import { Heart, GitBranch, MessageSquare, Code, ChevronRight, ArrowLeft, Github } from 'lucide-react'

const contributions = [
  {
    icon: GitBranch,
    title: 'Reportar Bugs',
    description: 'Encuentra errores y repórtalos en GitHub Issues',
    link: 'https://github.com/mijelDeve/loom/issues',
  },
  {
    icon: Code,
    title: 'Desarrollar',
    description: 'Envía pull requests con nuevas características o correcciones',
    link: 'https://github.com/mijelDeve/loom/pulls',
  },
  {
    icon: MessageSquare,
    title: 'Sugerencias',
    description: 'Comparte ideas y sugerencias para mejorar el proyecto',
    link: 'https://github.com/mijelDeve/loom/discussions',
  },
  {
    icon: Heart,
    title: 'Traducir',
    description: 'Ayuda a traducir la documentación a otros idiomas',
  },
]

const steps = [
  {
    step: 1,
    title: 'Fork del repositorio',
    description: 'Crea tu propia copia del repositorio en GitHub',
  },
  {
    step: 2,
    title: 'Clona tu fork',
    description: 'Clona el repositorio a tu máquina local',
  },
  {
    step: 3,
    title: 'Crea una rama',
    description: 'Crea una rama para tu función o corrección',
  },
  {
    step: 4,
    title: 'Haz tus cambios',
    description: 'Implementa tus cambios siguiendo las guías de estilo',
  },
  {
    step: 5,
    title: 'Envía un Pull Request',
    description: 'Sube tus cambios y crea un PR para revisión',
  },
]

export default function ContributingPage() {
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
            Contribuir
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Únete al desarrollo de Loom
          </p>
        </div>

        {/* Ways to Contribute */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Formas de Contribuir
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
            Guía para Contribuidores
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
{`# Configuración del entorno de desarrollo
git clone https://github.com/TU_USUARIO/loom.git
cd loom
npm install
npm run dev`}
            </pre>
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="mb-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Código de Conducta
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Al contribuir a Loom, te pedimos que mantengas un comportamiento respetuoso y constructivo. 
            Trata a todos los contribuidores y usuarios con respeto y profesionalismo.
          </p>
        </div>

        {/* License */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Licencia
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Loom está licenciado bajo <strong>MIT License</strong>. 
            Al contribuir, aceptas que tu trabajo será publicado bajo esta licencia.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/docs/faq"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            FAQ
          </Link>
          <Link
            href="/versions"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Versiones
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}