export function Hero() {
  return (
    <section id="hero" className="min-h-screen grid md:grid-cols-2 bg-[#d9cbb6]">
      <div className="flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/abstract-bg.jpg')" }}>
        <img
          src="/assets/profile-DLRArl9M.jpg"
          alt="Lizeth Pineda"
          className="w-full max-w-max sm:max-w-sm md:w-[420px] shadow-lg p-1"
        />
      </div>

      <div className="bg-[#d9cbb6] flex items-center">
        <div className="max-w-xl px-16 py-6">
          <p className="text-red-400 text-3xl mb-2">¡Hola!</p>
          <h1 className="text-7xl font-serif mb-6">I am Liz.</h1>
          <p className="text-gray-800 leading-relaxed mb-6">
            Turning ideas into visual stories through design, photography, and creative communication.
          </p>
          <p className="text-red-500 text-sm mb-10">
            Convirtiendo ideas en historias visuales a través del diseño, la fotografía y la comunicación creativa.
          </p>
          <a
            href="#portfolio"
            className="inline-block bg-red-400 text-white px-8 py-3 rounded-full hover:bg-red-500 transition"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
