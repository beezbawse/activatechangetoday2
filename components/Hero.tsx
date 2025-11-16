
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-sky-100 min-h-[80vh] md:min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl text-center mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
                    Rediscover Your Confidence.
                    <span className="block text-sky-700 mt-2">Activate Your Change Today.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                    Empathetic coaching for women ready to navigate life's transitions with strength and grace. It's time to step into your power and create the life you deserve.
                </p>
                <div className="mt-10">
                    <a
                        href="#contact"
                        className="inline-block bg-sky-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-sky-700 transition-transform transform hover:scale-105 shadow-lg"
                    >
                        Book a Free 30-Minute Session
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
