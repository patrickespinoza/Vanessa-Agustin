
import React from "react";
import { motion } from "framer-motion";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

const configuracion = {
  imagen: "/final.JPG",

  // POSICIÓN DE LA FOTOGRAFÍA
  // Primer valor: horizontal
  // Segundo valor: vertical

  posicionDesktop: "center 50%",
  posicionMobile: "60% 50%",

  // INICIALES
  iniciales: "V & A",
};

// ==========================================
// COMPONENTE IMAGEN FINAL
// ==========================================

export default function ImagenFinal() {
  return (
    <section
      id="imagen-final"
      className="
        relative
        w-full
        h-[100svh]
        min-h-[500px]
        overflow-hidden
        bg-black
      "
    >
      {/* ==================================
          FOTOGRAFÍA
      ================================== */}

      <picture className="absolute inset-0 block h-full w-full">

        <source
          media="(max-width: 767px)"
          srcSet={configuracion.imagen}
        />

        <img
          src={configuracion.imagen}
          alt="Vanessa y Agustin"
          className="
            imagen-final
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          style={{
            "--posicion-desktop":
              configuracion.posicionDesktop,
            "--posicion-mobile":
              configuracion.posicionMobile,
          }}
        />
      </picture>

      {/* ==================================
          INICIALES INFERIORES
      ================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          absolute
          bottom-12
          left-0
          z-10
          flex
          w-full
          flex-col
          items-center
          justify-center
          px-5
          text-center
          sm:bottom-16
          md:bottom-20
        "
      >
        {/* LÍNEA DECORATIVA */}

        <div
          className="
            mb-5
            h-px
            w-16
            bg-white/80
          "
        />

        {/* INICIALES */}

        <h2
          className="
            font-serif
            text-5xl
            font-normal
            italic
            tracking-[0.08em]
            text-white
            drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)]
            sm:text-6xl
            md:text-7xl
          "
        >
          {configuracion.iniciales}
        </h2>

        {/* DETALLE INFERIOR */}

        <div
          className="
            mt-5
            h-px
            w-16
            bg-white/80
          "
        />
      </motion.div>

      {/* ==================================
          ESTILOS RESPONSIVE
      ================================== */}

      <style>
        {`
          .imagen-final {
            object-position: var(--posicion-desktop);
          }

          @media (max-width: 767px) {
            .imagen-final {
              object-position: var(--posicion-mobile);
            }
          }
        `}
      </style>
    </section>
  );
}
