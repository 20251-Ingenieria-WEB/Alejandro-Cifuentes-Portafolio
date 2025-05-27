import { Hero } from "@/componentes";
import { Cardset } from "@/componentes/Cardset";
import { Cursoset } from "@/componentes/Cursoset";
import { ProyectoSet } from "@/componentes/ProyectoSet";
import React from "react";

export default function Home() {
  // Información para la experiencia laboral
  const fakeCards = [
    {
      id: 0,
      name: "Logística y planeación de eventos",
      description: "Atención al cliente, montaje de eventos y boletería",
      imageUrl: "calendar"
    },
    {
      id: 1,
      name: "Coordinador logístico",
      description: "Capacitación de personal, gestión de proveedores, planificación y manejo de personal",
      imageUrl: "check"
    },
    {
      id: 2,
      name: "Desarrollador",
      description: "Fundamentos en Python, Java, HTML, CSS",
      imageUrl: "coding"
    },
    {
      id: 3,
      name: "Servicios de mensajería",
      description: "Entrega de paquetes, diligencias personales",
      imageUrl: "carro"
    },
    {
      id: 4,
      name: "Asesor de mesa",
      description: "Asesoría en restaurantes, atención en mesa",
      imageUrl: "comida"
    }
  ];

  // Información para los títulos obtenidos
  const fakeCursos = [
    {
      id: 0,
      universidad: "Colegio Militar José María Córdova",
      periodo: "Enero 2014 - Diciembre 2016",
      titulo: "Bachiller académico con orientación militar",
      descripcion: "Combina la formación académica con la formación militar, con una instrucción especializada en valores cívico-militares, liderazgo, disciplina, trabajo en equipo y preparación física.",
    },
    {
      id: 1,
      universidad: "Politécnico de Colombia",
      periodo: "Enero 2024 - Marzo 2024",
      titulo: "Diplomado de Programación en JAVA",
      descripcion: "Orientado al desarrollo de aplicaciones orientadas a objetos, con énfasis en estructuras de datos, manejo de excepciones, programación modular y desarrollo de interfaces gráficas.",
    },
    {
      id: 2,
      universidad: "Politécnico de Colombia",
      periodo: "Abril 2024 - Junio 2024",
      titulo: "Diplomado de Programación en PHP",
      descripcion: "Enfocado en el desarrollo de aplicaciones web dinámicas. Se abordaron conceptos fundamentales del lenguaje, programación orientada a objetos, interacción con bases de datos MySQL, gestión de sesiones y formularios.",
    },
    {
      id: 3,
      universidad: "Universidad de Antioquia",
      periodo: "Febrero 2018 - Cursando actualmente",
      titulo: "Ingeniería de Sistemas",
      descripcion: "Con enfoque en diseñar, desarrollar, implementar y gestionar sistemas de información y soluciones tecnológicas, aplicando principios de ingeniería, ciencias computacionales y administración.",
    },
  ];

  // Información para los proyectos de GitHub
  const proyectos = [
    {
      id: 1,
      nombre: "Gestor de Torneos UdeA",
      descripcion: "Es una plataforma para gestionar torneos de las olimpiadas de la Universidad de Antioquia.",
      imagen: "Home.png",
      githubUrl: "https://github.com/Nicolas-carmona16/gestion-torneos",
    },
    {
      id: 2,
      nombre: "Gestor de compras y ventas de una tienda de mascotas",
      descripcion: "Es una plataforma que gestiona todas las ventas que se hacen y las compras a los proveedores de una tienda de mascotas para reponer lo vendido.",
      imagen: "HomePetManager.png",
      githubUrl: "https://github.com/cifu0426/pet-manager-main",
    },
    {
      id: 3,
      nombre: "Búsqueda de personajes RICK y MORTY",
      descripcion: "Es una aplicación web pequeña que permite buscar personajes de la serie animada Rick y Morty por medio de una API pública.",
      imagen: "RickyMortyAPI.png",
      githubUrl: "https://github.com/20251-Ingenieria-WEB/taller-html-Alejandro-Cifuentes-Escobar",
    },
    {
      id: 4,
      nombre: "GitHub Personal",
      descripcion: "Acá puedes ver todos los proyectos que he realizado (casi todos son proyectos de la universidad).",
      imagen: "GitHub.png",
      githubUrl: "https://github.com/cifu0426",
    },
  ];

  return (
    <main className="flex flex-col bg-gray-200 min-h-screen">
      <div className="contenido central container mx-auto px-4">
        <Hero />

        <section className="trabajo w-full max-w-[1000px] mx-auto">
          <h2 className="text-[32px] font-bold text-gray-800 text-center mt-[50px] mb-[50px]">
            Experiencia Laboral
          </h2>
          <Cardset cards={fakeCards} />
        </section>

        <section className="estudio w-full max-w-[1000px] mx-auto">
          <h2 className="text-[32px] font-bold text-gray-800 text-center mt-[50px] mb-[50px]">
            Mis Estudios
          </h2>
          <Cursoset cursos={fakeCursos} />
        </section>

        <section className="proyectos w-full max-w-[1000px] mx-auto mt-[80px]">
          <h2 className="text-[32px] font-bold text-gray-800 text-center mb-[50px]">
            Proyectos
          </h2>
          <ProyectoSet proyectos={proyectos} />
        </section>
      </div>
    </main>
  );
}
