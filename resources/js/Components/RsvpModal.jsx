
import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import Countdown from '@/Components/Countdown';

export default function RsvpModal({ show, onClose }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        apellido: '',
        telefono: '',
        invitados: []
    });

    const handleGuestCountChange = (e) => {
        const count = parseInt(e.target.value) || 0;
        const currentGuests = data.invitados;
        let newGuests = [...currentGuests];

        if (count > currentGuests.length) {
            for (let i = currentGuests.length; i < count; i++) {
                newGuests.push({ nombre: '', edad: '' });
            }
        } else {
            newGuests = newGuests.slice(0, count);
        }

        setData('invitados', newGuests);
    };

    const updateGuest = (index, field, value) => {
        const newGuests = [...data.invitados];
        newGuests[index][field] = value;
        setData('invitados', newGuests);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Custom validation check (redundant with 'required' attr but safe)
        if (data.invitados.length === 0) {
            alert("Por favor indica el número de invitados.");
            return;
        }

        post(route('rsvp.store'), {
            onSuccess: () => {
                alert('¡Gracias por confirmar tu asistencia!');
                reset();
                onClose();
            }
        });
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="p-6 bg-[#0B1026] text-white border border-[#D4AF37]/30 rounded-lg">
                <h2 className="text-2xl font-light text-[#D4AF37] mb-6 text-center tracking-widest uppercase">
                    Confirmar Asistencia
                </h2>

                <Countdown targetDate="2026-01-10T18:30:00" />

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Family Name Input */}
                    <div>
                        <InputLabel htmlFor="apellido" value="Apellido de la Familia" className="text-[#D4AF37]" />
                        <TextInput
                            id="apellido"
                            className="mt-1 block w-full bg-[#050814] border-[#D4AF37]/50 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                            value={data.apellido}
                            onChange={(e) => setData('apellido', e.target.value)}
                            required
                            placeholder="Ej: Familia Pérez"
                        />
                        {errors.apellido && <div className="text-red-500 text-sm mt-1">{errors.apellido}</div>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone Input */}
                        <div>
                            <InputLabel htmlFor="telefono" value="Teléfono" className="text-[#D4AF37]" />
                            <TextInput
                                id="telefono"
                                type="tel"
                                className="mt-1 block w-full bg-[#050814] border-[#D4AF37]/50 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                                value={data.telefono}
                                onChange={(e) => setData('telefono', e.target.value)}
                                required
                                placeholder="+57 300 123 4567"
                            />
                            {errors.telefono && <div className="text-red-500 text-sm mt-1">{errors.telefono}</div>}
                        </div>

                        {/* Guest Count Input */}
                        <div>
                            <InputLabel htmlFor="guest_count" value="No. Invitados" className="text-[#D4AF37]" />
                            <TextInput
                                id="guest_count"
                                type="number"
                                min="1"
                                className="mt-1 block w-full bg-[#050814] border-[#D4AF37]/50 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                                value={data.invitados.length || ''}
                                onChange={handleGuestCountChange}
                                required
                                placeholder="Indica cantidad"
                            />
                        </div>
                    </div>

                    {/* Guests List */}
                    <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                        {data.invitados.length > 0 && (
                            <div className="border-b border-[#D4AF37]/20 pb-2 mb-4">
                                <h3 className="text-lg text-[#D4AF37]">Datos de los Invitados</h3>
                            </div>
                        )}

                        {data.invitados.map((guest, index) => (
                            <div key={index} className="flex gap-4 items-end animate-fadeIn space-y-2 sm:space-y-0 flex-wrap sm:flex-nowrap">
                                <div className="flex-1 min-w-[150px]">
                                    <InputLabel value={`Invitado ${index + 1}`} className="text-[#D4AF37] text-xs mb-1" />
                                    <TextInput
                                        className="w-full bg-[#050814] border-[#D4AF37]/30 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                                        value={guest.nombre}
                                        onChange={(e) => updateGuest(index, 'nombre', e.target.value)}
                                        required
                                        placeholder="Nombre Completo"
                                    />
                                    {errors[`invitados.${index}.nombre`] && <div className="text-red-500 text-xs">{errors[`invitados.${index}.nombre`]}</div>}
                                </div>
                                <div className="w-24">
                                    <InputLabel value="Edad" className="text-gray-400 text-xs mb-1" />
                                    <TextInput
                                        type="number"
                                        className="w-full bg-[#050814] border-[#D4AF37]/30 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                                        value={guest.edad}
                                        onChange={(e) => updateGuest(index, 'edad', e.target.value)}
                                        required
                                        placeholder="Edad"
                                    />
                                    {errors[`invitados.${index}.edad`] && <div className="text-red-500 text-xs">{errors[`invitados.${index}.edad`]}</div>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-end space-x-3 border-t border-[#D4AF37]/20 pt-4">
                        <SecondaryButton onClick={onClose} className="!bg-transparent !text-gray-400 !border-gray-600 hover:!text-white hover:!border-white">
                            Cancelar
                        </SecondaryButton>
                        <PrimaryButton disabled={processing} className="!bg-[#D4AF37] !text-[#0B1026] hover:!bg-white hover:!text-[#0B1026] font-bold">
                            {processing ? 'Enviando...' : 'Enviar Confirmación'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
