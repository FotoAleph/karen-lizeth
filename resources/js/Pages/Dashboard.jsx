
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Dashboard({ familiesCount, guestsCount, families }) {
    const [showGuestList, setShowGuestList] = useState(false);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Karen Lizeth - Mis invitados" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className="mb-8 flex justify-end">
                        <button
                            onClick={() => setShowGuestList(true)}
                            className="inline-flex items-center px-4 py-2 bg-[#D4AF37] border border-transparent rounded-md font-semibold text-xs text-[#0B1026] uppercase tracking-widest hover:bg-white focus:bg-white active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            Ver Lista Completa de Familias
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Families Card */}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6 border-l-4 border-[#D4AF37]">
                            <div className="text-gray-900 dark:text-gray-100">
                                <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">Familias Registradas</h3>
                                <p className="text-4xl font-bold mt-2 text-[#D4AF37]">{familiesCount}</p>
                            </div>
                        </div>

                        {/* Guests Card */}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6 border-l-4 border-blue-500">
                            <div className="text-gray-900 dark:text-gray-100">
                                <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">Total Invitados</h3>
                                <p className="text-4xl font-bold mt-2 text-blue-500">{guestsCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Guest List Modal */}
            <Modal show={showGuestList} onClose={() => setShowGuestList(false)} maxWidth="2xl">
                <div className="p-6 bg-[#0B1026] text-white border border-[#D4AF37]/30 rounded-lg">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-light text-[#D4AF37] tracking-widest uppercase">
                            Lista de Familias
                        </h2>
                        <button onClick={() => setShowGuestList(false)} className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>

                    <div className="overflow-y-auto max-h-[60vh] custom-scrollbar">
                        <table className="min-w-full text-left text-sm whitespace-nowrap">
                            <thead className="uppercase tracking-wider border-b border-[#D4AF37]/20 text-[#D4AF37]">
                                <tr>
                                    <th scope="col" className="px-4 py-3">Familia</th>
                                    <th scope="col" className="px-4 py-3 text-center">Invitados</th>
                                    <th scope="col" className="px-4 py-3 text-right">Acción</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#D4AF37]/10">
                                {families.map((family) => (
                                    <tr key={family.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-4 py-3 font-medium text-white">{family.apellido}</td>
                                        <td className="px-4 py-3 text-center text-gray-300">{family.invitados_count}</td>
                                        <td className="px-4 py-3 text-right">
                                            <Link
                                                href={route('families.show', family.id)}
                                                className="text-blue-400 hover:text-blue-300 underline text-xs uppercase tracking-wider"
                                            >
                                                Ver Detalles
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {families.length === 0 && (
                                    <tr>
                                        <td colSpan="3" className="px-4 py-6 text-center text-gray-500">
                                            No hay registros aún.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={() => setShowGuestList(false)} className="!bg-transparent !text-gray-400 !border-gray-600 hover:!text-white hover:!border-white">
                            Cerrar
                        </SecondaryButton>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
