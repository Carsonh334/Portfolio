function Goals() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">My Goals</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🎯 Career Goals
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Become a confident full-stack developer with strong frontend and
              backend skills
            </li>
            <li>
              Contribute to meaningful open-source or accessibility-focused
              projects
            </li>
            <li>
              Develop and maintain high-quality software used in the real world
            </li>
            <li>
              Improve as a communicator through technical writing and
              collaboration
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📈 Personal Growth
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Build discipline through consistent routines and work habits
            </li>
            <li>
              Learn to take intentional action instead of defaulting to
              passivity
            </li>
            <li>Practice emotional self-awareness and healthy expression</li>
            <li>Take on leadership opportunities when possible</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🛠 Technical Learning
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Master Python, JavaScript/TypeScript, and Java backend frameworks
            </li>
            <li>
              Understand systems-level programming using C/C++ and embedded
              systems
            </li>
            <li>Explore cloud platforms like Azure and AWS in depth</li>
            <li>
              Strengthen data structures, algorithms, and LeetCode-style problem
              solving
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Goals;
