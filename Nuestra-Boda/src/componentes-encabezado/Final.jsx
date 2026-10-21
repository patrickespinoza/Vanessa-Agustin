
import React from "react";
import { motion } from "framer-motion";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

const configuracion = {
  imagen: "/Final.png",

  // ========================================
  // POSICIÓN DE LA FOTOGRAFÍA
  // ========================================

  posicionDesktop: "center 65%",
  posicionMobile: "60% 50%",

  // ========================================
  // POSICIÓN DEL TEXTO
  // ========================================

  // Distancia desde el borde inferior
  // Entre menor el número, más abajo estará.

  textoBottomDesktop: "20px",
  textoBottomMobile: "12px",

  // ========================================
  // CONTENIDO
  // ========================================

  iniciales: "V & A",

  versiculo:
    "A dondequiera que tú fueres, iré yo, y dondequiera que vivieres, viviré",

  cita: "Rut 1:16",
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
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
        h-[100svh]
        min-h-[500px]
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* ==================================
          FOTOGRAFÍA
      ================================== */}

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

      {/* ==================================
          TEXTO INFERIOR
      ================================== */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          texto-final
          absolute
          left-0
          z-10
          flex
          w-full
          flex-col
          items-center
          justify-center
          px-5
          text-center
          sm:px-8
        "
        style={{
          "--bottom-desktop":
            configuracion.textoBottomDesktop,

          "--bottom-mobile":
            configuracion.textoBottomMobile,
        }}
      >
        


        {/* ==================================
            VERSÍCULO
        ================================== */}

        <p
          className="
            max-w-[340px]
            font-serif
            text-lg
            font-normal
            italic
            leading-relaxed
            text-white
            sm:max-w-lg
            sm:text-lg
            md:max-w-2xl
            md:text-xl
          "
          style={{
            textShadow:
              "0 2px 7px rgba(0,0,0,0.95), 0 4px 18px rgba(0,0,0,0.75)",
          }}
        >
          «{configuracion.versiculo}».
        </p>

        {/* ==================================
            CITA BÍBLICA
        ================================== */}

        <p
          className="
            mt-3
            text-[11px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-white
            sm:mt-4
            sm:text-xs
          "
          style={{
            textShadow:
              "0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          {configuracion.cita}
        </p>
      </motion.div>

      {/* ==================================
          ESTILOS RESPONSIVE
      ================================== */}

      <style>
        {`
          .imagen-final {
            object-position: var(--posicion-desktop);
          }

          .texto-final {
            bottom: var(--bottom-desktop);
          }

          @media (max-width: 767px) {
            .imagen-final {
              object-position: var(--posicion-mobile);
            }

            .texto-final {
              bottom: var(--bottom-mobile);
            }
          }
        `}
      </style>
    </section>
  );
}
