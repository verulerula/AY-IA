"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Camera,
  FileText,
  Mic,
  Video,
  BarChart3,
  Mail,
  Calendar,
  Globe,
  Zap,
  Star,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users,
  Palette,
  Search,
} from "lucide-react"

interface Herramienta {
  nombre: string
  descripcion: string
  categoria: string
  precio: "Gratis" | "Freemium" | "Pago"
  dificultad: "Fácil" | "Intermedio" | "Avanzado"
  url: string
  caracteristicas: string[]
  paraQue: string
  limitaciones?: string
  alternativas?: string[]
  rating: number
  icono: any
}

const herramientas: Herramienta[] = [
  // Texto y Escritura
  {
    nombre: "ChatGPT",
    descripcion:
      "El asistente de IA más popular para generar texto, responder preguntas y ayudar con tareas creativas.",
    categoria: "texto",
    precio: "Freemium",
    dificultad: "Fácil",
    url: "https://chat.openai.com",
    caracteristicas: [
      "Conversación natural",
      "Múltiples idiomas",
      "Generación de contenido",
      "Resolución de problemas",
    ],
    paraQue:
      "Crear contenido para redes sociales, responder emails, generar ideas de marketing, escribir descripciones de productos",
    limitaciones: "Versión gratuita tiene límites de uso diario",
    alternativas: ["Claude", "Gemini", "Copilot"],
    rating: 5,
    icono: MessageSquare,
  },
  {
    nombre: "Gemini (Google)",
    descripcion: "IA de Google integrada con sus servicios, excelente para búsquedas y análisis de información.",
    categoria: "texto",
    precio: "Gratis",
    dificultad: "Fácil",
    url: "https://gemini.google.com",
    caracteristicas: ["Integración con Google", "Búsqueda en tiempo real", "Análisis de documentos", "Multimodal"],
    paraQue: "Investigación de mercado, análisis de competencia, creación de contenido informativo",
    rating: 4,
    icono: Search,
  },
  {
    nombre: "Claude",
    descripcion: "IA conversacional de Anthropic, excelente para análisis de texto largo y tareas complejas.",
    categoria: "texto",
    precio: "Freemium",
    dificultad: "Fácil",
    url: "https://claude.ai",
    caracteristicas: ["Análisis de documentos largos", "Conversación natural", "Ética en IA", "Múltiples formatos"],
    paraQue: "Análizar contratos, resumir documentos largos, crear planes de negocio detallados",
    limitaciones: "Límites de mensajes en versión gratuita",
    rating: 4,
    icono: FileText,
  },

  // Imágenes y Diseño
  {
    nombre: "Canva Magic Design",
    descripcion: "Herramienta de diseño con IA integrada para crear gráficos profesionales sin experiencia.",
    categoria: "imagen",
    precio: "Freemium",
    dificultad: "Fácil",
    url: "https://canva.com",
    caracteristicas: [
      "Templates automáticos",
      "Generación de imágenes",
      "Redimensionado inteligente",
      "Marca consistente",
    ],
    paraQue: "Crear posts para redes sociales, flyers, logos, presentaciones, material de marketing",
    limitaciones: "Funciones avanzadas requieren suscripción",
    alternativas: ["Adobe Express", "Figma"],
    rating: 5,
    icono: Palette,
  },
  {
    nombre: "DALL-E 2",
    descripcion: "Generador de imágenes de OpenAI que crea imágenes únicas a partir de descripciones de texto.",
    categoria: "imagen",
    precio: "Freemium",
    dificultad: "Intermedio",
    url: "https://openai.com/dall-e-2",
    caracteristicas: ["Generación desde texto", "Edición de imágenes", "Variaciones", "Alta calidad"],
    paraQue: "Crear imágenes únicas para productos, ilustraciones para blog, material publicitario original",
    limitaciones: "Créditos limitados en versión gratuita",
    alternativas: ["Midjourney", "Stable Diffusion"],
    rating: 4,
    icono: Camera,
  },
  {
    nombre: "Remove.bg",
    descripcion: "Elimina automáticamente el fondo de cualquier imagen en segundos.",
    categoria: "imagen",
    precio: "Freemium",
    dificultad: "Fácil",
    url: "https://remove.bg",
    caracteristicas: ["Eliminación automática", "API disponible", "Batch processing", "Alta precisión"],
    paraQue: "Crear catálogos de productos, imágenes para redes sociales, material publicitario limpio",
    limitaciones: "Resolución limitada en versión gratuita",
    rating: 4,
    icono: Camera,
  },

  // Audio y Video
  {
    nombre: "ElevenLabs",
    descripcion: "Generador de voz con IA que crea audios realistas en múltiples idiomas y voces.",
    categoria: "audio",
    precio: "Freemium",
    dificultad: "Intermedio",
    url: "https://elevenlabs.io",
    caracteristicas: ["Voces realistas", "Múltiples idiomas", "Clonación de voz", "API"],
    paraQue: "Crear audios para publicidad, podcasts, videos explicativos, mensajes de WhatsApp Business",
    limitaciones: "Límite de caracteres en versión gratuita",
    rating: 4,
    icono: Mic,
  },
  {
    nombre: "Runway ML",
    descripcion: "Suite de herramientas de IA para edición de video, incluyendo generación y edición automática.",
    categoria: "video",
    precio: "Freemium",
    dificultad: "Intermedio",
    url: "https://runwayml.com",
    caracteristicas: ["Edición automática", "Generación de video", "Efectos especiales", "Colaboración"],
    paraQue: "Crear videos promocionales, contenido para redes sociales, presentaciones dinámicas",
    limitaciones: "Tiempo limitado en versión gratuita",
    rating: 4,
    icono: Video,
  },

  // Marketing y Ventas
  {
    nombre: "HubSpot (IA Features)",
    descripcion: "CRM con funciones de IA para automatizar marketing, ventas y atención al cliente.",
    categoria: "marketing",
    precio: "Freemium",
    dificultad: "Intermedio",
    url: "https://hubspot.com",
    caracteristicas: ["CRM inteligente", "Email marketing", "Chatbots", "Analytics"],
    paraQue: "Gestionar clientes, automatizar seguimiento, crear campañas de email, analizar ventas",
    limitaciones: "Funciones avanzadas requieren plan pago",
    rating: 4,
    icono: BarChart3,
  },
  {
    nombre: "Mailchimp",
    descripcion: "Plataforma de email marketing con IA para optimizar campañas y segmentar audiencias.",
    categoria: "marketing",
    precio: "Freemium",
    dificultad: "Fácil",
    url: "https://mailchimp.com",
    caracteristicas: ["Segmentación inteligente", "A/B testing", "Automatización", "Analytics"],
    paraQue: "Crear newsletters, campañas de email, automatizar comunicación con clientes",
    limitaciones: "Límite de contactos en versión gratuita",
    rating: 4,
    icono: Mail,
  },

  // Productividad y Automatización
  {
    nombre: "Zapier",
    descripcion: "Automatiza tareas conectando diferentes aplicaciones sin necesidad de programar.",
    categoria: "automatizacion",
    precio: "Freemium",
    dificultad: "Intermedio",
    url: "https://zapier.com",
    caracteristicas: ["Miles de integraciones", "Automatización visual", "Triggers inteligentes", "Sin código"],
    paraQue: "Conectar WhatsApp con Google Sheets, automatizar facturas, sincronizar inventarios",
    limitaciones: "Límite de automatizaciones en versión gratuita",
    rating: 5,
    icono: Zap,
  },
  {
    nombre: "Calendly",
    descripcion: "Programación inteligente de citas con IA para optimizar horarios y reducir cancelaciones.",
    categoria: "automatizacion",
    precio: "Freemium",
    dificultad: "Fácil",
    url: "https://calendly.com",
    caracteristicas: ["Programación automática", "Recordatorios", "Integración con calendarios", "Pagos"],
    paraQue: "Agendar citas con clientes, consultas, servicios, reuniones de trabajo",
    limitaciones: "Un tipo de evento en versión gratuita",
    rating: 4,
    icono: Calendar,
  },

  // Análisis y Datos
  {
    nombre: "Google Analytics 4",
    descripcion: "Análisis web con IA predictiva para entender el comportamiento de los usuarios.",
    categoria: "analytics",
    precio: "Gratis",
    dificultad: "Intermedio",
    url: "https://analytics.google.com",
    caracteristicas: ["Análisis predictivo", "Audiencias inteligentes", "Conversiones", "Informes automáticos"],
    paraQue: "Entender visitantes del sitio web, optimizar ventas online, medir campañas publicitarias",
    rating: 4,
    icono: BarChart3,
  },

  // Atención al Cliente
  {
    nombre: "Tidio",
    descripcion: "Chatbot con IA para atención al cliente 24/7 en sitios web y redes sociales.",
    categoria: "atencion",
    precio: "Freemium",
    dificultad: "Fácil",
    url: "https://tidio.com",
    caracteristicas: ["Chatbot inteligente", "Chat en vivo", "Integración WhatsApp", "Analytics"],
    paraQue: "Atender consultas automáticamente, captar leads, brindar soporte 24/7",
    limitaciones: "Funciones limitadas en versión gratuita",
    rating: 4,
    icono: MessageSquare,
  },
]

const categorias = [
  { id: "todos", label: "Todas las Herramientas", icono: Globe },
  { id: "texto", label: "Texto y Escritura", icono: FileText },
  { id: "imagen", label: "Imágenes y Diseño", icono: Camera },
  { id: "audio", label: "Audio", icono: Mic },
  { id: "video", label: "Video", icono: Video },
  { id: "marketing", label: "Marketing", icono: BarChart3 },
  { id: "automatizacion", label: "Automatización", icono: Zap },
  { id: "analytics", label: "Análisis", icono: BarChart3 },
  { id: "atencion", label: "Atención al Cliente", icono: Users },
]

export default function GuiaHerramientas() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos")
  const [filtroGratuitas, setFiltroGratuitas] = useState(false)

  const herramientasFiltradas = herramientas.filter((herramienta) => {
    const coincideCategoria = categoriaActiva === "todos" || herramienta.categoria === categoriaActiva
    const coincidePrecio = !filtroGratuitas || herramienta.precio === "Gratis"
    return coincideCategoria && coincidePrecio
  })

  const getPrecioColor = (precio: string) => {
    switch (precio) {
      case "Gratis":
        return "bg-green-500"
      case "Freemium":
        return "bg-blue-500"
      case "Pago":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getDificultadColor = (dificultad: string) => {
    switch (dificultad) {
      case "Fácil":
        return "text-green-600"
      case "Intermedio":
        return "text-yellow-600"
      case "Avanzado":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">🛠️ Guía de Herramientas IA Gratuitas 2025</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Las mejores herramientas de IA para emprendedores y PyMEs de Bariloche. Todas probadas, explicadas en
            cristiano y con ejemplos prácticos.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-green-500 text-white px-4 py-2">
              {herramientas.filter((h) => h.precio === "Gratis").length} Herramientas 100% Gratuitas
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2">
              {herramientas.filter((h) => h.precio === "Freemium").length} Con Versión Gratuita
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2">Actualizado Enero 2025</Badge>
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="text-center">Filtrar por Categoría</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {categorias.map((categoria) => {
                  const IconoCategoria = categoria.icono
                  return (
                    <Button
                      key={categoria.id}
                      variant={categoriaActiva === categoria.id ? "default" : "outline"}
                      onClick={() => setCategoriaActiva(categoria.id)}
                      className="flex items-center gap-2"
                    >
                      <IconoCategoria className="h-4 w-4" />
                      {categoria.label}
                    </Button>
                  )
                })}
              </div>
              <div className="text-center">
                <Button
                  variant={filtroGratuitas ? "default" : "outline"}
                  onClick={() => setFiltroGratuitas(!filtroGratuitas)}
                  className="flex items-center gap-2"
                >
                  <DollarSign className="h-4 w-4" />
                  Solo Herramientas 100% Gratuitas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Herramientas */}
        <div className="grid gap-6">
          {herramientasFiltradas.map((herramienta, index) => {
            const IconoHerramienta = herramienta.icono
            return (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Info Principal */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <IconoHerramienta className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-gray-800">{herramienta.nombre}</h3>
                            <Badge className={`${getPrecioColor(herramienta.precio)} text-white`}>
                              {herramienta.precio}
                            </Badge>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < herramienta.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{herramienta.descripcion}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className={`font-semibold ${getDificultadColor(herramienta.dificultad)}`}>
                              📊 {herramienta.dificultad}
                            </span>
                            <Button
                              onClick={() => window.open(herramienta.url, "_blank")}
                              size="sm"
                              className="bg-purple-600 hover:bg-purple-700"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Probar Gratis
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Para qué sirve */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          ¿Para qué lo usarías en tu negocio?
                        </h4>
                        <p className="text-gray-700 bg-green-50 p-3 rounded-lg">{herramienta.paraQue}</p>
                      </div>

                      {/* Características */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">✨ Características principales:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {herramienta.caracteristicas.map((caracteristica, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              {caracteristica}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Limitaciones */}
                      {herramienta.limitaciones && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-600" />
                            Limitaciones a tener en cuenta:
                          </h4>
                          <p className="text-gray-700 bg-orange-50 p-3 rounded-lg text-sm">
                            {herramienta.limitaciones}
                          </p>
                        </div>
                      )}

                      {/* Alternativas */}
                      {herramienta.alternativas && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🔄 Alternativas similares:</h4>
                          <div className="flex flex-wrap gap-2">
                            {herramienta.alternativas.map((alternativa, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {alternativa}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Consejos Finales */}
        <div className="mt-12">
          <Card className="border-4 border-yellow-300 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-yellow-800">💡 Consejos para Empezar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-800 mb-3">🚀 Para Principiantes:</h4>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Empezá con ChatGPT y Canva (son los más fáciles)</li>
                    <li>• Probá una herramienta por semana, no todas juntas</li>
                    <li>• Usá las versiones gratuitas primero</li>
                    <li>• Pedí ayuda en nuestro grupo de WhatsApp</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-3">⚡ Para Optimizar:</h4>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Combiná herramientas (ej: ChatGPT + Canva)</li>
                    <li>• Automatizá tareas repetitivas con Zapier</li>
                    <li>• Medí resultados con Google Analytics</li>
                    <li>• Actualizá esta guía cada 3 meses</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-yellow-700 mb-4">
                  <strong>¿Necesitás ayuda para elegir?</strong> Uníte a nuestro grupo de WhatsApp donde otros
                  emprendedores comparten sus experiencias.
                </p>
                <Button
                  onClick={() => window.open("https://chat.whatsapp.com/IDdIBNB2wuRLgigly90828", "_blank")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Unirse al Grupo de WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer de la Guía */}
        <div className="text-center mt-8 text-gray-600">
          <p className="mb-2">📅 Última actualización: Enero 2025</p>
          <p className="text-sm">
            Esta guía se actualiza mensualmente con las últimas herramientas y cambios de precios.
          </p>
        </div>
      </div>
    </div>
  )
}
