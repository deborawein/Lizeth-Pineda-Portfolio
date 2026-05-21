export function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 w-full bg-cover bg-center" style={{ backgroundImage: "url('/abstract-bg.jpg')" }}>
      <div className="bg-white/85 backdrop-blur-sm p-10 rounded-[32px] shadow-lg max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-gray-800 leading-relaxed">
          Creative, curious, and passionate about visual communication. I enjoy transforming ideas into engaging designs that help brands and people tell their story.
        </p>
        <p className="text-gray-800 leading-relaxed">
          From branding and social media content to photography and digital design, I love exploring different creative forms. I’m also a language enthusiast and believe communication and creativity go hand in hand.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Always open to new projects, collaborations, and opportunities to keep creating.
        </p>
      </div>
    </section>
  )
}
