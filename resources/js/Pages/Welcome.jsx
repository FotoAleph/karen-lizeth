import { Head, Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import RsvpModal from '@/Components/RsvpModal';
import MapModal from '@/Components/MapModal';

export default function Welcome({ auth }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [showRsvp, setShowRsvp] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const images = [
        "/storage/imagenes/1.jpg",
        "/storage/imagenes/2.jpg",
        "/storage/imagenes/3.jpg",
        "/storage/imagenes/4.jpg"
    ];
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        // Attempt autoplay
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((error) => {
                    console.log("Autoplay blocked:", error);
                    setIsPlaying(false);
                });
        }
    }, []);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <>
            <Head title="Karen Lizeth - Mis 15 Años" />
            <div className="min-h-screen bg-[#0B1026] text-white selection:bg-[#D4AF37] selection:text-white overflow-x-hidden font-serif">

                {/* Header */}
                <header className="fixed top-0 w-full z-50 bg-[#0B1026]/90 backdrop-blur-sm border-b border-[#D4AF37]/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            <div className="flex-shrink-0 flex items-center">
                                {/* Logo / Title Icon */}
                                <svg className="h-10 w-10 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                                <span className="ml-3 text-2xl text-[#D4AF37] tracking-widest uppercase font-light">Karen Lizeth</span>
                            </div>

                        </div>
                    </div>
                </header>

                {/* Audio Controls */}
                <div className="fixed bottom-4 left-4 z-50">
                    <audio ref={audioRef} src="/storage/assets/music.mp3" loop />
                </div>

                <main>
                    {/* Hero Section */}
                    <div className="relative pt-32 pb-3 sm:pt-40 sm:pb-4 lg:pb-12 overflow-hidden">

                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl sm:text-4xl flex flex-col items-center font-serif text-[#D4AF37] tracking-widest uppercase animate-fadeInLeft">
                                <span className="text-[#D4AF37]">Luz Ayda</span>
                                <span className="text-[#D4AF37]">Cuestas Yepes</span>
                            </h2>
                            <h3 className="text-2xl sm:text-4xl flex flex-col items-center font-serif text-[#D4AF37] tracking-widest uppercase animate-fadeInUp ">
                                <span className="text-[#D4AF37]">y</span>
                            </h3>
                            <h2 className="text-2xl sm:text-4xl flex flex-col items-center font-serif text-[#D4AF37] tracking-widest uppercase animate-fadeInRight ">
                                <span className="text-[#D4AF37]">Nelson Arturo</span>
                                <span className="text-[#D4AF37]">Quintero Torres</span>
                            </h2>
                            <p className="text-lg sm:text-2xl text-center text-gray-200 leading-relaxed font-light italic animate-fadeInUp p-4">
                                Tienen el gusto de invitarte a la fiesta de 15 años de su hija
                            </p>

                            <img className="flex w-full h-auto" src="storage/assets/karen.svg" />

                        </div>

                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                            {/* Decorative 15 SVG */}
                            <div className="flex justify-center">
                                <div className="relative">
                                    <svg className="h-40 w-40 text-[#D4AF37] opacity-80" viewBox="0 0 100 100" fill="currentColor">
                                        <text x="50" y="70" fontSize="60" textAnchor="middle" fontFamily="serif" fontStyle="italic">15</text>
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                    </svg>
                                    <div className="absolute -top-4 -right-4 text-[#D4AF37] animate-pulse">
                                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-4xl sm:text-6xl font-light text-white mb-6 tracking-widest">
                                Mis Quince Años
                            </h1>
                            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full overflow-hidden -z-10 opacity-20">
                            <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-4xl mx-auto px-6  text-center relative">
                        {/* Quote Box */}
                        <div className="border border-[#D4AF37]/30 p-8 md:p-12 rounded-lg bg-[#0B1026]/50 backdrop-blur shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed font-light italic animate-fadeInUp animate-delay-1000 ">
                                "Hace 15 años Dios me regaló la vida y una gran familia, hoy celebro con la ilusión de que esta noche sea inolvidable, llena de música, baile, risas y amor. Los espero para que sean parte de esta gran celebración."
                            </p>
                            <div onClick={toggleAudio} className="mt-8 flex justify-center space-x-4 text-[#D4AF37]">
                                <svg className="h-12 w-12" fill="#D4AF37" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </div>
                        </div>


                        {/* Carousel Section */}
                        <div className="max-w-6xl mx-auto px-4 py-1">
                            <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20 group">
                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-transparent to-transparent opacity-60"></div>
                                    </div>
                                ))}

                                {/* Controls */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[#D4AF37]/80 text-white p-3 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-[#D4AF37]/80 text-white p-3 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>

                                {/* Indicators */}
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImage(idx)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentImage ? 'bg-[#D4AF37] w-8' : 'bg-white/50 hover:bg-white'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 animate-fadeIn">
                            <div className="flex flex-col md:flex-row gap-2">
                                <p className="text-[#D4AF37] text-2xl font-sans">10 de enero de 2026</p>
                                <p className="text-[#D4AF37] text-2xl font-sans">6:30 PM</p>
                            </div>
                            <button
                                onClick={() => setShowRsvp(true)}
                                className="px-8 py-3 bg-[#D4AF37] text-[#0B1026] text-lg font-serif italic rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-white hover:scale-105 transition-all duration-300"
                            >
                                Confirmar Asistencia
                            </button>
                            <div className="flex flex-col md:flex-row gap-2">
                                <p className="text-[#D4AF37] text-2xl font-sans">Salon Comunal La Aurora</p>
                                <p className="text-[#D4AF37] text-2xl font-sans">Tocancipá</p>
                            </div>
                            <button
                                onClick={() => setShowMap(true)}
                                className="px-8 py-3 bg-transparent border border-[#D4AF37] text-[#D4AF37] text-lg font-serif italic rounded-full hover:bg-[#D4AF37] hover:text-[#0B1026] hover:scale-105 transition-all duration-300"
                            >
                                Ver Ubicación
                            </button>
                        </div>

                        <picture>
                            <img src="storage/assets/formal.svg" alt="Traje Formal" />
                        </picture>

                        <h2 className="text-2xl sm:text-4xl flex flex-col items-center font-serif text-[#D4AF37] tracking-widest uppercase animate-fadeInUp">Lluvia de sobres</h2>

                    </div>

                </main>

                <footer className="bg-[#050814] py-12 border-t border-[#D4AF37]/20 mt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-[#D4AF37] font-serif italic mb-4">Gracias por ser parte de mi vida</p>
                        <div className="flex justify-center space-x-6 mb-8">
                            {/* Decorative footer icons */}
                            <a href={route('login')}>
                                <svg className="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                            </a>
                        </div>
                        <p className="text-gray-500 text-xs font-light">
                            &copy; {new Date().getFullYear()} Eventos Casa Angel. Todos los derechos reservados.
                        </p>
                    </div>

                </footer>
                <RsvpModal show={showRsvp} onClose={() => setShowRsvp(false)} />
                <MapModal show={showMap} onClose={() => setShowMap(false)} />
            </div>

            <style>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 1.5s ease-out forwards;
                }
            `}</style>
        </>
    );
}
