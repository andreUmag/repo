"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Code, GraduationCap, User, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

const TabContent = ({ title, children, isActive }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 p-6 transition-opacity duration-300 ease-in-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
        >
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            {children}
        </div>
    )
}

export default function SecondSection() {
    const [activeTab, setActiveTab] = useState("about")

    const tabs = [
        { id: "about", label: "Sobre mí", icon: User },
        { id: "skills", label: "Habilidades", icon: Code },
        { id: "experience", label: "Experiencia", icon: Briefcase },
        { id: "education", label: "Educación", icon: GraduationCap },
    ]

    return (
        <section className="min-h-screen w-full bg-black text-white py-20 px-4 md:px-8" id="aboutme">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Sobre mí
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-5 mt-5">

                    <motion.div
                        className="hidden md:flex md:w-1/3 md:flex-col gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {tabs.map((tab) => {
                            const Icon = tab.icon
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "group flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-200",
                                        activeTab === tab.id ? "bg-emerald-500/10 text-emerald-400" : "hover:bg-white/5",
                                    )}
                                >
                                    <Icon
                                        className={cn(
                                            "w-5 h-5 transition-colors",
                                            activeTab === tab.id ? "text-emerald-400" : "text-gray-400 group-hover:text-white",
                                        )}
                                    />
                                    <span className="font-medium">{tab.label}</span>
                                    {activeTab === tab.id && <ChevronRight className="w-4 h-4 ml-auto text-emerald-400" />}
                                </button>
                            )
                        })}
                    </motion.div>

                    <motion.div
                        className="md:hidden w-full "
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative">
                            <select
                                value={activeTab}
                                onChange={(e) => setActiveTab(e.target.value)}
                                className="w-full bg-black border border-white/20 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                            >
                                {tabs.map((tab) => (
                                    <option key={tab.id} value={tab.id}>
                                        {tab.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 w-5 h-5 text-emerald-400 pointer-events-none" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-2/3 bg-white/5 rounded-xl p-1 relative min-h-[400px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <TabContent title="Sobre mí" isActive={activeTab === "about"}>
                            <p className="text-gray-300 leading-relaxed">
                                Soy un desarrollador apasionado por crear experiencias web excepcionales. Con un enfoque en el
                                desarrollo frontend y una sólida comprensión de las tecnologías backend, me especializo en construir
                                aplicaciones web modernas y responsivas.
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <h4 className="font-medium text-emerald-400">Ubicación</h4>
                                    <p className="text-sm text-gray-300">Ciudad, País</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <h4 className="font-medium text-emerald-400">Disponibilidad</h4>
                                    <p className="text-sm text-gray-300">Tiempo completo</p>
                                </div>
                            </div>
                        </TabContent>

                        <TabContent title="Habilidades" isActive={activeTab === "skills"}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-emerald-400 font-medium mb-3">Frontend</h4>
                                    <div className="space-y-3">
                                        {["React", "Next.js", "JavaScript", "Angular"].map((skill) => (
                                            <div key={skill} className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                                                <span>{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-emerald-400 font-medium mb-3">Backend</h4>
                                    <div className="space-y-3">
                                        {["Node.js", "Django", "SpringBoot", "MySQL"].map((skill) => (
                                            <div key={skill} className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                                                <span>{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-emerald-400 font-medium mb-3">Herramientas</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Git", "Docker", "VS Code", "Figma", "AWS"].map((tool) => (
                                        <span key={tool} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TabContent>

                        <TabContent title="Experiencia" isActive={activeTab === "experience"}>
                            <div className="space-y-6">
                                <div className="relative pl-6 border-l border-emerald-500/30">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
                                    <h4 className="font-medium">Desarrollador de software</h4>
                                    <p className="text-emerald-400 text-sm">Edutin Academy •  Enero 2024 - Diciembre 2024</p>
                                    <p className="mt-2 text-sm text-gray-300">
                                        Desarrollo de aplicaciones con Python y Django. Personalización de sitios en WordPress y mantenimiento en CakePHP.
                                    </p>
                                </div>
                                <div className="relative pl-6 border-l border-emerald-500/30">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
                                    <h4 className="font-medium">Agente de Soporte de Base de Datos</h4>
                                    <p className="text-emerald-400 text-sm">Edutin Academy •  Enero 2023 - Diciembre 2023</p>
                                    <p className="mt-2 text-sm text-gray-300">
                                        Gestión de bases de datos MySQL y DynamoDB en AWS. Soporte técnico y optimización de consultas.
                                    </p>
                                </div>
                            </div>
                        </TabContent>

                        <TabContent title="Educación" isActive={activeTab === "education"}>
                            <div className="space-y-6">
                                <div className="relative pl-6 border-l border-emerald-500/30">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
                                    <h4 className="font-medium">Ingeniería en Sistemas</h4>
                                    <p className="text-emerald-400 text-sm">Universidad del Magdalena • 2020 - Actualidad</p>
                                    <p className="mt-2 text-sm text-gray-300">
                                        Conocimientos sólidos en programación, bases de datos, redes y arquitectura de software.
                                    </p>
                                </div>
                                <div className="relative pl-6 border-l border-emerald-500/30">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
                                    <h4 className="font-medium">Bachiller Tecnico en desarrollo Multimedia</h4>
                                    <p className="text-emerald-400 text-sm">IDEAL • 2019</p>
                                    <p className="mt-2 text-sm text-gray-300">
                                        Formación en diseño digital, animación y desarrollo web básico.
                                    </p>
                                </div>
                            </div>
                        </TabContent>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
