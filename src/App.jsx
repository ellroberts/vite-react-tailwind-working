import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700">
          🚀 Bi-Directional v1 – Tailwind Test
        </h1>
        <p className="text-gray-600 mt-2">
          If you can see this gradient and styled cards, Tailwind is working! ✨
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Card A</h2>
          <p>This is a sample card styled with Tailwind CSS.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Card B</h2>
          <p>You can now start designing your UX components confidently.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
