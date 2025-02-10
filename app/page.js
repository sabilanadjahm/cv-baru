import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen">
      <Head>
        <title>CV Online</title>
        <meta name="description" content="CV Online dengan Next.js" />
      </Head>
      
      {/* About Section */}
      <section id="about" className="p-10 bg-gray-800 flex flex-col items-center text-center rounded-lg shadow-lg mx-5 my-10">
        <img 
          src="images/profile.jpg" 
          alt="Profile Picture" 
          className="w-40 h-40 rounded-full border-4 border-blue-400 mb-4 shadow-lg" 
        />
        <h2 className="text-5xl font-extrabold text-blue-400">About Me</h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl">Halo, Saya Sabila</p>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl">Saya adalah seorang developer yang memiliki pengalaman dalam membangun website dan aplikasi dengan fokus pada desain yang menarik dan fungsionalitas yang optimal.</p>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="p-10 bg-gray-700 text-center rounded-lg shadow-lg mx-5 my-10">
        <h2 className="text-5xl font-extrabold text-yellow-400">Skills</h2>
        <div className="flex justify-center gap-6 mt-6">
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Next.js</span>
          <span className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md">React.js</span>
          <span className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md">Tailwind CSS</span>
          <span className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md">JavaScript</span>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="p-10 bg-gray-800 text-center rounded-lg shadow-lg mx-5 my-10">
        <h2 className="text-5xl font-extrabold text-green-400">Services</h2>
        <p className="mt-4 text-gray-300 text-lg">Saya menyediakan layanan:</p>
        <ul className="mt-4 text-lg text-gray-300">
          <li>✅ Pengembangan Website</li>
          <li>✅ Aplikasi Mobile</li>
          <li>✅ Desain UI/UX</li>
        </ul>
      </section>
      
      {/* Portfolios Section */}
      <section id="portfolios" className="p-10 bg-gray-700 text-center rounded-lg shadow-lg mx-5 my-10">
        <h2 className="text-5xl font-extrabold text-red-400">Portfolios</h2>
        <p className="mt-4 text-gray-300 text-lg">Berikut adalah beberapa proyek yang telah saya kerjakan:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-gray-600 rounded-lg shadow-md">🚀 Project 1</div>
          <div className="p-4 bg-gray-600 rounded-lg shadow-md">💻 Project 2</div>
          <div className="p-4 bg-gray-600 rounded-lg shadow-md">📱 Project 3</div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="p-10 bg-gray-800 text-center rounded-lg shadow-lg mx-5 my-10">
        <h2 className="text-5xl font-extrabold text-purple-400">Contact</h2>
        <p className="mt-4 text-gray-300 text-lg">Silakan hubungi saya melalui:</p>
        <p className="text-xl font-semibold text-blue-300 mt-2">📧 sabilanadjah@gmail.com</p>
      </section>
    </div>
  );
}
