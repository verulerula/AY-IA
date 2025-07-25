"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  MessageSquare,
  MapPin,
  Camera,
  Zap,
  CheckCircle,
  Clock,
  BookOpen,
  Play,
  Award,
  Copy,
  Users,
  Calendar,
  Smartphone,
  Mail,
  FileText,
  AlertTriangle,
  Menu,
  X,
  Star,
  ArrowRight,
  BarChart3,
  Palette,
} from "lucide-react"

export default function AyIAPage() {
  const [currentModule, setCurrentModule] = useState(0)
  const [completedModules, setCompletedModules] = useState<number[]>([])
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  const modules = [
    "Tu Primer Combo Digital", // Nuevo módulo 0
    "¿Qué es la IA?",
    "Historia de la IA",
    "¿Cómo funciona?",
    "IA para Emprendedores",
    "Prompts que Funcionan",
    "Automatización",
    "Plan de Negocio con IA",
  ]

  const completeModule = (moduleIndex: number) => {
    if (!completedModules.includes(moduleIndex)) {
      setCompletedModules([...completedModules, moduleIndex])
    }
  }

  const copyPrompt = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt)
    setCopiedPrompt(id)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  const progress = (completedModules.length / modules.length) * 100

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-6xl mr-4">🤖</span>
            <h1 className="text-5xl font-bold">
              ¡Ay!<span className="text-yellow-300">IA</span>
            </h1>
          </div>
          <p className="text-xl mb-2 opacity-90">Del "¡Ay!" al "¡Ah!" con Inteligencia Artificial</p>
          <p className="text-lg opacity-80">
            Porque la IA no tiene que ser un dolor de cabeza para emprendedores barilochenses
          </p>
          <div className="mt-4 inline-block bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-semibold">
            🎁 100% Gratuito y Solidario
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-purple-400">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🤖</span>
              <span className="text-xl font-bold text-gray-800">¡Ay!IA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "servicios", label: "Servicios Gratuitos" },
                { id: "aprendizaje", label: "Aprendizaje" },
                { id: "recursos", label: "Recursos" },
                { id: "comunidad", label: "Comunidad" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-purple-600 border-b-2 border-purple-600"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "servicios", label: "Servicios" },
                { id: "aprendizaje", label: "Aprendizaje" },
                { id: "recursos", label: "Recursos" },
                { id: "comunidad", label: "Comunidad" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 px-4 text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                ¿Te sentís abrumado/a con la IA?
                <span className="text-purple-600"> ¡Tranqui!</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Todos estuvimos ahí. En ¡Ay!IA convertimos tu frustración en inspiración con recursos
                <strong> 100% gratuitos</strong>, actualizados y explicados en cristiano para emprendedores y PyMEs de
                Bariloche que quieren subirse al tren de la IA sin quedarse en la estación.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  onClick={() => scrollToSection("aprendizaje")}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Comenzar a Aprender
                </Button>
                <Button
                  onClick={() => scrollToSection("servicios")}
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-lg px-8 py-4"
                >
                  Explorar Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Progress Indicator */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-yellow-300 max-w-md mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-yellow-600 mr-2" />
                  <span className="text-lg font-semibold text-gray-800">Tu Progreso</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Módulos completados</span>
                  <span>
                    {completedModules.length}/{modules.length}
                  </span>
                </div>
                <Progress value={progress} className="h-3 mb-2" />
                <p className="text-sm text-gray-500">
                  {progress === 0 ? "¡Empezá tu viaje!" : progress === 100 ? "¡Sos un/a crack!" : "¡Vas muy bien!"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué Ay!IA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">¿Por qué "¡Ay! IA"?</h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200 mb-8">
                <p className="text-xl text-center mb-8 text-gray-700">
                  Nuestro nombre surge de esa primera reacción que todos tenemos cuando nos enfrentamos a la tecnología
                  desconocida:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                    <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">¡Ay! - Antes 😰</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        "¡Ay! ¿Y esto cómo funciona?"
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        "¡Ay! No entiendo nada de lo que dice"
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        "¡Ay! Seguro esto es carísimo"
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        "¡Ay! Necesito ser programador"
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                    <h3 className="text-2xl font-bold text-green-600 mb-4 text-center">¡Ah! - Después 🎉</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        "¡Ah! ¡Qué fácil era en realidad!"
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        "¡Ah! Por fin entiendo para qué sirve"
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        "¡Ah! ¡Y hay opciones gratuitas!"
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        "¡Ah! Puedo hacerlo yo mismo/a"
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-center text-lg mt-8 font-semibold text-purple-700">
                  Nuestra misión es convertir tus "¡Ay!" de frustración en "¡Ah!" de descubrimiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Nuestros Servicios 100% Gratuitos y Solidarios
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Porque creemos que la tecnología debe ser para todos, no solo para quienes pueden pagarla. Nuestro
              proyecto es un servicio social sin fines de lucro.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-4 border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-center text-blue-800">Capacitación "De cero a héroe" en IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    De "¿qué es un prompt?" a "mirá mi chatbot personalizado" en tiempo récord. Cursos diseñados para
                    quienes nunca tocaron la IA y tienen miedo de romperla.
                  </p>
                  <Button
                    onClick={() => scrollToSection("aprendizaje")}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Explorar cursos →
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-4 border-green-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-center text-green-800">Guías "Para no perderse"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Explicamos las herramientas gratuitas de IA como si le estuvieras enseñando a tu abuela. Sin
                    tecnicismos innecesarios y con ejemplos que realmente entenderás.
                  </p>
                  <Button
                    onClick={() => scrollToSection("recursos")}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Ver herramientas →
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-4 border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-center text-purple-800">Asesoría de "Humano a Humano"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    A veces necesitás hablar con una persona real que no te responda con "según mi entrenamiento...".
                    Nuestros voluntarios están aquí para ayudarte sin jerga técnica.
                  </p>
                  <Button
                    onClick={() => scrollToSection("contacto")}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Agendar sesión →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Aprendizaje Section */}
        <section id="aprendizaje" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Ruta de Aprendizaje Práctica</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Módulos diseñados específicamente para emprendedores y PyMEs de Bariloche. Cada módulo tiene herramientas
              que podés usar hoy mismo.
            </p>

            {/* Navegación de Módulos */}
            <div className="mb-8">
              <Card className="border-4 border-indigo-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-indigo-800 flex items-center justify-center">
                    <BookOpen className="mr-3 h-7 w-7" />
                    Módulos Interactivos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {modules.map((module, index) => (
                      <Button
                        key={index}
                        variant={currentModule === index ? "default" : "outline"}
                        className={`h-auto p-4 flex flex-col items-center space-y-2 text-xs ${
                          completedModules.includes(index) ? "bg-green-100 border-green-400" : ""
                        }`}
                        onClick={() => setCurrentModule(index)}
                      >
                        {completedModules.includes(index) && <CheckCircle className="h-4 w-4 text-green-600" />}
                        <span className="font-medium text-center">{module}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contenido de Módulos */}
            <Tabs value={currentModule.toString()} className="w-full">
              {/* Módulo 0: Tu Primer Combo Digital */}
              <TabsContent value="0">
                <Card className="border-4 border-green-300 bg-gradient-to-r from-green-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-3xl text-green-800 flex items-center">
                      <Zap className="mr-3 h-8 w-8" />🧰 Tu primer "combo digital": todo empieza con una cuenta
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-lg space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                      <p className="text-blue-700 mb-4">
                        Antes de usar muchas de las herramientas que vas a conocer (como Google Sheets, Canva o algunas
                        IA), necesitás algo básico pero clave: <strong>una cuenta de Google</strong>.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-green-800">¿Qué es una cuenta de Google?</h3>
                      <p className="text-gray-700">Es como una llave maestra. Te da acceso a:</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                              <Mail className="h-5 w-5 text-green-600 mt-1" />
                              <span>
                                <strong>Gmail:</strong> correo electrónico
                              </span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <FileText className="h-5 w-5 text-green-600 mt-1" />
                              <span>
                                <strong>Google Drive:</strong> archivos y carpetas
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                              <BarChart3 className="h-5 w-5 text-green-600 mt-1" />
                              <span>
                                <strong>Google Sheets y Docs:</strong> planillas y textos
                              </span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <Palette className="h-5 w-5 text-green-600 mt-1" />
                              <span>
                                <strong>Canva, ChatGPT y muchas otras apps</strong> ¡sin tener que crear usuarios
                                nuevos!
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-100 p-6 rounded-lg border-2 border-yellow-300">
                      <h3 className="text-xl font-bold text-yellow-800 mb-4">📩 ¿Ya tenés un correo Gmail?</h3>
                      <div className="space-y-3">
                        <p className="text-yellow-700">
                          <strong className="text-green-700">✅ Sí:</strong> ya tenés tu cuenta de Google. Solo tenés
                          que iniciar sesión.
                        </p>
                        <p className="text-yellow-700">
                          <strong className="text-red-700">❌ No:</strong> podés crear una gratis con este botón:
                        </p>
                        <Button
                          onClick={() => window.open("https://accounts.google.com/signup", "_blank")}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          👉 Crear cuenta Google
                        </Button>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
                      <h3 className="text-xl font-bold text-purple-800 mb-3">
                        👨‍👩‍👧 ¿Compartís el dispositivo con otras personas?
                      </h3>
                      <p className="text-purple-700 mb-4">
                        Podés tener varias cuentas en el mismo celular o computadora. Pero si usás una cuenta
                        compartida, recordá que todo (Drive, Gmail, historial) queda a la vista del otro.
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                      <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                        <AlertTriangle className="mr-2 h-6 w-6" />🔐 Consejo clave
                      </h3>
                      <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-600">
                        <p className="text-red-700 font-medium">
                          Elegí una contraseña segura y que puedas recordar. Evitá usar la misma para todo. Y cuidá tu
                          privacidad 😉
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg border-2 border-green-300">
                      <h4 className="font-bold text-green-800 mb-2">💡 Tip Extra para Emprendedores:</h4>
                      <p className="text-green-700 text-sm">
                        Si tenés un negocio, considerá crear una cuenta específica para eso (ej:
                        "panaderiapepe@gmail.com"). Te va a ayudar a mantener separado lo personal de lo comercial.
                      </p>
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={() => {
                          completeModule(0)
                          setCurrentModule(1)
                        }}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Ya tengo mi cuenta Google <CheckCircle className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Módulo 1: ¿Qué es la IA? - Actualizar el value a "1" */}
              <TabsContent value="1">
                <Card className="border-4 border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="text-3xl text-blue-800 flex items-center">
                      <Brain className="mr-3 h-8 w-8" />
                      ¿Qué es la IA para tu Emprendimiento? 🤔
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-lg space-y-6">
                    <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-300">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">🎯 Para Emprendedores:</h3>
                      <p className="text-blue-700">
                        La IA es como tener un empleado que trabaja 24/7, no se enferma, no pide vacaciones, y puede
                        hacer tareas que te llevarían horas en solo minutos. Perfecto para emprendimientos que arrancan
                        con poco presupuesto.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-blue-800">Lo que ya usás sin darte cuenta:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <Smartphone className="h-5 w-5 text-blue-600 mt-1" />
                            <span>
                              <strong>MercadoLibre:</strong> Te sugiere precios para tus productos
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <Mail className="h-5 w-5 text-blue-600 mt-1" />
                            <span>
                              <strong>Gmail:</strong> Completa automáticamente tus emails
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <Camera className="h-5 w-5 text-blue-600 mt-1" />
                            <span>
                              <strong>Instagram:</strong> Sugiere hashtags para tus posts
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                            <span>
                              <strong>Google Maps:</strong> Optimiza rutas de delivery
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg border-2 border-green-300">
                        <h4 className="font-bold text-green-800 mb-3">💰 ¿Cuánto te puede ahorrar?</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-semibold text-green-700">Atención al cliente:</p>
                            <p className="text-green-600">De 8 horas diarias a automatizado 24/7</p>
                          </div>
                          <div>
                            <p className="font-semibold text-green-700">Creación de contenido:</p>
                            <p className="text-green-600">De 2 horas por post a 10 minutos</p>
                          </div>
                          <div>
                            <p className="font-semibold text-green-700">Gestión de inventario:</p>
                            <p className="text-green-600">Predicciones automáticas de stock</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
                      <h4 className="font-bold text-yellow-800 mb-2">🏠 Ejemplo Real - Emprendimiento Casero:</h4>
                      <p className="text-yellow-700">
                        María vende tortas desde su casa. Antes respondía WhatsApp todo el día. Ahora usa un chatbot que
                        responde precios, toma pedidos y agenda entregas. Pasó de trabajar 12 horas a 6 horas diarias.
                      </p>
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={() => {
                          completeModule(1)
                          setCurrentModule(2)
                        }}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Completar Módulo <CheckCircle className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Módulo 5: Prompts que Funcionan - Versión Resumida */}
              <TabsContent value="5">
                <Card className="border-4 border-pink-300 bg-gradient-to-r from-pink-50 to-purple-50">
                  <CardHeader>
                    <CardTitle className="text-3xl text-pink-800 flex items-center">
                      <MessageSquare className="mr-3 h-8 w-8" />
                      Prompts que Funcionan (Copiá y Usá) 📝
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Comparación Prompt Vago vs Preciso */}
                    <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                      <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                        <AlertTriangle className="mr-2 h-6 w-6" />❌ Prompt Vago vs ✅ Prompt Preciso
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Prompt Vago */}
                        <div className="bg-white p-4 rounded-lg border-2 border-red-400">
                          <div className="flex items-center mb-3">
                            <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
                              ❌
                            </div>
                            <h4 className="font-bold text-red-700">Prompt Vago</h4>
                          </div>

                          <div className="bg-red-100 p-3 rounded mb-3">
                            <p className="text-sm font-mono text-red-800">"Haceme un post para Instagram"</p>
                          </div>

                          <div className="mb-3">
                            <h5 className="font-semibold text-red-700 mb-2">Resultado:</h5>
                            <div className="bg-gray-100 p-3 rounded text-sm">
                              <p className="text-gray-700 mb-2">
                                "¡Hola! Somos una empresa que ofrece productos de calidad. #negocio #calidad"
                              </p>
                            </div>
                          </div>

                          <div className="bg-red-50 p-3 rounded text-center">
                            <p className="text-red-600 text-sm font-semibold">3 likes (tu mamá, tu tía y vos) 😅</p>
                          </div>
                        </div>

                        {/* Prompt Preciso */}
                        <div className="bg-white p-4 rounded-lg border-2 border-green-400">
                          <div className="flex items-center mb-3">
                            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
                              ✅
                            </div>
                            <h4 className="font-bold text-green-700">Prompt Preciso</h4>
                          </div>

                          <div className="bg-green-100 p-3 rounded mb-3">
                            <p className="text-sm font-mono text-green-800">
                              "Post para mi panadería 'Pan de Montaña' en Bariloche. Promocionar medialunas recién
                              horneadas de las 7am, ingredientes patagónicos, tono cálido familiar, call-to-action
                              WhatsApp, 5 hashtags locales, máximo 100 palabras."
                            </p>
                          </div>

                          <div className="mb-3">
                            <h5 className="font-semibold text-green-700 mb-2">Resultado:</h5>
                            <div className="bg-gray-100 p-3 rounded text-sm">
                              <p className="text-gray-700 mb-2">
                                "¡Buenos días, Bariloche! 🌅 Desde las 7am tenemos medialunas recién salidas del horno,
                                doraditas y crujientes 🥐✨ Hechas con manteca patagónica y el amor de siempre..."
                              </p>
                            </div>
                          </div>

                          <div className="bg-green-50 p-3 rounded text-center">
                            <p className="text-green-600 text-sm font-semibold">
                              47 likes, 12 comentarios, $15.000 en ventas 🎉
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Prompt Copiable */}
                    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                      <h3 className="text-xl font-bold text-blue-800 mb-4">🎯 Prompt Listo para Copiar</h3>
                      <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-blue-700">Chatbot para Emprendimiento</h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              copyPrompt(
                                `Sos el asistente virtual de [NOMBRE DE TU NEGOCIO], un emprendimiento en Bariloche que se dedica a [DESCRIPCIÓN].

Tu personalidad es: amigable, profesional pero cercano, conocedor del producto.

Información del negocio:
- Productos/servicios: [LISTA TUS PRODUCTOS]
- Precios: [LISTA TUS PRECIOS]
- Horarios: [TUS HORARIOS]
- Zona de entrega: [TU ZONA]
- Formas de pago: [EFECTIVO, TRANSFERENCIA, ETC.]

Instrucciones:
1. Saludá siempre de manera cálida
2. Si preguntan por productos que no tenés, ofrecé alternativas
3. Para pedidos, pedí: nombre, dirección, teléfono y forma de pago
4. Si no sabés algo, decí "Te paso con [TU NOMBRE]"

Ejemplo: "¡Hola! Soy el asistente de [TU NEGOCIO]. ¿En qué puedo ayudarte hoy?"`,
                                "chatbot-emprendimiento",
                              )
                            }
                          >
                            {copiedPrompt === "chatbot-emprendimiento" ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700 max-h-32 overflow-y-auto">
                          Sos el asistente virtual de [NOMBRE DE TU NEGOCIO]...
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={() => {
                          completeModule(5)
                          setCurrentModule(6)
                        }}
                        className="bg-pink-600 hover:bg-pink-700"
                      >
                        Completar Módulo <CheckCircle className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Otros módulos se pueden agregar aquí siguiendo el mismo patrón */}
            </Tabs>
          </div>
        </section>

        {/* Testimonios Section */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Lo Que Dicen Nuestros Usuarios</h2>

            <div className="max-w-4xl mx-auto">
              <Card className="border-4 border-yellow-300 bg-white shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                    "Cuando me dijeron que tenía que usar IA en mi negocio, mi primera reacción fue '¡Ay, no!'. Gracias
                    a los recursos de ¡Ay! IA, ahora tengo un asistente virtual que atiende preguntas básicas en mi
                    tienda online. Mis clientes piensan que contraté a alguien, pero fui solo yo siguiendo tutoriales
                    gratuitos. ¡De los '¡Ay!' de frustración pasé a los '¡Ay!' de sorpresa!"
                  </p>
                  <div className="font-bold text-gray-800 text-lg">María Rodríguez</div>
                  <div className="text-gray-600">Dueña de Boutique Online y Ex-Tecnofóbica Recuperada</div>
                  <div className="mt-4 text-sm text-purple-600">📍 San Carlos de Bariloche</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recursos Section */}
        <section id="recursos" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recursos Actualizados</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <Badge className="bg-green-500 text-white mb-2">Nuevo</Badge>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Guía de Herramientas IA Gratuitas 2025</h3>
                    <p className="text-gray-600">
                      Una compilación actualizada de las mejores herramientas gratuitas de IA para pequeños negocios de
                      Bariloche.
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => window.open("/guia-herramientas", "_blank")}>
                    Ver Guía Completa →
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6">
                    <MessageSquare className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Plantillas de Prompts para ChatGPT</h3>
                    <p className="text-gray-600">
                      Colección de prompts optimizados para diferentes tareas empresariales usando ChatGPT.
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => scrollToSection("plantillas")}>
                    Acceder →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Plantillas de Prompts Section */}
        <section id="plantillas" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Plantillas de Prompts Listas para Usar
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Prompts probados y optimizados para emprendedores de Bariloche. Solo copiá, pegá en ChatGPT y adaptá a tu
              negocio.
            </p>

            <div className="max-w-6xl mx-auto">
              {/* Categorías de Prompts */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Marketing y Ventas */}
                <Card className="border-4 border-pink-300 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-center text-pink-800">Marketing y Ventas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Prompt 1: Descripción de Producto */}
                    <div className="bg-white p-4 rounded-lg border border-pink-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-pink-700 text-sm">Descripción de Producto</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyPrompt(
                              `Escribime una descripción atractiva para vender [PRODUCTO] hecho en Bariloche. 

Características del producto:
- Material/ingredientes: [DETALLAR]
- Proceso de elaboración: [ARTESANAL/CASERO/ETC]
- Tamaño/cantidad: [ESPECIFICAR]
- Precio: $[PRECIO]

Tono: cálido, familiar, que destaque lo local y artesanal.
Incluí un call-to-action para WhatsApp.
Máximo 80 palabras.`,
                              "descripcion-producto",
                            )
                          }
                        >
                          {copiedPrompt === "descripcion-producto" ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600">
                        "Escribime una descripción para un collar hecho con piedras naturales de la zona..."
                      </p>
                    </div>

                    {/* Prompt 2: Post para Redes */}
                    <div className="bg-white p-4 rounded-lg border border-pink-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-pink-700 text-sm">Post para Redes Sociales</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyPrompt(
                              `Creame un post para Instagram/Facebook para mi emprendimiento [NOMBRE DEL NEGOCIO] en Bariloche.

Producto/servicio a promocionar: [DETALLAR]
Ocasión especial: [DÍA DE LA MADRE, INVIERNO, PROMO, ETC.]
Público objetivo: [TURISTAS, LOCALES, FAMILIAS, ETC.]

Incluí:
- Hook que llame la atención
- Beneficio principal del producto
- Precio o promoción
- Call-to-action claro
- 3-5 hashtags locales (#Bariloche #PatagoniaArtesanal)
- Emojis relevantes

Tono: cercano, auténtico, que genere ganas de comprar.
Máximo 150 palabras.`,
                              "post-redes",
                            )
                          }
                        >
                          {copiedPrompt === "post-redes" ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600">
                        "Escribime un texto para vender tortas caseras en redes sociales..."
                      </p>
                    </div>

                    {/* Prompt 3: Ideas de Productos */}
                    <div className="bg-white p-4 rounded-lg border border-pink-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-pink-700 text-sm">Ideas de Productos</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyPrompt(
                              `Dame 10 ideas creativas para [TIPO DE PRODUCTO: cajas gourmet/regalos/combos] usando productos típicos de Bariloche y la región.

Contexto:
- Mi emprendimiento se dedica a: [DESCRIBIR]
- Presupuesto por producto: $[RANGO]
- Temporada: [INVIERNO/VERANO/TODO EL AÑO]
- Público objetivo: [TURISTAS/LOCALES/CORPORATIVO]

Para cada idea incluí:
- Nombre del producto
- 3-5 componentes principales
- Precio sugerido
- A quién le vendería

Priorizá productos locales como: chocolates, dulces regionales, lanas, piedras, frutos rojos, licores, quesos, etc.`,
                              "ideas-productos",
                            )
                          }
                        >
                          {copiedPrompt === "ideas-productos" ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600">
                        "Dame ideas para una caja gourmet con productos locales..."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Gestión y Organización */}
                <Card className="border-4 border-blue-300 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-center text-blue-800">Gestión y Organización</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Prompt 4: Planificación Mensual */}
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-blue-700 text-sm">Planificación Mensual</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyPrompt(
                              `Ayudame a planificar las tareas del mes de [MES] para mi emprendimiento [TIPO DE NEGOCIO].

Información de mi negocio:
- Productos/servicios: [DETALLAR]
- Tiempo disponible por día: [HORAS]
- Objetivos del mes: [VENTAS, NUEVOS PRODUCTOS, ETC.]
- Fechas importantes: [FERIADOS, EVENTOS, TEMPORADAS]

Organizá las tareas por semanas incluyendo:
- Producción/preparación
- Marketing y redes sociales
- Administración y finanzas
- Compras de insumos
- Entregas y atención al cliente

Formato: lista semanal con emojis y prioridades (alta/media/baja).`,
                              "planificacion-mensual",
                            )
                          }
                        >
                          {copiedPrompt === "planificacion-mensual" ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600">
                        "Ayudame a planificar las tareas del mes en mi emprendimiento..."
                      </p>
                    </div>

                    {/* Prompt 5: Control de Gastos */}
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-blue-700 text-sm">Control de Gastos</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyPrompt(
                              `Creame un registro simple para controlar los gastos fijos mensuales de mi emprendimiento [NOMBRE/TIPO].

Incluí estas categorías:
- Alquiler/espacio de trabajo
- Insumos y materias primas
- Servicios (internet, teléfono, luz)
- Transporte y envíos
- Marketing y publicidad
- Otros gastos operativos

Para cada categoría, creá:
- Descripción del gasto
- Monto estimado mensual
- Fecha de pago habitual
- Si es fijo o variable

Al final, calculá el total mensual y sugerí 3 formas de optimizar gastos para un emprendimiento en Bariloche.`,
                              "control-gastos",
                            )
                          }
                        >
                          {copiedPrompt === "control-gastos" ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600">
                        "Armame un registro simple de mis gastos fijos mensuales..."
                      </p>
                    </div>

                    {/* Prompt 6: Resumen de Ventas */}
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-blue-700 text-sm">Resumen de Ventas</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyPrompt(
                              `Ayudame a crear un resumen semanal de ventas para mi emprendimiento de [TIPO DE PRODUCTOS].

Datos de esta semana:
- Producto 1: [NOMBRE] - [CANTIDAD] unidades - $[TOTAL]
- Producto 2: [NOMBRE] - [CANTIDAD] unidades - $[TOTAL]
- Producto 3: [NOMBRE] - [CANTIDAD] unidades - $[TOTAL]

Información adicional:
- Clientes nuevos: [NÚMERO]
- Canal de venta principal: [INSTAGRAM/WHATSAPP/PRESENCIAL]
- Promociones aplicadas: [DETALLAR]

Creá un resumen que incluya:
- Total vendido en pesos
- Producto más vendido
- Análisis simple de rendimiento
- 2-3 recomendaciones para la próxima semana`,
                              "resumen-ventas",
                            )
                          }
                        >
                          {copiedPrompt === "resumen-ventas" ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600">"Generame un resumen de ventas de esta semana..."</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Atención al Cliente */}
                <Card className="border-4 border-green-300 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-center text-green-800">Atención al Cliente</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Prompt 7: Presupuesto */}
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-green-700 text-sm">Presupuesto Profesional</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyPrompt(
                              `Escribime un presupuesto profesional para un cliente que quiere [DESCRIPCIÓN DEL PEDIDO].

Datos del pedido:
- Producto/servicio: [DETALLAR]
- Cantidad: [NÚMERO]
- Personalización: [SÍ/NO - DETALLAR]
- Fecha de entrega: [FECHA]
- Lugar de entrega: [BARILOCHE/ZONA]

Información de mi negocio:
- Nombre: [NOMBRE DEL EMPRENDIMIENTO]
- Especialidad: [QUÉ HACÉS]
- Precio unitario: $[PRECIO]

El presupuesto debe incluir:
- Descripción clara del producto
- Precio unitario y total
- Condiciones de pago (50% seña, 50% entrega)
- Tiempo de elaboración
- Política de cambios
- Datos de contacto

Tono: profesional pero cálido, que genere confianza.`,
                              "presupuesto-profesional",
                            )
                          }
                        >
                          {copiedPrompt === "presupuesto-profesional" ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600">
                        "Escribime un presupuesto breve para vender 10 cajas de desayuno..."
                      </p>
                    </div>

                    {/* Prompt 8: Respuestas WhatsApp */}
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-green-700 text-sm">Respuestas WhatsApp</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyPrompt(
                              `Creame 10 respuestas tipo para WhatsApp Business de mi emprendimiento [TIPO DE NEGOCIO] en Bariloche.

Información del negocio:
- Productos principales: [LISTAR]
- Horario de atención: [HORARIO]
- Zona de entrega: [ZONAS]
- Tiempo de elaboración: [DÍAS/HORAS]
- Formas de pago: [EFECTIVO, TRANSFERENCIA, ETC.]

Necesito respuestas para:
1. Saludo inicial
2. Consulta de precios
3. Consulta de disponibilidad
4. Información de entrega
5. Formas de pago
6. Tiempo de elaboración
7. Personalización de productos
8. Fuera de horario
9. Agradecimiento por compra
10. Seguimiento post-venta

Tono: amigable, profesional, que refleje la calidez patagónica.`,
                              "respuestas-whatsapp",
                            )
                          }
                        >
                          {copiedPrompt === "respuestas-whatsapp" ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600">"Respuestas automáticas para consultas frecuentes..."</p>
                    </div>

                    {/* Prompt 9: Email de Seguimiento */}
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-green-700 text-sm">Email de Seguimiento</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyPrompt(
                              `Escribime un email de seguimiento para enviar a clientes que compraron [PRODUCTO] hace una semana.

Objetivos del email:
- Agradecer la compra
- Preguntar si quedaron conformes
- Ofrecer productos relacionados
- Invitar a seguirnos en redes
- Pedir recomendación/reseña

Información del negocio:
- Nombre: [NOMBRE DEL EMPRENDIMIENTO]
- Instagram: @[USUARIO]
- Próximos productos: [MENCIONAR]
- Promoción actual: [SI HAY ALGUNA]

Tono: agradecido, cercano, sin ser invasivo.
Incluí un descuento del 10% para la próxima compra.
Máximo 200 palabras.`,
                              "email-seguimiento",
                            )
                          }
                        >
                          {copiedPrompt === "email-seguimiento" ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600">"Email para mantener contacto con clientes..."</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Consejos de Uso */}
              <div className="mt-12">
                <Card className="border-4 border-yellow-300 bg-gradient-to-r from-yellow-50 to-orange-50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center text-yellow-800">
                      💡 Cómo Usar Estas Plantillas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-3">🎯 Paso a Paso:</h4>
                        <ol className="space-y-2 text-yellow-700 list-decimal list-inside">
                          <li>Elegí la plantilla que necesitás</li>
                          <li>Copiá el prompt completo</li>
                          <li>Pegalo en ChatGPT</li>
                          <li>Reemplazá los [CORCHETES] con tu información</li>
                          <li>Enviá y ajustá el resultado si es necesario</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-3">✨ Tips para Mejores Resultados:</h4>
                        <ul className="space-y-2 text-yellow-700">
                          <li>• Sé específico con los detalles</li>
                          <li>• Mencioná siempre que sos de Bariloche</li>
                          <li>• Pedí que ajuste el tono si no te gusta</li>
                          <li>• Guardá las respuestas que te sirvan</li>
                          <li>• Probá variaciones del mismo prompt</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center mt-6">
                      <p className="text-yellow-700 mb-4">
                        <strong>¿Necesitás ayuda con algún prompt?</strong> Uníte a nuestro grupo de WhatsApp donde
                        otros emprendedores comparten sus experiencias.
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
            </div>
          </div>
        </section>

        {/* Comunidad Section */}
        <section id="comunidad" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div class="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Nuestra Comunidad Solidaria</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Porque nadie debería sufrir solo frente a un prompt que no funciona. Somos una red de apoyo mutuo donde
              todos aprendemos juntos.
            </p>

            <div className="flex justify-center">
              <div className="max-w-md">
                <Card className="border-4 border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-center text-orange-800">Grupo WhatsApp "Ay!IA"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-4">
                      Nuestro grupo de WhatsApp donde ninguna pregunta es demasiado básica. "¿Qué es un token?" "¿Por
                      qué mi IA solo me habla en inglés?" Aquí encontrarás apoyo real de otros emprendedores, no
                      juicios.
                    </p>
                    <Button
                      onClick={() => window.open("https://chat.whatsapp.com/IDdIBNB2wuRLgigly90828", "_blank")}
                      className="w-full bg-orange-600 hover:bg-orange-700"
                    >
                      Unirse al grupo de WhatsApp →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contacto</h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-4 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-blue-800">¿Querés saber más, sumarte o colaborar con ¡Ay!IA?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    ¡Estamos disponibles para responder dudas, propuestas creativas o nuevas conexiones! Escribinos y te
                    contestamos a la brevedad.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <span>
                        <strong>Email:</strong> consultasay@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <span>
                        <strong>Disponibilidad:</strong> Respondemos dudas, propuestas creativas y nuevas conexiones
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <span>
                        <strong>Ubicación:</strong> San Carlos de Bariloche, Argentina
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-4 border-green-300">
                <CardHeader>
                  <CardTitle className="text-green-800">Envíanos un mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Mensaje"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certificado de Finalización */}
        {completedModules.length === modules.length && (
          <section className="py-16 bg-gradient-to-r from-yellow-100 via-yellow-50 to-orange-100">
            <div className="container mx-auto px-4 text-center">
              <Card className="border-4 border-yellow-400 bg-white shadow-2xl max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <Award className="h-20 w-20 text-yellow-600 mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">¡Felicitaciones! 🎉</h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Ahora tenés todas las herramientas para automatizar y hacer crecer tu emprendimiento con IA. ¡Es
                    hora de ponerlo en práctica!
                  </p>
                  <Badge className="bg-yellow-500 text-white text-xl px-8 py-3 mb-6">
                    Emprendedor/a IA Certificado/a
                  </Badge>
                  <div className="mt-6 space-y-2">
                    <p className="text-lg font-semibold text-gray-700">Tu kit de herramientas incluye:</p>
                    <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                      <p>✅ +20 prompts listos para usar</p>
                      <p>✅ Plan de automatización en 30 días</p>
                      <p>✅ Calculadoras de costos y precios</p>
                      <p>✅ Estrategias de marketing automatizado</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-6">¡Compartí tu logro! #AyIA #EmprendedorIA #Bariloche</p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🤖</span>
                <span className="text-2xl font-bold">
                  ¡Ay!<span className="text-purple-400">IA</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando frustraciones tecnológicas en soluciones accesibles. Un proyecto 100% gratuito y solidario
                para que la IA llegue a todos los rincones de Bariloche.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  F
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  T
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  I
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-purple-400 pb-2">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("aprendizaje")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Aprendizaje
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("recursos")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Recursos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("comunidad")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Comunidad
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-purple-400 pb-2">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Guías
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Herramientas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-purple-400 pb-2">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 ¡Ay! IA. Todos los derechos reservados.
              <span className="text-purple-400"> Hecho con ❤️ en San Carlos de Bariloche</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
