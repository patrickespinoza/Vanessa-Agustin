
import React from "react";

export default function Portada() {
  return (
    <section
      className="
        relative
        w-full
        h-[100svh]
        min-h-[550px]
        overflow-hidden
      "
    >
      {/* FOTOGRAFÍA DE PORTADA */}
      <img
        src="/portada.JPG"
        alt="Vanessa y Agustin"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

      {/* CONTENIDO SUPERIOR */}
      <div
        className="
          absolute
          top-0
          left-0
          z-10
          w-full
          flex
          flex-col
          items-center
          text-center
          px-5
          pt-16
          sm:pt-20
          md:pt-24
        "
      >
        {/* NOMBRES */}
        <h1
          className="
            font-serif
            font-normal
            italic
            text-white
            text-[clamp(2.8rem,7vw,6.5rem)]
            leading-[1.15]
            tracking-[-0.035em]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
          "
        >
          Vanessa
          <span
            className="
              block
              text-[0.55em]
              font-light
              not-italic
              my-1
              md:my-2
            "
          >
            &amp;
          </span>
          Agustin
        </h1>

        {/* LÍNEA DECORATIVA */}
        <div
          className="
            w-14
            md:w-20
            h-px
            bg-white/80
            mt-6
            mb-5
          "
        />

        {/* FECHA */}
        <p
          className="
            font-serif
            text-white
            text-[20px]
            sm:text-[22px]
            md:text-[25px]
            tracking-[0.3em]
            uppercase
            font-light
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]
          "
        >
          19 · 12 · 2026
        </p>
      </div>
    </section>
  );
}
