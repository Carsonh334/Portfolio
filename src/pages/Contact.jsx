function Contact() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-700 mb-8">
          I'm always open to opportunities, collaboration, or a quick chat about
          anything. Feel free to reach out!
        </p>

        <div className="space-y-4 text-gray-800">
          {/* <p>
            Email:{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-blue-600 hover:underline"
            >
              youremail@example.com
            </a>
          </p> */}
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Carsonh334"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/Carsonh334
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/carson-hom"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/carson-hom
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
