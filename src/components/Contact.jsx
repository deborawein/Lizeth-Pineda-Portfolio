export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/abstract-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.5em] text-sm text-white/70">Let’s Collaborate</p>
          <h2 className="text-4xl font-semibold mt-4">Contact</h2>
          <p className="text-white/80 mt-4 max-w-3xl mx-auto">
            Introduce your project in a few lines. I’ll respond with references and an outline of how we can partner.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white/95 text-gray-900 rounded-[32px] p-8 shadow-2xl border border-white/70 text-center">
          <img src="/favicon.svg" alt="Lizeth Pineda monogram" className="mx-auto mb-6 h-16 w-16" />
          <p className="text-sm uppercase tracking-[0.4em] text-red-500">Direct Line</p>
          <h3 className="text-3xl font-semibold mt-2">Lizeth Pineda</h3>
          <p className="text-gray-600 mt-2">Melbourne, Australia (GMT+11)</p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Send your brief and I’ll follow up via email with the next steps and a scheduling link if a call helps us move faster.
          </p>
          <a
            href="mailto:liizyapiro@gmail.com?subject=Project%20Inquiry"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-red-400 text-white px-6 py-3 font-semibold uppercase tracking-[0.2em] hover:bg-red-500 transition"
          >
            Email Me
          </a>
          <p className="text-xs text-gray-700 mt-12">© {new Date().getFullYear()} Lizeth Pineda. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
