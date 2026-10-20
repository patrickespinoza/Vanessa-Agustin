
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock3,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const fechaCelebracion = {
  dia: "Sábado",
  fecha: "19",
  mesAnio: "Diciembre 2026",
};

const evento = {
  titulo: "Nuestra celebración",
  hora: "5:30 PM",
  lugar: "Salón de Eventos Temazcaltitla",
  direccion:
    "Temascaltitla 128, 56240 La Purificación Tepetitla, Méx.",
  ubicacion:
    "https://maps.app.goo.gl/jGx3kKvFi3TWYtS2A",
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Celebracion() {
  return (
    <section
      id="celebracion"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F8F6F1]
        px-5
        py-20
        sm:px-8
        sm:py-28
        md:py-32
      "
    >
      {/* DECORACIÓN DE FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          border
          border-[#C5A46D]/15
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-72
          w-72
          rounded-full
          border
          border-[#C5A46D]/15
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ENCABEZADO */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <div className="h-px w-10 bg-[#C5A46D]/70" />

            <CalendarDays
              size={19}
              strokeWidth={1.3}
              className="text-[#B89B5E]"
            />

            <div className="h-px w-10 bg-[#C5A46D]/70" />
          </div>

          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-[#A88A59]
              sm:text-xs
            "
          >
            Nuestra celebración
          </p>

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              font-normal
              leading-tight
              text-[#242424]
              sm:text-5xl
              md:text-6xl
            "
          >
            Un día inolvidable
          </h2>

          <div
            className="
              mx-auto
              mt-7
              h-px
              w-16
              bg-[#C5A46D]
            "
          />

          {/* FECHA */}

          <div className="mt-12 flex flex-col items-center">

            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#A88A59]
                sm:text-sm
              "
            >
              {fechaCelebracion.dia}
            </p>

            <h3
              className="
                mt-3
                font-serif
                text-7xl
                font-normal
                leading-none
                text-[#242424]
                sm:text-8xl
                md:text-9xl
              "
            >
              {fechaCelebracion.fecha}
            </h3>

            <p
              className="
                mt-4
                font-serif
                text-lg
                tracking-[0.14em]
                text-[#A88A59]
                sm:text-xl
              "
            >
              {fechaCelebracion.mesAnio}
            </p>
          </div>
        </motion.div>

        {/* TARJETA DEL EVENTO */}

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -4 }}
          className="
            relative
            mx-auto
            w-full
            max-w-xl
            overflow-hidden
            rounded-tl-[3.5rem]
            rounded-br-[3.5rem]
            rounded-tr-2xl
            rounded-bl-2xl
            border
            border-[#DFD3BF]
            bg-white
            px-6
            py-12
            text-center
            shadow-[0_20px_60px_rgba(36,36,36,0.06)]
            sm:px-12
            sm:py-16
          "
        >
          {/* DETALLES DORADOS */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-[2px]
              w-28
              -translate-x-1/2
              bg-[#C5A46D]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-44
              w-44
              rounded-full
              border
              border-[#C5A46D]/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-9
              -top-9
              h-28
              w-28
              rounded-full
              border
              border-[#C5A46D]/20
            "
          />

          <div className="relative z-10 flex flex-col items-center">

            {/* ICONO PRINCIPAL */}

            <div
              className="
                mb-7
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-[#C5A46D]/40
                bg-[#F8F6F1]
              "
            >
              <MapPin
                size={34}
                strokeWidth={1.2}
                className="text-[#B89B5E]"
              />
            </div>

            {/* TÍTULO */}

            <h3
              className="
                font-serif
                text-3xl
                font-normal
                text-[#242424]
                sm:text-4xl
              "
            >
              {evento.titulo}
            </h3>

            {/* ORNAMENTO */}

            <div
              className="
                my-8
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <div className="h-px w-12 bg-[#C5A46D]/70" />
              <div
                className="
                  h-2
                  w-2
                  rotate-45
                  border
                  border-[#C5A46D]
                "
              />
              <div className="h-px w-12 bg-[#C5A46D]/70" />
            </div>

            {/* HORA */}

            <div className="flex flex-col items-center">

              <Clock3
                size={22}
                strokeWidth={1.4}
                className="mb-3 text-[#B89B5E]"
              />

              <p
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#A88A59]
                "
              >
                Hora del evento
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-3xl
                  text-[#242424]
                  sm:text-4xl
                "
              >
                {evento.hora}
              </p>
            </div>

            {/* SEPARADOR */}

            <div
              className="
                my-9
                h-px
                w-16
                bg-[#DFD3BF]
              "
            />

            {/* LUGAR */}

            <div className="flex flex-col items-center">

              <MapPin
                size={23}
                strokeWidth={1.4}
                className="mb-3 text-[#B89B5E]"
              />

              <p
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#A88A59]
                "
              >
                Lugar
              </p>

              <h4
                className="
                  mt-4
                  max-w-md
                  font-serif
                  text-2xl
                  font-normal
                  leading-snug
                  text-[#242424]
                  sm:text-3xl
                "
              >
                {evento.lugar}
              </h4>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-relaxed
                  text-[#716B63]
                  sm:text-base
                "
              >
                {evento.direccion}
              </p>
            </div>

            {/* BOTÓN GOOGLE MAPS */}

            <motion.a
              href={evento.ubicacion}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                mt-10
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#242424]
                px-8
                py-4
                text-sm
                font-medium
                tracking-wide
                text-white
                shadow-[0_8px_25px_rgba(36,36,36,0.12)]
                transition-all
                duration-300
                hover:bg-[#B89B5E]
              "
            >
              <MapPin size={18} strokeWidth={1.7} />

              Ver ubicación

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </motion.a>
          </div>

          {/* DETALLE INFERIOR */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-[2px]
              w-28
              -translate-x-1/2
              bg-[#C5A46D]
            "
          />
        </motion.article>

        {/* MENSAJE FINAL */}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mx-auto
            mt-14
            max-w-lg
            text-center
            font-serif
            text-lg
            italic
            leading-relaxed
            text-[#A88A59]
            sm:text-xl
          "
        >
          Cada momento será más especial
          con tu presencia.
        </motion.p>
      </div>
    </section>
  );
}
