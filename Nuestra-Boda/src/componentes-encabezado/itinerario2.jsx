
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Wine,
  UtensilsCrossed,
  CalendarDays,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const eventos = [
  {
    titulo: "Recepción de invitados",
    hora: "5:30 p. m.",
    icono: Users,
  },
  {
    titulo: "Ceremonia civil",
    hora: "6:00 p. m.",
    icono: Heart,
  },
  {
    titulo: "Brindis y felicitaciones",
    hora: "6:30 p. m.",
    icono: Wine,
  },
  {
    titulo: "Cena y celebración",
    hora: "7:00 p. m.",
    icono: UtensilsCrossed,
  },
];

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardFade = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ==========================================
// TARJETA DEL ITINERARIO
// ==========================================

const TarjetaItinerario = ({
  evento,
  index,
  ultimo,
}) => {
  const Icono = evento.icono;

  return (
    <motion.div
      custom={index}
      variants={cardFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="
        relative
        flex
        w-full
        items-stretch
        gap-4
        sm:gap-7
      "
    >
      {/* LÍNEA DE TIEMPO */}

      <div
        className="
          relative
          flex
          w-12
          shrink-0
          flex-col
          items-center
          sm:w-16
        "
      >
        {/* ICONO */}

        <div
          className="
            relative
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#C5A46D]
            bg-white
            shadow-[0_4px_15px_rgba(36,36,36,0.05)]
            sm:h-16
            sm:w-16
          "
        >
          <Icono
            size={24}
            strokeWidth={1.4}
            className="text-[#B89B5E]"
          />
        </div>

        {/* LÍNEA VERTICAL */}

        {!ultimo && (
          <div
            className="
              absolute
              left-1/2
              top-12
              bottom-0
              w-px
              -translate-x-1/2
              bg-[#C5A46D]/60
              sm:top-16
            "
          />
        )}
      </div>

      {/* TARJETA */}

      <motion.div
        whileHover={{
          y: -4,
          transition: { duration: 0.25 },
        }}
        className="
          relative
          mb-8
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-[#E5DCCF]
          bg-white
          px-5
          py-7
          shadow-[0_10px_35px_rgba(36,36,36,0.04)]
          sm:mb-10
          sm:px-9
          sm:py-9
        "
      >
        {/* DETALLE DORADO */}

        <div
          className="
            absolute
            left-0
            top-1/2
            h-12
            w-[2px]
            -translate-y-1/2
            bg-[#C5A46D]
          "
        />

        {/* HORA */}

        <p
          className="
            text-xs
            font-medium
            tracking-[0.15em]
            text-[#A88A59]
            sm:text-sm
          "
        >
          {evento.hora}
        </p>

        {/* NOMBRE DEL EVENTO */}

        <h3
          className="
            mt-3
            font-serif
            text-xl
            font-normal
            leading-snug
            text-[#242424]
            sm:text-2xl
            md:text-3xl
          "
        >
          {evento.titulo}
        </h3>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Itinerario2 = () => {
  return (
    <section
      id="itinerario"
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
      {/* DECORACIONES DE FONDO */}

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
          bottom-10
          h-72
          w-72
          rounded-full
          border
          border-[#C5A46D]/15
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-4xl
        "
      >
        {/* ==================================
            ENCABEZADO
        ================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mb-16
            text-center
            sm:mb-20
          "
        >
          {/* ICONO DECORATIVO */}

          <div
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <div
              className="
                h-px
                w-10
                bg-[#C5A46D]/70
              "
            />

            <CalendarDays
              size={20}
              strokeWidth={1.3}
              className="text-[#B89B5E]"
            />

            <div
              className="
                h-px
                w-10
                bg-[#C5A46D]/70
              "
            />
          </div>

          {/* SUBTÍTULO */}

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
            Nuestro día
          </p>

          {/* TÍTULO */}

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              font-normal
              text-[#242424]
              sm:text-5xl
              md:text-6xl
            "
          >
            Itinerario
          </h2>

          {/* SEPARADOR */}

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

          <p
            className="
              mt-7
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#716B63]
              sm:text-sm
            "
          >
            19 de diciembre de 2026
          </p>
        </motion.div>

        {/* ==================================
            LÍNEA DE TIEMPO
        ================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-2xl
          "
        >
          {eventos.map((evento, index) => (
            <TarjetaItinerario
              key={index}
              evento={evento}
              index={index}
              ultimo={index === eventos.length - 1}
            />
          ))}
        </div>

        {/* ==================================
            MENSAJE FINAL
        ================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-8
            text-center
            sm:mt-12
          "
        >
          <div
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <div className="h-px w-10 bg-[#C5A46D]/70" />

            <div
              className="
                h-2
                w-2
                rotate-45
                border
                border-[#C5A46D]
              "
            />

            <div className="h-px w-10 bg-[#C5A46D]/70" />
          </div>

          <p
            className="
              font-serif
              text-lg
              italic
              leading-relaxed
              text-[#A88A59]
              sm:text-xl
            "
          >
            Cada instante será
            un recuerdo inolvidable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Itinerario2;
