
import React from "react";
import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";

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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENTE VESTIMENTA - WEDLY
// ==========================================

const Vestimenta = () => {
  return (
    <section
      id="vestimenta"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
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

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          overflow-hidden
          rounded-tl-[3.5rem]
          rounded-br-[3.5rem]
          rounded-tr-2xl
          rounded-bl-2xl
          border
          border-[#DFD3BF]
          bg-white
          shadow-[0_20px_60px_rgba(36,36,36,0.07)]
          lg:grid-cols-2
        "
      >
        {/* ==================================
            IMAGEN
        ================================== */}

        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
            relative
            h-[300px]
            min-h-[300px]
            overflow-hidden
            sm:h-[420px]
            md:h-[480px]
            lg:h-full
          "
        >
          <img
            src="/Dresscode.png"
            alt="Código de vestimenta formal elegante"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* SOMBRA SUTIL SOBRE IMAGEN */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/5
            "
          />
        </motion.div>

        {/* ==================================
            CONTENIDO
        ================================== */}

        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
            px-7
            py-14
            text-center
            sm:px-12
            sm:py-16
            lg:px-14
            lg:py-20
          "
        >
          {/* DETALLE SUPERIOR */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-[2px]
              w-24
              -translate-x-1/2
              bg-[#C5A46D]
              lg:hidden
            "
          />

          {/* SUBTÍTULO */}

          <motion.p
            variants={fadeUp}
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#A88A59]
              sm:text-xs
            "
          >
            Código de vestimenta
          </motion.p>

          {/* TÍTULO */}

          <motion.h2
            variants={fadeUp}
            className="
              mt-5
              font-serif
              text-4xl
              font-normal
              leading-tight
              text-[#242424]
              sm:text-5xl
              lg:text-[3.5rem]
            "
          >
            Formal Elegante
          </motion.h2>

          {/* ORNAMENTO DORADO */}

          <motion.div
            variants={fadeUp}
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
          </motion.div>

          {/* DESCRIPCIÓN */}

          <motion.p
            variants={fadeUp}
            className="
              max-w-md
              font-serif
              text-base
              leading-[1.9]
              text-[#716B63]
              sm:text-lg
            "
          >
            Queremos compartir contigo una noche
            elegante y especial. Te invitamos a
            acompañarnos con vestimenta formal
            para celebrar juntos este momento
            inolvidable.
          </motion.p>

          {/* ==================================
              RECOMENDACIÓN POR EL FRÍO
          ================================== */}

          <motion.div
            variants={fadeUp}
            className="
              relative
              mt-10
              w-full
              max-w-md
              overflow-hidden
              rounded-2xl
              border
              border-[#DFD3BF]
              bg-[#F8F6F1]
              px-6
              py-8
              sm:px-8
            "
          >
            {/* LÍNEA SUPERIOR */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-[2px]
                w-16
                -translate-x-1/2
                bg-[#C5A46D]
              "
            />

            {/* ICONO */}

            <div
              className="
                mx-auto
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#C5A46D]/40
                bg-white
              "
            >
              <Snowflake
                size={23}
                strokeWidth={1.4}
                className="text-[#B89B5E]"
              />
            </div>

            {/* TÍTULO RECOMENDACIÓN */}

            <h3
              className="
                font-serif
                text-xl
                font-normal
                leading-snug
                text-[#242424]
                sm:text-2xl
              "
            >
              Una recomendación
              <br />
              para tu comodidad
            </h3>

            {/* LÍNEA */}

            <div
              className="
                mx-auto
                my-5
                h-px
                w-12
                bg-[#C5A46D]/70
              "
            />

            {/* TEXTO */}

            <p
              className="
                text-sm
                leading-[1.9]
                text-[#716B63]
                sm:text-base
              "
            >
              Por la temporada de invierno,
              te recomendamos llevar un abrigo
              o alguna prenda cálida para
              disfrutar cómodamente de nuestra
              celebración.
            </p>
          </motion.div>

          {/* FRASE FINAL */}

  
        </div>
      </motion.div>
    </section>
  );
};

export default Vestimenta;
