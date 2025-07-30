function About() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About Me</h1>

        <p className="text-lg text-gray-700 mb-8">
          I'm Carson — a Computer Science student at York University with a
          passion for building clean, accessible software. I enjoy working on
          both frontend and backend systems, and I’m always looking for ways to
          turn ideas into impact.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            🎓 Education
          </h2>
          <p className="text-gray-600">
            <strong>York University</strong> – BSc in Computer Science
            (2022–2026)
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            💼 Experience
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Call2Recycle Canada</strong> – Operations Assistant
              (2024–Present)
            </li>
            <li>
              <strong>Tecsys</strong> – Incoming Technical Writer Intern (Fall
              2025)
            </li>
          </ul>
        </section>

        {/* <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            📄 Resume
          </h2>
          <a
            href="/Carson_Hom_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Download My Resume
          </a>
        </section> */}
      </div>
    </main>
  );
}

export default About;
