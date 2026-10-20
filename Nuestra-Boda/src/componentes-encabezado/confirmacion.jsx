
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const NUMERO_WHATSAPP = "527441771725";

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

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  // ==========================================
  // SELECCIONAR ASISTENCIA
  // ==========================================

  const seleccionarAsistencia = (opcion) => {
    setAsistencia(opcion);
    setError("");

    // Si no asistirá, limpiar cantidad
    if (opcion === "No asistiré") {
      setInvitados("");
    }
  };

  // ==========================================
  // CANTIDAD DE PERSONAS
  // ==========================================

  const cambiarInvitados = (e) => {
    const valor = e.target.value;

    // Permite escribir solamente números
    // Sin establecer un límite máximo
    const soloNumeros = valor.replace(/\D/g, "");

    setInvitados(soloNumeros);
    setError("");
  };

  // ==========================================
  // ENVIAR POR WHATSAPP
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !asistencia) {
      setError(
        "Por favor, escribe tu nombre y selecciona si asistirás."
      );
      return;
    }

    // Validar cantidad únicamente si asistirá
    if (
      asistencia === "Sí asistiré" &&
      (!invitados || !/^[1-9]\d*$/.test(invitados))
    ) {
      setError(
        "Por favor, escribe una cantidad válida de personas."
      );
      return;
    }

    setError("");

    const textoWhatsApp = [
      "💍 *CONFIRMACIÓN DE ASISTENCIA*",
      "",
      "Boda de Vanessa & Agustin",
      "📅 19 de diciembre de 2026",
      "",
      `👤 *Nombre:* ${nombre.trim()}`,
      `💌 *Asistencia:* ${asistencia}`,

      ...(asistencia === "Sí asistiré"
        ? [`👥 *Número de personas:* ${invitados}`]
        : []),

      "",
      "💬 *Mensaje para los novios:*",
      mensaje.trim() || "Sin mensaje adicional",
    ].join("\n");

    const urlWhatsApp =
      `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
        textoWhatsApp
      )}`;

    window.location.href = urlWhatsApp;
  };

  return (
    <section
      id="confirmacion"
      className="
        relative
        w-full
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

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-2xl
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
          className="mb-12 text-center"
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
            <div className="h-px w-10 bg-white/80" />

            <Heart
              size={21}
              strokeWidth={1.3}
              className="text-white"
            />

            <div className="h-px w-10 bg-white/80" />
          </div>

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-white
              sm:text-xs
            "
          >
            Nos encantaría verte
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
            "
          >
            Confirmación
            <span className="block">
              de Asistencia
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-7
              h-px
              w-20
              bg-white/90
            "
          />

          <p
            className="
              mx-auto
              mt-7
              max-w-md
              font-serif
              text-base
              leading-relaxed
              text-[#242424]
              sm:text-lg
            "
          >
            Nos encantará saber si podremos
            contar con tu presencia en este
            día tan especial.
          </p>
        </motion.div>

        {/* ==================================
            FORMULARIO
        ================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="
            relative
            overflow-hidden
            rounded-tl-[3rem]
            rounded-br-[3rem]
            rounded-tr-2xl
            rounded-bl-2xl
            border
            border-white/70
            bg-[#F8F6F1]
            px-6
            py-10
            shadow-[0_20px_65px_rgba(36,36,36,0.14)]
            sm:px-12
            sm:py-14
          "
        >
          {/* LÍNEA SUPERIOR */}

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

          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            {/* ==================================
                NOMBRE
            ================================== */}

            <div>
              <label
                htmlFor="nombre-invitado"
                className="
                  mb-3
                  block
                  text-sm
                  font-medium
                  text-[#242424]
                "
              >
                Nombre y apellido
              </label>

              <input
                id="nombre-invitado"
                type="text"
                placeholder="Escribe tu nombre completo"
                value={nombre}
                onChange={(e) =>
                  setNombre(e.target.value)
                }
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#DFD3BF]
                  bg-white
                  px-5
                  py-4
                  text-[#242424]
                  placeholder:text-[#99918A]
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-[#B89B5E]
                  focus:ring-1
                  focus:ring-[#B89B5E]/30
                "
              />
            </div>

            {/* ==================================
                ASISTENCIA
            ================================== */}

            <div>
              <p
                className="
                  mb-4
                  text-sm
                  font-medium
                  text-[#242424]
                "
              >
                ¿Nos acompañarás?
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* SÍ ASISTIRÉ */}

                <button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("Sí asistiré")
                  }
                  aria-pressed={
                    asistencia === "Sí asistiré"
                  }
                  className={`
                    rounded-xl
                    border
                    px-3
                    py-4
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    sm:text-base
                    ${
                      asistencia === "Sí asistiré"
                        ? "border-[#242424] bg-[#242424] text-white"
                        : "border-[#DFD3BF] bg-white text-[#242424] hover:border-[#B89B5E]"
                    }
                  `}
                >
                  Sí asistiré
                </button>

                {/* NO ASISTIRÉ */}

                <button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("No asistiré")
                  }
                  aria-pressed={
                    asistencia === "No asistiré"
                  }
                  className={`
                    rounded-xl
                    border
                    px-3
                    py-4
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    sm:text-base
                    ${
                      asistencia === "No asistiré"
                        ? "border-[#242424] bg-[#242424] text-white"
                        : "border-[#DFD3BF] bg-white text-[#242424] hover:border-[#B89B5E]"
                    }
                  `}
                >
                  No asistiré
                </button>
              </div>
            </div>

            {/* ==================================
                NÚMERO DE PERSONAS
                SOLO SI ASISTIRÁ
            ================================== */}

            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  key="cantidad-invitados"
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className="
                      rounded-xl
                      border
                      border-[#DFD3BF]
                      bg-white/50
                      p-5
                    "
                  >
                    {/* TÍTULO */}

                    <label
                      htmlFor="cantidad-invitados"
                      className="
                        mb-3
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-[#242424]
                      "
                    >
                      <Users
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#B89B5E]"
                      />

                      ¿Cuántas personas asistirán?
                    </label>

                    {/* CAMPO MANUAL */}

                    <input
                      id="cantidad-invitados"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Escribe la cantidad de personas"
                      value={invitados}
                      onChange={cambiarInvitados}
                      required={
                        asistencia === "Sí asistiré"
                      }
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#DFD3BF]
                        bg-white
                        px-5
                        py-4
                        text-[#242424]
                        placeholder:text-[#99918A]
                        outline-none
                        transition-colors
                        duration-300
                        focus:border-[#B89B5E]
                        focus:ring-1
                        focus:ring-[#B89B5E]/30
                      "
                    />

                    {/* ACLARACIÓN */}

                    <p
                      className="
                        mt-3
                        text-xs
                        leading-relaxed
                        text-[#716B63]
                      "
                    >
                      Escribe manualmente el número
                      total de personas que asistirán,
                      incluyéndote.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ==================================
                MENSAJE
            ================================== */}

            <div>
              <label
                htmlFor="mensaje-novios"
                className="
                  mb-3
                  block
                  text-sm
                  font-medium
                  text-[#242424]
                "
              >
                Mensaje para los novios

                <span
                  className="
                    ml-2
                    text-xs
                    font-normal
                    text-[#99918A]
                  "
                >
                  (Opcional)
                </span>
              </label>

              <textarea
                id="mensaje-novios"
                placeholder="Escribe un mensaje especial..."
                value={mensaje}
                onChange={(e) =>
                  setMensaje(e.target.value)
                }
                rows={4}
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-[#DFD3BF]
                  bg-white
                  px-5
                  py-4
                  text-[#242424]
                  placeholder:text-[#99918A]
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-[#B89B5E]
                  focus:ring-1
                  focus:ring-[#B89B5E]/30
                "
              />
            </div>

            {/* ==================================
                ERROR
            ================================== */}

            {error && (
              <p
                role="alert"
                className="
                  text-center
                  text-sm
                  text-red-700
                "
              >
                {error}
              </p>
            )}

            {/* ==================================
                BOTÓN WHATSAPP
            ================================== */}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#242424]
                px-5
                py-4
                text-sm
                font-medium
                tracking-wide
                text-white
                shadow-[0_8px_25px_rgba(36,36,36,0.12)]
                transition-colors
                duration-300
                hover:bg-[#B89B5E]
                sm:text-base
              "
            >
              <MessageCircle
                size={20}
                strokeWidth={1.6}
              />

              Confirmar por WhatsApp

              <Send
                size={17}
                strokeWidth={1.6}
              />
            </motion.button>

            <p
              className="
                text-center
                text-xs
                leading-relaxed
                text-[#716B63]
              "
            >
              Al confirmar, se abrirá WhatsApp
              con tu mensaje preparado para enviarlo.
            </p>
          </form>

          {/* LÍNEA INFERIOR */}

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

        {/* ==================================
            CIERRE DE LA INVITACIÓN
        ================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-16
            flex
            flex-col
            items-center
            text-center
          "
        >
          <p
            className="
              font-serif
              text-lg
              italic
              text-white
            "
          >
            Con cariño,
          </p>

          <h3
            className="
              mt-4
              font-serif
              text-3xl
              font-normal
              italic
              text-[#242424]
              sm:text-4xl
            "
          >
            Vanessa &amp; Agustin
          </h3>

          <div
            className="
              mt-7
              flex
              items-center
              gap-3
            "
          >
            <div className="h-px w-10 bg-white/80" />

            <Heart
              size={15}
              strokeWidth={1.4}
              className="text-white"
            />

            <div className="h-px w-10 bg-white/80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
