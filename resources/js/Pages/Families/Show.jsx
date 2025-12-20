
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ familia }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Detalles de la Familia
                </h2>
            }
        >
            <Head title={`Familia ${familia.apellido}`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    {/* Back Button */}
                    <div className="mb-6">
                        <Link href={route('dashboard')} className="text-[#D4AF37] hover:text-white flex items-center gap-2 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Volver al Dashboard
                        </Link>
                    </div>

                    <div className=" shadow-sm sm:rounded-lg bg-gray-800 light:bg-white border-t-4 border-[#D4AF37]">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-700 pb-4">
                                <div>
                                    <h3 className="text-3xl font-light text-[#D4AF37] mb-1">
                                        {familia.apellido}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Registrado el: {new Date(familia.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0 px-4 py-2 bg-gray-700 rounded-lg">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest">Teléfono</p>
                                    <p className="text-xl font-mono text-white">{familia.telefono}</p>
                                </div>
                            </div>

                            <h4 className="text-xl text-[#D4AF37] mb-4">Lista de Invitados ({familia.invitados.length})</h4>

                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm whitespace-nowrap">
                                    <thead className="uppercase tracking-wider border-b-2 border-gray-700 bg-gray-800 text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Nombre</th>
                                            <th scope="col" className="px-6 py-4">Edad</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700 bg-slate-600">
                                        {familia.invitados.map((guest) => (
                                            <tr key={guest.id} className="hover:bg-gray-700/50 transition-colors">
                                                <td className="px-6 py-4 text-[#D4AF37] font-medium">{guest.nombre}</td>
                                                <td className="px-6 py-4 text-[#D4AF37]">{guest.edad}</td>
                                            </tr>
                                        ))}
                                        {familia.invitados.length === 0 && (
                                            <tr>
                                                <td colSpan="2" className="px-6 py-4 text-center text-gray-500 italic">
                                                    No hay invitados registrados.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
