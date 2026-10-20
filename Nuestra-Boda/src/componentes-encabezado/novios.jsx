
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const informacion = {
  novia: "Vanessa",
  novio: "Agustin",

  padresNovia: [
    "Blanca Estela Nájera Pérez",
    "Juan Antonio Segundo Ireta",
  ],

  padresNovio: [
    "Celsa Vázquez Solís",
    "Vicente Rendón García",
  ],
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
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
      duration: 0.8,
      delay: index * 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ==========================================
// TARJETA DE PADRES
// ==========================================

const TarjetaPadres = ({
  titulo,
  nombres,
  index,
}) => {
  return (
    <motion.div
      custom={index}
      variants={cardFade}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -5,
        transition: {
          duration: 0.3,
        },
      }}
      className="
        relative
        flex
        h-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-[#DFD3BF]
        bg-white
        px-5
        py-10
        text-center
        shadow-[0_10px_35px_rgba(36,36,36,0.04)]
        sm:px-7
        sm:py-12
      "
    >
      {/* DETALLE SUPERIOR */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[2px]
          w-20
          -translate-x-1/2
          bg-[#C5A46D]
        "
      />

      {/* ICONO */}

      <Heart
        size={23}
        strokeWidth={1.2}
        className="mb-6 text-[#B89B5E]"
      />

      {/* TÍTULO */}

      <h3
        className="
          mb-7
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[#A88A59]
          sm:text-xs
        "
      >
        {titulo}
      </h3>

      {/* NOMBRES */}

      <div className="flex flex-col items-center gap-5">
        {nombres.map((nombre, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <div
                className="
                  h-px
                  w-10
                  bg-[#DFD3BF]
                "
              />
            )}

            <p
              className="
                max-w-xs
                font-serif
                text-xl
                font-normal
                leading-relaxed
                text-[#242424]
                sm:text-2xl
              "
            >
              {nombre}
            </p>
          </React.Fragment>
        ))}
      </div>

      {/* DETALLE INFERIOR */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-20
          -translate-x-1/2
          bg-[#C5A46D]
        "
      />
    </motion.div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Novios = () => {
  return (
    <section
      id="nuestros-padres"
      className="
        relative
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#C5A46D]
        px-5
        py-20
        sm:px-8
        sm:py-28
        md:py-32
      "
    >
      {/* ==================================
          DECORACIONES DE FONDO
      ================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          border
          border-white/25
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          border
          border-white/25
        "
      />

      {/* ==================================
          TARJETA PRINCIPAL
      ================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.1 }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
          overflow-hidden
          rounded-tl-[3rem]
          rounded-br-[3rem]
          rounded-tr-2xl
          rounded-bl-2xl
          border
          border-white/70
          bg-[#F8F6F1]
          px-5
          py-14
          text-center
          shadow-[0_20px_65px_rgba(36,36,36,0.14)]
          sm:px-10
          sm:py-20
          md:px-14
        "
      >
        {/* LÍNEA DORADA SUPERIOR */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[3px]
            w-28
            -translate-x-1/2
            bg-[#C5A46D]
          "
        />

        {/* ==================================
            ENCABEZADO
        ================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* DETALLE DECORATIVO */}

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

            <Heart
              size={20}
              strokeWidth={1.3}
              className="text-[#B89B5E]"
            />

            <div className="h-px w-10 bg-[#C5A46D]/70" />
          </div>

          {/* SUBTÍTULO */}

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#A88A59]
              sm:text-xs
            "
          >
            Nuestra boda
          </p>

          {/* NOMBRES DE LOS NOVIOS */}

          <h2
            className="
              mt-6
              font-serif
              text-4xl
              font-normal
              leading-tight
              text-[#242424]
              sm:text-5xl
              md:text-6xl
            "
          >
            {informacion.novia}

            <span
              className="
                mx-3
                font-serif
                italic
                text-[#B89B5E]
              "
            >
              &
            </span>

            {informacion.novio}
          </h2>

          {/* SEPARADOR */}

          <div
            className="
              mx-auto
              mt-8
              h-px
              w-20
              bg-[#C5A46D]
            "
          />

          {/* TEXTO DE BENDICIÓN */}

          <p
            className="
              mx-auto
              mt-8
              max-w-lg
              font-serif
              text-xl
              italic
              leading-relaxed
              text-[#716B63]
              sm:text-2xl
            "
          >
            Con la bendición de nuestros padres
          </p>
        </motion.div>

        {/* ==================================
            TARJETAS DE LOS PADRES
        ================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6
            md:mt-16
            md:grid-cols-2
            md:gap-8
          "
        >
          {/* PADRES DE LA NOVIA */}

          <TarjetaPadres
            titulo="Padres de la Novia"
            nombres={informacion.padresNovia}
            index={0}
          />

          {/* PADRES DEL NOVIO */}

          <TarjetaPadres
            titulo="Padres del Novio"
            nombres={informacion.padresNovio}
            index={1}
          />
        </div>

        {/* ==================================
            MENSAJE FINAL
        ================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14"
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
              mx-auto
              max-w-md
              font-serif
              text-base
              italic
              leading-relaxed
              text-[#A88A59]
              sm:text-lg
            "
          >
            El amor que nos une también honra
            nuestras raíces.
          </p>
        </motion.div>

        {/* LÍNEA DORADA INFERIOR */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[3px]
            w-28
            -translate-x-1/2
            bg-[#C5A46D]
          "
        />
      </motion.div>
    </section>
  );
};

export default Novios;
