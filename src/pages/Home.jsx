import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Hi, I'm Carson 👋
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          I'm a computer science student passionate about building accessible,
          purposeful software that solves real-world problems.
        </p>
        <p className="text-base text-gray-500 mb-8">
          Currently at <strong>Call2Recycle</strong> and joining{" "}
          <strong>Tecsys</strong> this Fall.
        </p>
        <Link to="/projects">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            See My Work
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
