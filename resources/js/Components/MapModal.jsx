
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import Countdown from '@/Components/Countdown';

export default function MapModal({ show, onClose }) {
    return (
        <Modal show={show} onClose={onClose}>
            <div className="p-6 bg-[#0B1026] text-white border border-[#D4AF37]/30 rounded-lg">
                <h2 className="text-2xl font-light text-[#D4AF37] mb-6 text-center tracking-widest uppercase">
                    Ubicación del Evento
                </h2>

                <Countdown targetDate="2026-01-10T18:30:00" />

                <div className="space-y-6">
                    <div className="text-center text-gray-300">
                        <p className="mb-2 font-semibold text-[#D4AF37]">Salon Comunal La Aurora</p>

                        <p>Tocancipa, Colombia</p>
                    </div>

                    {/* Google Maps Embed Placeholder */}
                    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-[#D4AF37]/20 shadow-lg relative bg-gray-800">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d496.8584686264575!2d-73.91022663621044!3d4.961644832534089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1766169782298!5m2!1ses!2sco"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none border border-[#D4AF37]/10"></div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <a
                            href="https://maps.app.goo.gl/kHiqw2by67aPo27b9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-[#D4AF37] border border-transparent rounded-md font-semibold text-xs text-[#0B1026] uppercase tracking-widest hover:bg-white focus:bg-white active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            Abrir en Google Maps
                        </a>
                    </div>
                </div>

                <div className="mt-6 flex justify-end border-t border-[#D4AF37]/20 pt-4">
                    <SecondaryButton onClick={onClose} className="!bg-transparent !text-gray-400 !border-gray-600 hover:!text-white hover:!border-white">
                        Cerrar
                    </SecondaryButton>
                </div>
            </div>
        </Modal>
    );
}
