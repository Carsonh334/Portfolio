import { projects } from "../data/projects";

function Projects() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-10">Projects</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Tech Stack:</strong> {project.tech.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
